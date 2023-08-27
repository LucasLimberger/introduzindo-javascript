import createCodeElement from "./codeHighlighting.js";
export { PageFragment, Paragraph, Heading, Img, CodeBlock, InputToOutput, Question };

type IdAndClass = { id?: string; className?: string };

abstract class PageFragment {
    constructor({ id = undefined, className = undefined }: IdAndClass) {
        this.id = id;
        this.className = className;
    }
    id: string | undefined;
    className: string | undefined;

    protected _html: HTMLElement | null = null;

    protected abstract _buildHTML(): HTMLElement;

    getHTML(): HTMLElement {
        if (this._html === null) {
            this._html = this._buildHTML();
            if (this.id !== undefined) {
                this._html.id = this.id;
            }
            if (this.className !== undefined) {
                this._html.classList.add(...this.className.split(" "));
            }
        }
        return this._html;
    }

    removeHTML() {
        this._html?.remove();
    }

    deleteHTML() {
        this.removeHTML();
        this._html = null;
    }
}

class Paragraph extends PageFragment {
    constructor(public content: string, options: IdAndClass = {}) {
        super(options);
    }
    _buildHTML() {
        const element = document.createElement("p");
        element.innerHTML = this.content;
        element.querySelectorAll("code").forEach(code => {
            const newElement = createCodeElement(code.innerText);
            newElement.className = "inline-code";
            code.replaceWith(newElement);
        });
        return element;
    }
}

class Heading extends PageFragment {
    constructor(public content: string, options: IdAndClass = {}) {
        super(options);
    }
    _buildHTML() {
        const element = document.createElement("h3");
        element.innerHTML = this.content;
        return element;
    }
}

class Img extends PageFragment {
    constructor(public source: string, public alt: string, options: IdAndClass = {}) {
        super(options);
    }
    _buildHTML() {
        const element = document.createElement("img");
        element.src = this.source;
        element.alt = this.alt;
        return element;
    }
}

class CodeBlock extends PageFragment {
    constructor(
        public content: string,
        public outputContent: string | null = null,
        options: IdAndClass = {}
    ) {
        super(options);
    }

    _buildHTML() {
        const pre = document.createElement("pre");
        pre.append(createCodeElement(this.content));

        if (this.outputContent === null) {
            pre.className = "code-wrapper";
            return pre;
        }

        const element = document.createElement("div");
        element.className = "in-out";

        const codeWrapper = document.createElement("div");
        codeWrapper.className = "code-wrapper";
        codeWrapper.append(pre);
        const output = document.createElement("output");
        output.className = "code-wrapper";
        output.append(createCodeElement(this.outputContent));

        element.append(codeWrapper);
        element.append(output);
        return element;
    }
}

class InputToOutput extends PageFragment {
    constructor(
        public content: string,
        public inputType: "text" | "number",
        public mapFunction: (input: string) => unknown,
        options: IdAndClass = {}
    ) {
        super(options);
        this.inputId = InputToOutput._generateId();
        this._onInput = this._onInput.bind(this);
        // _onInput é usado para responder a eventos, que alteram o valor de "this"
    }
    private _codeInsertPoint: HTMLElement | null = null;
    private _inputElement: HTMLInputElement | null = null;
    private _outputElement: HTMLOutputElement | null = null;
    inputId: string;

    private static _id = 0;
    private static _generateId() {
        return "input-#" + this._id++;
    }

    protected _buildHTML() {
        const element = document.createElement("div");
        element.className = "in-out";

        const inputWrapper = document.createElement("div");
        inputWrapper.className = "code-wrapper";
        const pre = document.createElement("pre");
        const code = createCodeElement(this.content);
        code.innerHTML = code.innerHTML.replace("@", `<span class="insert-input">$</span>`);
        this._codeInsertPoint = code.querySelector(".insert-input")!;
        pre.append(code);
        inputWrapper.append(pre);

        const label = document.createElement("label");
        this._inputElement = document.createElement("input");
        this._inputElement.type = this.inputType;
        this._inputElement.id = this.inputId;
        label.append(this._inputElement);
        inputWrapper.append(label);

        this._outputElement = document.createElement("output");
        this._outputElement.htmlFor.add(this.inputId);
        this._outputElement.className = "code-wrapper";

        element.append(inputWrapper);
        element.append(this._outputElement);

        this._inputElement.addEventListener("input", this._onInput);
        return element;
    }

    private _onInput(event: Event) {
        const inputValue = this._inputElement!.value;
        this._codeInsertPoint!.innerText = inputValue;

        let outputValue = this.mapFunction(inputValue);
        if (outputValue instanceof Array) {
            outputValue = outputValue.map(item => (typeof item === "string" ? `"${item}"` : item));
        } else if (typeof outputValue === "string") {
            outputValue = `"${outputValue}"`;
        }
        this._outputElement!.replaceChildren(createCodeElement(String(outputValue)));
    }
}

class Question extends PageFragment {
    constructor(
        public answers: string[],
        public correctAnswer: number,
        public explanation: string,
        options: IdAndClass = {}
    ) {
        super(options);
        this._onClick = this._onClick.bind(this);
    }

    private _answerListElement: HTMLElement | null = null;
    private _explanationElement: HTMLElement | null = null;
    private _isSolved = false;

    _buildHTML() {
        const element = document.createElement("div");
        this._answerListElement = document.createElement("div");
        this._answerListElement.className = "answer-list";
        this._answerListElement.addEventListener("click", this._onClick);
        for (const answer of this.answers) {
            const button = document.createElement("button");
            button.className = "answer";
            button.innerHTML = answer;
            this._answerListElement.append(button);
        }
        element.append(this._answerListElement);

        element.querySelectorAll("code").forEach(code => {
            const newElement = createCodeElement(code.innerText);
            newElement.className = "inline-code";
            code.replaceWith(newElement);
        });
        return element;
    }

    deleteHTML() {
        this.removeHTML();
        this._answerListElement!.removeEventListener("click", this._onClick);
        this._html = null;
        this._answerListElement = null;
        this._explanationElement = null;
    }

    private _onClick(event: MouseEvent) {
        if (event.target === null) return;

        const source = event.target as HTMLElement;
        const answerIndex = Array.from(this._answerListElement!.children).indexOf(source);
        if (answerIndex === -1) return;

        const isCorrect = answerIndex === this.correctAnswer;
        if (!this._isSolved && !source.classList.contains("incorrect")) {
            this._html!.dispatchEvent(
                new CustomEvent("custom:questionanswered", {
                    bubbles: true,
                    detail: { isCorrect },
                })
            );
        }
        if (isCorrect) {
            this._handleCorrectAnswer(source);
        } else {
            this._handleWrongAnswer(source);
        }
    }

    private _handleCorrectAnswer(answerElement: HTMLElement) {
        answerElement.classList.add("correct");
        this._isSolved = true;
        this._explanationElement = document.createElement("p");
        this._explanationElement.innerHTML = this.explanation;
        this._explanationElement.querySelectorAll("code").forEach(code => {
            const newElement = createCodeElement(code.innerText);
            newElement.className = "inline-code";
            code.replaceWith(newElement);
        });
        this._html!.append(this._explanationElement);
    }

    private _handleWrongAnswer(answerElement: HTMLElement) {
        answerElement.classList.add("incorrect");
    }

    markAsSolved() {
        if (this._answerListElement === null) return;
        if (this._isSolved) return;
        this._handleCorrectAnswer(
            this._answerListElement.children[this.correctAnswer] as HTMLElement
        );
    }
}

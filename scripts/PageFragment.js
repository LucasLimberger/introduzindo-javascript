import createCodeElement from "./codeHighlighting.js";
export { PageFragment, Paragraph, Heading, Img, CodeBlock, InputToOutput, Question };
class PageFragment {
    constructor(id = null) {
        this._html = null;
        this.id = id;
    }
    getHTML() {
        if (this._html === null) {
            this._html = this._buildHTML();
            if (this.id !== null) {
                this._html.id = this.id;
            }
        }
        return this._html;
    }
    removeHTML() {
        var _a;
        (_a = this._html) === null || _a === void 0 ? void 0 : _a.remove();
    }
    deleteHTML() {
        this.removeHTML();
        this._html = null;
    }
}
class Paragraph extends PageFragment {
    constructor(content, id) {
        super(id);
        this.content = content;
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
    constructor(content, id) {
        super(id);
        this.content = content;
    }
    _buildHTML() {
        const element = document.createElement("h3");
        element.innerHTML = this.content;
        return element;
    }
}
class Img extends PageFragment {
    constructor(source, alt, id) {
        super(id);
        this.source = source;
        this.alt = alt;
    }
    _buildHTML() {
        const element = document.createElement("img");
        element.src = this.source;
        element.alt = this.alt;
        return element;
    }
}
class CodeBlock extends PageFragment {
    constructor(content, outputContent = null, id) {
        super(id);
        this.content = content;
        this.outputContent = outputContent;
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
    constructor(content, inputType, mapFunction, id) {
        super(id);
        this.content = content;
        this.inputType = inputType;
        this.mapFunction = mapFunction;
        this._codeInsertPoint = null;
        this._inputElement = null;
        this._outputElement = null;
        this.inputId = InputToOutput._generateId();
        this._onInput = this._onInput.bind(this);
        // _onInput é usado para responder a eventos, que alteram o valor de "this"
    }
    static _generateId() {
        return "input-#" + this._id++;
    }
    _buildHTML() {
        const element = document.createElement("div");
        element.className = "in-out";
        const inputWrapper = document.createElement("div");
        inputWrapper.className = "code-wrapper";
        const pre = document.createElement("pre");
        const code = createCodeElement(this.content);
        code.innerHTML = code.innerHTML.replace("@", `<span class="insert-input">$</span>`);
        this._codeInsertPoint = code.querySelector(".insert-input");
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
    _onInput(event) {
        let inputValue = this._inputElement.value;
        if (this.inputType === "number" && inputValue === "") {
            inputValue = "0";
        }
        this._codeInsertPoint.innerText = inputValue;
        let outputValue = InputToOutput.repr(this.mapFunction(inputValue));
        this._outputElement.replaceChildren(createCodeElement(outputValue));
    }
    static repr(value, depth = 2) {
        if (typeof value === "string") {
            return `"${value}"`;
        }
        if (value === null || typeof value !== "object") {
            return String(value);
        }
        if (value instanceof Array) {
            if (depth <= 0) {
                return "[...]";
            }
            return "[" + value.map(v => InputToOutput.repr(v, depth - 1)).join(", ") + "]";
        }
        const cls = value.constructor === Object ? "" : value.constructor.name + " ";
        const props = depth <= 0 ? "..." : Object.entries(value).map(entryMap).join(", ");
        return cls + "{" + props + "}";
        function entryMap([k, v]) {
            return k + ": " + InputToOutput.repr(v, depth - 1);
        }
    }
}
InputToOutput._id = 0;
class Question extends PageFragment {
    constructor(answers, correctAnswer, explanation, id) {
        super(id);
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.explanation = explanation;
        this._answerListElement = null;
        this._explanationElement = null;
        this._isSolved = false;
        this._onClick = this._onClick.bind(this);
    }
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
        this._answerListElement.removeEventListener("click", this._onClick);
        this._html = null;
        this._answerListElement = null;
        this._explanationElement = null;
    }
    _onClick(event) {
        if (event.target === null)
            return;
        const source = event.target;
        const answerIndex = Array.from(this._answerListElement.children).indexOf(source);
        if (answerIndex === -1)
            return;
        const isCorrect = answerIndex === this.correctAnswer;
        if (!this._isSolved && !source.classList.contains("incorrect")) {
            this._html.dispatchEvent(new CustomEvent("custom:questionanswered", {
                bubbles: true,
                detail: { isCorrect },
            }));
        }
        if (isCorrect) {
            this._handleCorrectAnswer(source);
        }
        else {
            this._handleWrongAnswer(source);
        }
    }
    _handleCorrectAnswer(answerElement) {
        answerElement.classList.add("correct");
        this._isSolved = true;
        this._explanationElement = document.createElement("p");
        this._explanationElement.innerHTML = this.explanation;
        this._explanationElement.querySelectorAll("code").forEach(code => {
            const newElement = createCodeElement(code.innerText);
            newElement.className = "inline-code";
            code.replaceWith(newElement);
        });
        this._html.append(this._explanationElement);
    }
    _handleWrongAnswer(answerElement) {
        answerElement.classList.add("incorrect");
    }
    markAsSolved() {
        if (this._answerListElement === null)
            return;
        if (this._isSolved)
            return;
        this._handleCorrectAnswer(this._answerListElement.children[this.correctAnswer]);
    }
}

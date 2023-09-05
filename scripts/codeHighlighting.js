export default function createCodeElement(content) {
    const nodes = [content]
        .flatMap(node => applyRule(node, regexpComments, "code-comment"))
        .flatMap(node => applyRule(node, regexpStrings, "code-string"))
        .flatMap(node => applyRule(node, regexpSpecialValues, "code-keyword-value"))
        .flatMap(node => applyRule(node, regexpKeywords, "code-keyword"))
        .flatMap(node => applyRule(node, regexpFunctions, "code-function"))
        .flatMap(node => applyRule(node, regexpNumbers, "code-number"));
    const codeElement = document.createElement("code");
    codeElement.append(...nodes);
    return codeElement;
}
function applyRule(content, regexp, className) {
    if (typeof content !== "string")
        return content;
    const nodes = [];
    let lastMatchEnd = 0;
    for (const match of content.matchAll(regexp)) {
        if (match.index > lastMatchEnd) {
            nodes.push(content.slice(lastMatchEnd, match.index));
        }
        lastMatchEnd = match.index + match[0].length;
        const span = document.createElement("span");
        span.innerText = match[0];
        span.className = className;
        nodes.push(span);
    }
    nodes.push(content.slice(lastMatchEnd));
    return nodes;
}
const regexpComments = /\/\/.*$|\/\*.*?\*\//gm;
const regexpStrings = /".*?"|'.*?'|`[^\$]*?`|`[^]*?\$\{|\}[^]*?(\$\{|`)/g;
const regexpSpecialValues = /(?<!\w)(true|false|null|undefined|NaN)(?!\w)/g;
const regexpKeywords = /(?<!\w)(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|from|function|get|if|import|in|instanceof|let|new|of|return|set|static|super|switch|this|throw|try|typeof|using|var|void|while|with|yield)(?!\w)/g;
const regexpFunctions = /\w+?(?= ?\()/g;
const regexpNumbers = /(?<![A-Za-z_])\d+(.\d+)?(e[+-]\d+)?(?![A-Za-z_])/g;

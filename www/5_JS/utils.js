
class Logger {
    constructor(aDocument, anElementId, fontSize) {
        this.document = aDocument;
        this.logElement = document.querySelector("#" + anElementId);
        this.fontSize = fontSize || "large";
    }
    talk () {
        console.log("Hi");
    }
    log () {
        let aMessage = '';
        for (let arg of arguments) {
            if (typeof arg == 'object') {
                aMessage += JSON.stringify(arg)
            } else {
                aMessage += arg + ' ';
            }
        }
        console.log(aMessage);
        const aLine = this.document.createElement("div");
        aLine.textContent = aMessage;
        aLine.style.fontSize = this.fontSize;
        this.logElement.appendChild(aLine);
    }
}

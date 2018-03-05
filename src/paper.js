export class Paper {
    constructor() {
        this.textOnPaper = '';
    }

    addText(text) {
        this.textOnPaper += text;
    }

    getText() {
        return this.textOnPaper;
    }
}
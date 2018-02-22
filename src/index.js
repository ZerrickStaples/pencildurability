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

export class Pencil {
    constructor(paper, durability, length, eraserDurability) {
        this.paper = paper;
        this.originalDurability = durability;
        this.durability = durability;
        this.length = length;
        this.eraserDurability = eraserDurability;
    }

    write(text) {
        for (let letter of text) {
            if (this.durability < 1) {
                letter = ' ';
            } else if (letter == '\n' || letter == ' ') {
                this.durability -= 0;
            } else if (letter.toUpperCase() == letter) {
                this.durability -= 2;
            } else {
                this.durability -= 1;
            }

            this.paper.addText(letter);
        }
    }

    sharpen() {
        if (this.length > 0) {
            this.length -= 1;
            this.durability = this.originalDurability;
        } else {

        }
    }

    getDurability() {
        return this.durability;
    }

    getLength() {
        return this.length;
    }

    erase(text) {
        if (this.eraserDurability < text.length) {
            let beforeChop = this.paper.textOnPaper.slice(0, this.paper.textOnPaper.lastIndexOf(text) + (text.length - this.eraserDurability));
            let spaces = ' '.repeat(this.eraserDurability);
            let afterChop = this.paper.textOnPaper.slice(this.paper.textOnPaper.lastIndexOf(text) + text.length, this.paper.textOnPaper.length);

            this.paper.textOnPaper = beforeChop + spaces + afterChop;
            this.eraserDurability = 0;
        } else {
            let beforeChop = this.paper.textOnPaper.slice(0, this.paper.textOnPaper.lastIndexOf(text));
            let spaces = ' '.repeat(text.length);
            let afterChop = this.paper.textOnPaper.slice(this.paper.textOnPaper.lastIndexOf(text) + text.length, this.paper.textOnPaper.length);

            this.paper.textOnPaper = beforeChop + spaces + afterChop;
            this.eraserDurability -= text.length;
        }
    }

    getEraserDurability() {
        return this.eraserDurability;
    }

    edit(text) {
        let spaceIndex = this.paper.textOnPaper.indexOf("  ");
        for (let editTextIndex = 0; editTextIndex < text.length; editTextIndex++) {
            let replaceTextLetter = text.charAt(editTextIndex);
            this.paper.textOnPaper = this.paper.textOnPaper.substr(0, spaceIndex + editTextIndex) + replaceTextLetter + this.paper.textOnPaper.substr(spaceIndex + editTextIndex + 1);
        }
    }
}
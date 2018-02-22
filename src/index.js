export class Paper {
    constructor() {
        this.textOnPaper = '';
    }

    addText(text) {
        this.textOnPaper += text;
    }

    getTextOnPaper() {
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
        let lastIndexOfWordInstance = this.paper.textOnPaper.lastIndexOf(text);
        let beforeChop = this.paper.textOnPaper.slice(0, this.paper.textOnPaper.lastIndexOf(text));
        let afterChop = this.paper.textOnPaper.slice(lastIndexOfWordInstance + text.length, this.paper.textOnPaper.length);
        this.paper.textOnPaper = beforeChop + ' '.repeat(text.length) + afterChop;
    }

    getEraserDurability() {

    }
}
export class Pencil {
    constructor(paper, pencilDurability, pencilLength, eraserDurability) {
        this.paper = paper;
        this.originalDurability = pencilDurability;
        this.pencilDurability = pencilDurability;
        this.pencilLength = pencilLength;
        this.eraserDurability = eraserDurability;
    }

    write(text) {
        for (let letter of text) {

            if (this.pencilDurability < 1) {
                letter = ' ';
            } else if (letter == '\n' || letter == ' ') {
                this.pencilDurability -= 0;
            } else if (letter.toUpperCase() == letter) {
                this.pencilDurability -= 2;
            } else {
                this.pencilDurability -= 1;
            }

            this.paper.addText(letter);
        }
    }

    sharpen() {
        if (this.pencilLength > 0) {
            this.pencilLength -= 1;

            this.pencilDurability = this.originalDurability;
        }
    }

    getDurability() {
        return this.pencilDurability;
    }

    getLength() {
        return this.pencilLength;
    }

    erase(text) {
        if (this.eraserDurability < text.length) {
            let textBeforeErase = this.paper.textOnPaper.slice(0, this.paper.textOnPaper.lastIndexOf(text) + (text.length - this.eraserDurability));
            let spaces = ' '.repeat(this.eraserDurability);
            let textAfterErase = this.paper.textOnPaper.slice(this.paper.textOnPaper.lastIndexOf(text) + text.length, this.paper.textOnPaper.length);

            this.paper.textOnPaper = textBeforeErase + spaces + textAfterErase;
            this.eraserDurability = 0;
        } else {
            let textBeforeErase = this.paper.textOnPaper.slice(0, this.paper.textOnPaper.lastIndexOf(text));
            let spaces = ' '.repeat(text.length);
            let textAfterErase = this.paper.textOnPaper.slice(this.paper.textOnPaper.lastIndexOf(text) + text.length, this.paper.textOnPaper.length);

            this.paper.textOnPaper = textBeforeErase + spaces + textAfterErase;
            this.eraserDurability -= text.length;
        }
    }

    getEraserDurability() {
        return this.eraserDurability;
    }

    edit(text) {
        let spaceIndex = this.paper.textOnPaper.indexOf("  ");

        if (spaceIndex != 0) {
            spaceIndex += 1;
        }

        for (let editTextIndex = 0; editTextIndex < text.length; editTextIndex++) {
            let replaceTextLetter = text.charAt(editTextIndex);

            if (this.paper.textOnPaper[spaceIndex + editTextIndex] !== " ") {
                replaceTextLetter = '@';
            }

            this.paper.textOnPaper = this.paper.textOnPaper.substr(0, spaceIndex + editTextIndex) + replaceTextLetter + this.paper.textOnPaper.substr(spaceIndex + editTextIndex + 1);
        }
    }
}
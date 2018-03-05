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
        let textOnPaper = this.paper.textOnPaper;

        if (this.eraserDurability < text.length) {
            let textBeforeErase = textOnPaper.slice(0, textOnPaper.lastIndexOf(text) + (text.length - this.eraserDurability));
            let spaces = ' '.repeat(this.eraserDurability);
            let textAfterErase = textOnPaper.slice(textOnPaper.lastIndexOf(text) + text.length, textOnPaper.length);

            textOnPaper = textBeforeErase + spaces + textAfterErase;
            this.eraserDurability = 0;
            this.paper.textOnPaper = textOnPaper;
        } else {
            let textBeforeErase = textOnPaper.slice(0, textOnPaper.lastIndexOf(text));
            let spaces = ' '.repeat(text.length);
            let textAfterErase = textOnPaper.slice(textOnPaper.lastIndexOf(text) + text.length, textOnPaper.length);

            textOnPaper = textBeforeErase + spaces + textAfterErase;
            this.eraserDurability -= text.length;
            this.paper.textOnPaper = textOnPaper;
        }
    }

    getEraserDurability() {
        return this.eraserDurability;
    }

    edit(text) {
        let textOnPaper = this.paper.textOnPaper;
        let spaceIndex = textOnPaper.indexOf("  ");

        if (spaceIndex != 0) {
            spaceIndex += 1;
        }

        for (let editTextIndex = 0; editTextIndex < text.length; editTextIndex++) {
            let replaceTextLetter = text.charAt(editTextIndex);

            if (textOnPaper[spaceIndex + editTextIndex] !== " ") {
                replaceTextLetter = '@';
            }

            textOnPaper = textOnPaper.substr(0, spaceIndex + editTextIndex) + replaceTextLetter + textOnPaper.substr(spaceIndex + editTextIndex + 1);
            this.paper.textOnPaper = textOnPaper;
        }
    }
}
export class Paper {
    constructor() {
        this.text = '';
    }

    addText(text) {
        this.text += text;
    }

    getText() {
        return this.text;
    }
}

export class Pencil {
    constructor(paper) {
        this.paper = paper;
    }

    write(text) {    
        this.paper.addText(text);
    }

    getDurability() {
        
    }
}
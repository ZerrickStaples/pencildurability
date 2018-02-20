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
    constructor(paper, durability, length) {
        this.paper = paper;
        this.originalDurability = durability;
        this.durability = durability;
        this.length = length;
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

    }
}       });
        it("Return spaces when 0 durability", () => {
            pencil.write("TExt");

            expect(paper.getTextOnPaper()).to.equal("TEx ");
        });
    });

    describe("Sharpen function", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 5, 5);
        });

        it("Sharpening reduces pencil length", () => {
            pencil.write("Text");
            pencil.sharpen();

            expect(pencil.getLength()).to.equal(4);
        });
        it("Sharpening restores durability", () => {
            pencil.write("Text");
            pencil.sharpen();

            expect(pencil.getDurability()).to.equal(5);
        });
        it("Sharpening when length is 0 doesn't restore durability", () => {
            pencil.write("Text");
            pencil.sharpen();
            pencil.write("Text");
            pencil.sharpen();
            pencil.write("Text");
            pencil.sharpen();
            pencil.write("Text");
            pencil.sharpen();
            pencil.write("Text");
            pencil.sharpen();
            pencil.write("Text");
            pencil.sharpen();

            expect(pencil.getDurability()).to.equal(0);
        });
    });
    describe("Eraser function", () => {
        it("Erase a single instance", () => {
            let paper = new Paper();
            let pencil = new Pencil(paper, 30, 5);

            pencil.write("How much wood could a woodchuck");
            pencil.erase("woodchuck");

            expect(paper.getTextOnPaper()).to.equal("How much wood could a          ");
        })
    });
});
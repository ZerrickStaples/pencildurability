import Mocha from 'mocha';
import { expect } from 'chai';
import { Paper, Pencil } from '../src/index';

describe("Canary test", () => {
    it("True equals true", () => {
        expect(true).to.equal(true);
    });
});

describe("Pencil durability", () => {

    describe("Write function", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 100);
        });

        it("Write returns a string", () => {
            pencil.write("She sells sea shells");

            expect(paper.getTextOnPaper()).to.equal("She sells sea shells");
        });
        it("Write appends text", () => {
            pencil.write("She sells sea shells");
            pencil.write(" down by the sea shore");

            expect(paper.getTextOnPaper()).to.equal("She sells sea shells down by the sea shore");
        });
    });

    describe("Point degradation", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 5);
        });

        it("Lowercase letter degrades durability by 1", () => {
            pencil.write("u");

            expect(pencil.getDurability()).to.equal(4);
        });
        it("Uppercase letter degrades durability by 2", () => {
            pencil.write("U");

            expect(pencil.getDurability()).to.equal(3);
        });
        it("Spaces & new lines don't reduce durability", () => {
            pencil.write(" ");
            pencil.write("\n");

            expect(pencil.getDurability()).to.equal(5);
        });
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
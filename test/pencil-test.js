import Mocha from 'mocha';
import { expect } from 'chai';
import { Paper } from '../src/paper';
import { Pencil } from '../src/pencil';

describe("Canary test", () => {
    it("True equals true", () => {
        expect(true).to.equal(true);
    });
});

describe("Pencil durability", () => {
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

    describe("Eraser degradation", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 100, 5, 5);

        });
        it("Erase function degrades eraser duarbility", () => {
            pencil.write("text");
            pencil.erase("text");

            expect(pencil.getEraserDurability()).to.equal(1);
        });
        it("Eraser durability can't be negative", () => {
            pencil.write("booths");
            pencil.erase("booths");

            expect(pencil.getEraserDurability()).to.equal(0);
        });
    });
});
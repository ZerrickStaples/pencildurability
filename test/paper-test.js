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

    describe("Write function", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 100);
        });

        it("Write returns a string", () => {
            pencil.write("She sells sea shells");

            expect(paper.getText()).to.equal("She sells sea shells");
        });
        it("Write appends text", () => {
            pencil.write("She sells sea shells");
            pencil.write(" down by the sea shore");

            expect(paper.getText()).to.equal("She sells sea shells down by the sea shore");
        });
    });

    describe("Point degradation", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 5);
        });
        it("Return spaces when 0 durability", () => {
            pencil.write("TExt");

            expect(paper.getText()).to.equal("TEx ");
        });
    });
    describe("Eraser function", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 100, 5);
        });

        it("Erase a single instance", () => {
            pencil.write("How much wood could a woodchuck");
            pencil.erase("woodchuck");

            expect(paper.getText()).to.equal("How much wood could a          ");
        });
        it("Erase most recent instance", () => {
            pencil.write("How much wood could a woodchuck chuck if a woodchuck could chuck wood");
            pencil.erase("woodchuck");

            expect(paper.getText()).to.equal("How much wood could a woodchuck chuck if a           could chuck wood");
        });
    });
    describe("Eraser degradation", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 100, 5, 5);

        });
        it("Returns letter when eraserDurabilty reaches 0", () => {
            pencil.write("booths");
            pencil.erase("booths");

            expect(paper.getText()).to.equal("b     ");
        });
    });
    describe("Edit function", () => {
        let paper;
        let pencil;

        beforeEach(() => {
            paper = new Paper();
            pencil = new Pencil(paper, 40, 5, 10);
        })
        it("Edit a word", () => {
            pencil.write("Bill");
            pencil.erase("Bill");
            pencil.edit("Mark");

            expect(paper.getText()).to.equal("Mark");
        });
        it("Edit word in middle of sentence", () => {
            pencil.write("An apple a day keeps the doctor away");
            pencil.erase("apple");
            pencil.edit("onion");

            expect(paper.getText()).to.equal("An onion a day keeps the doctor away");
        });
        it("Return @ when letters clash", () => {
            pencil.write("An apple a day keeps the doctor away");
            pencil.erase("apple");
            pencil.edit("artichoke");

            expect(paper.getText()).to.equal("An artich@k@ay keeps the doctor away");
        })
    });
});
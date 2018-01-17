import Mocha from 'mocha';
import { expect } from 'chai';
import { Paper, Pencil } from '../src/index';

describe("Canary test", () => {
    it("True equals true", () => {
        expect(true).to.equal(true);
    });
});

describe("Pencil durability", () => {
    let paper;
    let pencil;

    beforeEach(() => {
        paper = new Paper();
        pencil = new Pencil(paper);
    });

    describe("Write function", () => {
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
});
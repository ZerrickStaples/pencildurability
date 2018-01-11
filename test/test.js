import Mocha from 'mocha';
import { expect } from 'chai';
import { write } from '../src/index';

describe("Canary test", () => {
    it("True equals true", () => {
        expect(true).to.equal(true);
    });
});

describe("Pencil durability", () => {

    describe("Write function", () => {
        it("Write returns a string", () => {
            expect(write("She sells sea shells")).to.equal("She sells sea shells");
        });
        it("Write appends text", () => {
            let originalText = write("She sells sea shells");
            expect(write(" down by the sea shore")).to.equal(originalText + " down by the sea shore");
        });
    });
});
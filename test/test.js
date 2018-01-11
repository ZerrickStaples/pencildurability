import Mocha from 'mocha';
import { expect } from 'chai';

describe("Canary test", () => {
    it("True equals true", () => {
        expect(true).to.equal(true);
    });
});
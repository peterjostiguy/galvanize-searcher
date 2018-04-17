const assert = require("assert");

const exercise = require("../exercises/1");

describe("Exercise 1", () => {
    it("prints 'Kyle'", () => {
        assert.equal(exercise(), "Kyle");
    });
});

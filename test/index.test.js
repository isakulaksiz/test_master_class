const { expect } = require("@jest/globals")

describe('test to see if test environment is properly set up',() => {
    test("test hello word",() => {
        expect("hello world").toBe("hello world")
    })
});
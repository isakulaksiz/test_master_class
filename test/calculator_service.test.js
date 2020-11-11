const {add, subtract, getTime} = require("../service/calculator");

describe("test to see if functions are defined", () => {

    test("test add function", () => {
        expect(add).not.toBeUndefined()
    })

    test("test subtract function", () => {
        expect(subtract).not.toBeUndefined()
    }) 

    test("test getTime function", () => {
        expect(getTime).not.toBeUndefined
    })
});
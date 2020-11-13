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

describe("test to check if the functions returns a correct output when given an input", () => {
    
    test("test add function", () => {
        expect(add(0,10)).toBe(10);
    })

    test("test subtract funtion", () => {
        expect(subtract(10,2)).toBe(8);
    })

    test("test getTime function", () => {
        expect(getTime()).not.toBeUndefined;
    })
});
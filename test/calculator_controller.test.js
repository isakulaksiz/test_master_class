const Calculator = require("../controller/calculator");

describe("test to see if calculator meets requirement", () => {
    let calculatorObj;
    
    beforeAll(() => {
        calculatorObj = new Calculator;
    });

    afterAll(() => {
        calculatorObj.reset()
    });

    test("test calculator counter and last calculation time token before any calculation", () => {
        expect(calculatorObj.getCurrentCounterValue()).toBe(0);
        expect(calculatorObj.getLastCalculationTimeInSeconds()).toBe(0);
    })

    test("test calculator counter after increment", () => {
        calculatorObj.increment(210);
        expect(calculatorObj.getCurrentCounterValue()).toBe(210);
    })

    test("test calculator counter after decrement", () => {
        calculatorObj.decrement(101);
        expect(calculatorObj.getCurrentCounterValue()).toBe(109);
    })

    test("test calculator last calculation time taken", () => {
        expect(calculatorObj.getLastCalculationTimeInSeconds()).toBeGreaterThanOrEqual(0);
    })

    test("test calculator reset", () => {
        calculatorObj.reset();
        expect(calculatorObj.getCurrentCounterValue()).toBe(0);
        expect(calculatorObj.getLastCalculationTimeInSeconds()).toBe(0);
    })
});
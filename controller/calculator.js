const {add, subtract, getTime} = require("../service/calculator");

class Calculator{
    constructor(){
        this.counter = 0;
        this.lastCalculationTimeInSeconds = 0;
    }

    increment = (value) => {
        const startTime = getTime();
        this.counter = add(this.counter, value);
        const endTime = getTime();
        this.lastCalculationTimeInSeconds = (endTime-startTime);
    }

    decrement = (value) => {
        const startTime = getTime();
        this.counter = subtract(this.counter, value);
        const endTime = getTime();
        this.lastCalculationTimeInSeconds = (endTime-startTime);
    }

    reset = () => {
        this.counter = 0;
        this.lastCalculationTimeInSeconds = 0;
    }

    getCurrentCounterValue = () => {
        return this.counter;
    }

    getLastCalculationTimeInSeconds = () => {
        return this.lastCalculationTimeInSeconds;
    }
}

module.exports = Calculator;
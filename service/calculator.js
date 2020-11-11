/**
 * 
 * @param {*} counter 
 * @param {*} valueToIncrementWith 
 */
const add = (counter,valueToIncrementWith)=>{
    return counter + valueToIncrementWith;
}

/**
 * 
 * @param {*} counter 
 * @param {*} valueToDecrementWith 
 */
const subtract = (counter, valueToDecrementWith)=>{
    return counter - valueToDecrementWith;
}

const getTime =()=>{
    return new Date().getTime();
}

module.exports = {add,subtract,getTime}
function summarize(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("All parameters must be numbers!");
    }
    return a + b;
}

function substract(a, b){
    return a - b;
}

function random(min, max){
    return Math.random() * max + min;
}

module.exports = {
    summarize,
    substract,
    random
}
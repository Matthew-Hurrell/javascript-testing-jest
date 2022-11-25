function addition(num1, num2){
    if (num1 === undefined || num2 === undefined ) {
        return "null";
    } else {
        return num1 + num2;
    }
}

module.exports = addition;
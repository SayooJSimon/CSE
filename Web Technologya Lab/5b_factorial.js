function factorial(num){
    if(num<0){
        return "Factorial not defined for negative numbers.";
    }
    let result = 1;
    for(let i = 1; i<=num; i++){
        result *= i;
    }
    return result;
}

n = parseInt(prompt("Enter a number to find its factorial: "))

factorialResult = factorial(n);
alert("The factorial of "+n+" is: "+factorialResult);
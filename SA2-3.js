//takes in two arguments as input i.e our boundary
function getPrime(min,max){
    function gettingPrimes(n){
//i begins at 2 because all numbers are divisible by 1
// iteratre if our divisibles are less than the squareroot of a given number(n)
        for(let i=2; i<=Math.sqrt(n);i++){
            //if its completely divisible i.e not prime return false
        if(n%i===0){
            return false;
        }
    }
    //otherwise return the number but only if its greater than 1
    return n>1;
}
let primes=[];
//used to iterate over our boundaries
for(let n= min; n <=max; n++){
    //if n is less than the maximum number pass it as a variable to gettingPrimes()
    //if it returns true push it to our empty variable primes[]
    if (gettingPrimes(n)){
        primes.push(n);
    }
    
}
//return after the for loop function and push function are done
return primes
}
console.log(getPrime(2,10))
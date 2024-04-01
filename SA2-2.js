function generators(x,y){
    //creates an empty variable for our return function
    let generated=[];
    //xY is a variable that will hold the result of our condition i.e 
    //if x is less than y assign xY +1 else -1(direction of the iteration)

    let xY= x <= y ? 1:-1;
    //strict inequality ensures iteration takes place until x is equals to y
    //this is by returning true until the values equate each other
    while(x !== y + xY) {
    //push the new iterated x to the empty variable generated
        generated.push(x)
        //the new x is equals to x +xY which is variable deciding whether x is decreasing or increasing
        x+=xY;
    }
    return generated;
};
console.log(generators(-4,-7))
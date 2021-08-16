// W1S2 Activity 1
function quadratic(a, b, c) {
    const delta = b**2 -4*a*c
    // alert(`Delta is ${delta}`)
    console.log(`Delta is ${delta}`)
    let solution = []
    
    
    if(delta>=0) {
        let x1 = (-b + delta**0.5)/(2*a)
        let x2 = (-b - delta**0.5)/(2*a)
        
        solution = [x1,x2]
    }
    
    console.log(solution)
}

quadratic(1,2,2)

// W1S2 Activity 2

function get_distance(a, b) {
    const g = 9.81;
    let b_rad = Math.PI / 180 * b;
    return(a**2 * Math.sin(2*b_rad) / g);
}

console.log(`Distance travelled ${get_distance(1,70)}m `)


// W1S3 Exercise
function taxable_income(income) {
    let tax = (income>20000) ? (0.05*(income-20000)) : (0)
    
    console.log(`The tax payable on an income of ${income} dollars is ${tax} dollars.`)
}

taxable_income(40000)
taxable_income(599)

// W1S3 Activity 1
function ask_user_age() {
    let age = window.prompt("What is you age");
    
    if (age <= 0){
        console.log(`Your age cannot be negative, it must be at least 1.`);
    }
    else if(age > 112) {
        console.log(`I really doubt you are ${age} years old.`)
    }
    else {
        console.log(`Oh, you are ${age} years old? That's cool!`)
    }
}

ask_user_age()

//W1S3 Activity

function collatz_syracuse(n){
    let counter = 0
    while(n!=1){
        n = (n%2==0) ? (n/2) : (n*3+1)
        console.log(n)
        counter++

        if (counter>100){break;}
    }
}

collatz_syracuse(5402)

//W1S3 Exercise
function isPrime(n) {
    if(n<=1){return false;}
    
    for (let c=2; c<n; c++){
        if (n%c == 0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
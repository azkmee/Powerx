
//W2S1 Activity 1
function sort_number(val1, val2){
    let x = val1 > val2 ? 1 : val2 > val1 ? -1 : 0;
    // if (val1 > val2) {
    //     return 1;
    // } else if (val2 > val1) {
    //     return -1;
    // } else {return 0;}
    return x;
};
// console.log(sort_number(3,4))

function median(arr){
    console.log(arr.sort(sort_number));
    let arr_len = arr.length;

    let x = (arr_len %2 == 1) ? 
        arr[(arr_len+1)/2 - 1] : (arr[arr_len/2-1] + arr[arr_len/2]) /2
    return x;

    // if (arr_len % 2 == 1) {
    //     return arr[(arr_len+1)/2 - 1]
    // } else {
    //     let idx = arr_len/2
    //     return (arr[idx-1] + arr[idx]) / 2
    // }
}


console.log(median([5,7,3,8,6]))
console.log(median([5,7,3,6,8,9]))

// sort accordin to number
// check length
/* 
if length is odd, take middle,
if even, take the middle two and divide by two
*/

//W2S1 Activity 2
function middle_array(arr){
    arr.pop();
    arr.shift();
    return arr;
}

console.log(middle_array([1,2,3,4,4]))

//W2S1 Activity 3
function isOdd(val, idx, arr){
    return (val % 2 == 0);
}
function sum(val1, val2) {
    return(val1 + val2);
}

function sum_odd_number(arr){
    //filter odd number
    arr = arr.filter(isOdd)
    console.log(arr)
    //get sum
    return arr.reduce(sum);
    
}
console.log(sum_odd_number([43, 30, 27, -3 ]))

//W2S1 Activity 4
function each_MA(val, idx, arr){
    if (idx>1){
        return +((arr[idx] + arr[idx-1] + arr[idx-2]) /3).toFixed(1)
    } else {return 0;}
}

function moving_average(data){
    let x = data.map(each_MA).slice(2);
    return(x)
}

let data = [30.0,20.0,40.0,50.0,25.0,70.0];
console.log(moving_average(data))

//W2S1 Activity 5
function swap_elements(arr, index1, index2) {
    if (index1 >= arr.length || index2 >= arr.length){
        return null
    } else {
        let to_return = JSON.parse(JSON.stringify(arr))
        to_return[index1] = arr[index2]
        to_return[index2] = arr[index1]
        return to_return
    }
}

let arr = [3,6,8,7]
console.log(swap_elements(arr, 2, 3))
console.log(swap_elements(arr, 3,4))

//W2S1 Activity 6
let grades_table = [["Student Name", "MidTerm Score", "FinalExam Score","Average Score"],
                    ["Chris",'60','80','70'],
                    ["Oka",'50','80','65'],
                    ["Norman" ,'40','70','55'],
                    ["Natalie", '60','70','65'],
                    ["Tony",'60','90','75']];
                    
function grade_adjustment(grade_table) {
    for (let student = 1; student < grade_table.length; student++) {      
        grade_table[student][1] = grade_table[student][1] > 50 ? 
                                    Math.min(100, 1.5*grade_table[student][1]) : 
                                    grade_table[student][1];
        grade_table[student][3] = (+grade_table[student][1] + +grade_table[student][2])/2
    }
    
    return grade_table
}

console.log(grade_adjustment(grades_table))

//W2S2 Activity 1
let factorial = (n) => {
    return n <= 1 ? 1 : n * factorial(n-1)
}

console.log(factorial(5))


//W2S2 Activity 2
let mcCarthy = (n) => {
    return n <= 100 ? 
            mcCarthy(mcCarthy(n + 11)) :
            n - 10
}

for (let i = -10; i<=110; i++) {
    console.log(mcCarthy(i))
}

//W2S2 Activity 3
let euclide_gcd = (a, b) => {
    let small;
    let big;
    if (a === b) { 
        return a
    } else if (a > b) {
        small = b;
        big = a
    } else {
        small = a;
        big = b
    }
    
    return euclide_gcd(big-small, small);
    
}

console.log(euclide_gcd(50,30))

//W2S2 Activity 4
function move_disks(n, from_tower, aux_tower, to_tower) {
    if (n == 1) {
        console.log(`Move disc ${n} from ${from_tower} to ${to_tower}`);
    } 
    else {
        move_disks(n-1, from_tower, to_tower, aux_tower)
        console.log(`Move disc ${n} from ${from_tower} to ${to_tower}`);
        move_disks(n-1, from_tower, to_tower, aux_tower);
    }
};

move_disks(3, 'A','B','C')

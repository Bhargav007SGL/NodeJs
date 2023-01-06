function op(first){
    return first;
}

// function op(first, second) {
//     if(second){
//         return second + first;
//     }
//   return first
// }

function op2(first,...more){
    console.log(more);
    // return first + [...more] ?? first;
}

console.log(op2(10,20,20,100));
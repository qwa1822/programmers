function Solution(numbers,direction){


  if(direction==="right"){
    numbers.unshift(numbers.pop());
  } else{
    numbers.push(numbers.shift());
  }
  return numbers;
}

let a=[1,2,3];

console.log(Solution(a,"right"));
console.log(Solution([4, 455, 6, 4, -1, 45, 6]	,"left"));
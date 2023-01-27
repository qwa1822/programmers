function solution(n, numlist) {
  

  let answer=[];
  for(let x of numlist){
    if(x%n===0){
      answer.push(x);      
    }
  }
  return answer;

}

let n=3;
let numList=[4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(solution(n,numList));
console.log(solution(5,[1,9,3,10,13,5]));
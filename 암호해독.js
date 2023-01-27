function solution(cipher, code) {

  return [...cipher].filter((a,i)=>(i+1)%code===0).join('');

}

let a="dfjardstddetckdaccccdegk";
console.log(solution(a,4));

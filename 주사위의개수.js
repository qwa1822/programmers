function solution(box, n) {
    
 return box.map(a=>a/n<<0).reduce((a,b)=>a*b,1);
  
}


console.log(solution([1,1,1],1));
console.log(solution([10,8,6],3));
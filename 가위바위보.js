function solution(rsp) {
  let result="";

  for(let x of rsp){
    if(x==="2"){
      result+=0;
    }else if(x==="0"){
      result+=5;
    }else if(x==="5"){
      result+=2;
    }
  }
  return String(result);
}

console.log(solution("2"));
console.log(solution("205"));
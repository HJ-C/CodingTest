// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 
// 프로그램을 작성하세요.

function solution(s){  
    let answer;
    let stack=[];

    for(let x of s){
        if(x === ")"){
            //여는 괄호 나올때까지 stack.pop()을 반복
            while(stack.pop() !== '(');
        }else{
            stack.push(x);
        }
    }
    answer = stack.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
// DFS vs For문, 중복순열

function solution(n, m){
    let answer=[];
    let tmp = Array.from({length:m}, ()=>0);
    console.log(tmp)

    function DFS(L){
        if(L === m){
            answer.push(tmp.slice()) //slice()내부가 기본문자열일때 깊은복사 느낌으로 많이 쓰임
        }else{
            for(let i=0; i<=n; i++){ //3갈래로 나뉨, 
                tmp[L]=i; //1,2,3중 포함되면 tmp에 1 적립
                DFS(L+1); //다음 레벨로 변경
            }
        }
    }
    
    DFS(0);
    return answer;
}

console.log(solution(3, 2));
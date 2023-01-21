// 재귀함수

function solution(n){
    let answer="";
    function DFS(n){
        if(n === 0) return;
        else{
            console.log(n%2);
            DFS(parseInt(n/2))
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(11));
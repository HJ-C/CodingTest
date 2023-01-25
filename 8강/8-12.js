//조합수(메모이제이션)

function solution(n, r){         
    let answer;
    let dy = Array.from(Array(35), ()=>Array(35).fill(0)) // 처음 = 행, 뒤 콜백 = 열, 을 0으로 채움
    function DFS(n, r){
        if(dy[n][r] >0) return dy[n][r]; // dy[n][r]에 이미 저장되어있으면 그대로 출력
        if( n===r || r === 0) return 1 ;
        else return dy[n][r] = DFS(n-1,r-1) + DFS(n-1,r);
    }
    answer=DFS(n, r);
    return answer;
}

console.log(solution(5, 3));
function solution(n, k, arr, m){ //변수 수, 선택 수, 배열, 조건6
    let answer=0;

    function DFS(L, s, sum){ // 레벨, 스타팅넘버, 합
        if(L===k){
            if(sum%m === 0){
                answer++;
            }
        }else{
            for(let i=s; i<n; i++){ //인덱스이기때문에 범위 주의
                DFS(L+1, i+1, sum+arr[i]); //레벨, 선택한값, sum
            }
        }
    }

    DFS(0, 0, 0);
    return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
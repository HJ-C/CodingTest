// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 
// 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 1 2 1 3 1 1 1 2 
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.


function solution(m, arr){
    let answer = 0;
    let sum = 0;
    let lt = 0;

    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt]
        // sum값이 m과 일치할 경우
        if(sum === m) answer++
        // sum값이 m과 같거나 초과할경우
        while(sum>=m){
            sum -= arr[lt++];
            if(sum === m) answer ++;
        }
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
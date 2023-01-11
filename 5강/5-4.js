// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그
// 램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면
// 1 3 1 2 3
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, 
// {1, 3, 1}로 총 10가지입니다.


function solution(m, arr){
    let answer = 0;
    let lt = 0;
    let sum = 0;

    for(let rt= 0; rt<arr.length; rt++){
        // 전체 sum값
        sum+=arr[rt]
        
        // sum > m 됐을 경우 반복문
        while(sum>m){
            sum-=arr[lt++];
        }

        // 중복을 피하기 위해 마지막 자리수를 카운트
        answer+= (rt-lt+1);
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
//이진트리 - DFS

function solution(arr){
    let answer="NO", flag=0;
    let total=arr.reduce((a, b)=>a+b, 0);
    let n=arr.length;

    function DFS(L, sum){
        if(L === n){
            if(flag) return; //JS에서 exit가 없기에 따로 설정
            if((total-sum) === sum){  //total-sum = 선택한 부분집합을 제외한 나머지들
                answer="Yes"
                flag=1;
            }
        }else{
            DFS(L+1, sum+arr[L]) //레벨 증가시 누적 합
            DFS(L+1, sum) // 레벨 증가시 누적 안되는 경우
        }
    }
    DFS(0, 0);
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));
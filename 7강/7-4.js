//삽입 정렬

function solution(arr){
    let answer=arr;

    for(let i=1; i<arr.length; i++){
        let tmp = arr[i],j;
        for(j=i-1; j>=0; j--){
            if(tmp<arr[j]){
                arr[j+1] = arr[j];
            }else break;
        }    
        arr[j+1] = tmp; // 제일 작은 수 맨 앞으로
    }
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));
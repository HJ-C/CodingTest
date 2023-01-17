// 버블정렬

function solution(arr){
    let answer=arr;

    for(let i =0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){ //마지막 자리는 가장 큰 수이기에 정렬할 필요가 없기에 length-i-1을 해준다
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
             }
         }
    }

    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
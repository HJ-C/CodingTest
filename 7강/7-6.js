//정렬

function solution(arr){
    let answer=[];
    
    let sortArr = arr.slice(); // 깊은복사
    sortArr.sort((a,b)=> a-b);
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== sortArr[i]){
            answer.push(i+1); //0번 인덱스부터 시작하기에
        }
    }

    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

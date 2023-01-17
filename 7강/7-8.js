// 그리디(대표)

function solution(meeting){
    let answer=0;
    
    meeting.sort((a,b)=>{
        // 끝나는 시간이 같을경우 시작순서를 오름차순 정렬
        if(a[1]=== b[1]) return a[0] - b[0]

        // 끝나는 시간이 다를경우 끝나는 순서를 오름차순 정렬
        else{
            return a[1] - b[1]
        }
    })

    let et =0; //끝나는 시간 초기화

    for(let x of meeting){
        if(x[0] >= et ){
            answer++
            et = x[1]
        }
    }
    console.log(meeting)
    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));
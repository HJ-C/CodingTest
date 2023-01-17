// LRU (Least Recently Used)

//1. 삽입정렬 스타일
// function solution(size, arr){
//     let answer = Array.from({length:size}, ()=>0);
    
//     arr.forEach(x => {
//         let pos = -1;
//         // Hit 된지 안된지 체크
//         for(let i=0; i<size; i++){
//             if( x === answer[i] ) pos=i;
//         }
//         // Hit miss 됐을 경우(뒤로 한칸씩 삽입정렬)
//         if(pos === -1){
//             for(let i=size-1; i>=1; i--){
//                 answer[i] = answer[i-1];
//             }
//         }
//         // Hit 됐을 경우(Hit된 숫자를 맨앞으로)
//         else{
//             for(let i=pos; i>=1; i--){
//                 answer[i] =answer[i-1]
//             }
//         }
//         answer[0] = x;
//     });
    

//     return answer;
// }

// let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));


//2. 내장 메소드 사용
function solution(size, arr){
    let answer=Array.from({length:size}, ()=>0);

    arr.forEach(x => {
        let pos = -1;

       for(let i=0; i<size; i++) if(x === answer[i]) pos=i;

       //Hit miss
       if(pos === -1){
        answer.unshift(x);
        if(answer.length>size) answer.pop();
       }else{
        answer.splice(pos,1);//hit된 pos값을 1개 지움
        answer.unshift(x);
       }
    });

    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
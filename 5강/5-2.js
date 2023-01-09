// function solution(arr1, arr2){
//     let answer= []; 
    
//     let sort1 =  arr1.sort((a,b)=>a-b);
//     let sort2 = arr2.sort((a,b)=>a-b);

//     for(let x of sort1){
//         for(let k of sort2){
//             if(x === k){
//                 answer+= x
    
//             }
//         }
//     }
//     return answer;
// }

// let a=[1, 3, 9, 5, 2];
// let b=[3, 2, 5, 7, 8];
// console.log(solution(a, b));


//2
function solution(arr1, arr2){
    let answer=[];

    // 처음부터 sort를해야 전부 다 체크 할 수 있다.
    // sort를 처음부터 안하면 a의 9에서 막힘
    arr1.sort((a, b)=>a-b);
    arr2.sort((a, b)=>a-b);
    let n = arr1.length;
    let m = arr2.length;
    

    let p1=p2=0;    
    while(p1<n && p2<m){
        //같을경우
        if(arr1[p1] == arr2[p2] ){
            answer.push(arr1[p1++]);
            p2++
        // p1이 작기에 p1++
        }else if(arr1[p1]<arr2[p2]){
            p1++
        // p2가 작기에 p2++
        }else{
            p2++
        }
    }


    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
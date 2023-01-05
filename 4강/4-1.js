// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
// 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.


//1.(번외) 하나의 숫자가 주어졌을때 문자로 바꾸고 split 활용해서 map으로 다시 정수 변경후 reduce

// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;

//     let temp1 = arr.toString().split("").map((x)=>parseInt(x))

//     return temp1.reduce((acc, cur)=>acc + cur,0);
// }

// let arr=[128];
// console.log(solution(7, arr));


// 2. 문자열로 변경해서 푸는 방법 

function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;

    for(let x of arr){
        let temp = x.toString().split('')
            .map((a)=>parseInt(a))
            .reduce((acc,cur)=> acc+cur,0);
        
            if(temp>max){
                max = temp;
                answer = x;
            }else if(temp === max){
                if(x>answer){
                    answer = x;
                }
            }
    }

    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// 3.
// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;
    
//     for(let x of arr){
//         let sum=0, tmp=x;
//         while(tmp){
//             sum+=(tmp%10);
//             tmp = Math.floor(tmp/10);
//         }
//         if(sum>max){
//             max=sum;
//             answer=x;
//         }
//         else if(sum===max){
//             if(x>answer) answer=x;
//         }
//     }
//     return answer;
// }

// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));
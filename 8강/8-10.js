// DFS 순열 

function solution(m, arr){         
    let answer=[];
    let n = arr.length;
    let ch = Array.from({length:n},()=>0 ); // 중복인지 아닌지 검사하기위한 채널
    let tmp = Array.from({length:m}, ()=>0); // 2가지 선택지 임시 저장소

    function DFS(L){
        if(L === m){
            answer.push(tmp.slice());
        }else{
            for(let i=0; i<n; i++){
                if(ch[i]===0){ //ch 채널에 0일때만 가능하게 해야함, 아니면 중복수열이 되어버림
                    ch[i]=1; //ch 채널에 1이 들어감
                    tmp[L] = arr[i]; // tmp[0] === arr[0] 3,3
                    DFS(L+1)
                    ch[i]=0; // ch 채널에 DFS로 인해 다시 탐색하기 위해 1을 제거
                }
            }
        }

    }
    DFS(0);
    return answer;
}

let arr=[3, 6, 9];
console.log(solution(2, arr));
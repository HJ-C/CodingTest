// 수열, 이항계수 응용

function solution(n, f){         
    let answer,flag=0;
    let dy = Array.from(Array(11), ()=>Array(11).fill(0));
    let ch = Array.from({length:n+1},()=>0); //순열 채널 
    let tmp = Array.from({length:n},()=>0);
    let b = Array.from({length:n}, ()=>0); // 조합수 1331


    //순열
    function combi(n, r){
       if(dy[n][r]>0) return dy[n][r]; //메모이제이션
       if(n===r || r === 0) return 1;
       else return dy[n][r] = combi(n-1,r-1) + combi(n-1,r);
    }

    function DFS(L, sum){
        if(flag) return; //만약 순열을 확인하다 답이 더 나오면 더이상 찾을 필요 없음
        if(L===n && sum === f){
            answer=tmp.slice(); 
            flag=1;
        }else{
            for(let i=1; i<=n; i++){ //1부터 시작 = L
                if(ch[i] === 0){
                    ch[i]=1;
                    tmp[L] = i;
                    DFS(L+1, sum+(b[L] * tmp[L]));
                    ch[i]=0;
                }
            }
        }
        

    }
    
    //조합수
    for(let i=0; i<n; i++){
        b[i] = combi(n-1,i) //3C0, 3C1, 3C2, 3C3을 b[i]에 넣음
    }

    DFS(0, 0);
    return answer;
}
console.log(solution(4,16));
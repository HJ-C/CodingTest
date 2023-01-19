//그리디

function solution(times){
    let answer=Number.MIN_SAFE_INTEGER;

    let T_line = [];
    for(let x of times){
        T_line.push([x[0],'s']);
        T_line.push([x[1],'e']);
    }
    T_line.sort((a,b)=>{
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt(); //아스키 코드순으로 정렬(a[0]과 b[0]이 같을경우 EndTime이 우선!)
        else return a[0]-b[0];
    })
    console.log(T_line)

    let cnt = 0;
    for(let x of T_line){
        if(x[1] === 's'){
            cnt++;
        }else{
            cnt--;
        }
        answer=Math.max(cnt,answer); //answer에 최댓값 저장
    }
    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
function solution(s, t){
    let answer = [];
    let p = 1000;

    for(let x of s){
        if( x === t){
            p = 0;
            answer.push(p);
        }else{
            p++;
            answer.push(p)
        }
    }
    //1 0 1 2 3 0 1 2 3 4 0

    p=1000;
    for(let i=s.length-1; i>=0; i--){
        if(s[i] === t){
            p=0;
        }else{
            p++
            console.log(answer[i],p)
            answer[i]=Math.min(answer[i],p); //중복되는 수 중 제일 최소
        }
    }
    // 0 1 2 3 4 0 1 2 3 0 1



    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));

//RE !!()
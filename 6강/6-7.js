function solution(need, plan){
    let answer="YES";
    let queue = need.split('');

    for(let x of plan){
        if(queue.includes(x)){
            if( x !== queue.shift()){
                return 'No';
            }
        }
    }
    if(queue.length>0){
        return "No"
    }
    return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));
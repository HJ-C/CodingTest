//큐

function solution(n, k){
    let answer;
    let queue = Array.from({length:n}, (a,i)=>i+1); //유사 큐 만들기
    
    while(queue.length){
        for(let i=1; i<k; i++){
            queue.push(queue.shift());
        }
        queue.shift();
        if(queue.length === 1){
            answer = queue.shift();
        }
    }
    return answer;
}

console.log(solution(8, 3));
// 후위식 연상 (stack)

function solution(s){  
    let answer;
    let stack=[];

    for(let x of s){
        if(!isNaN(x)){
            stack.push(Number(x))
        }else{
            let rt = stack.pop(); //stack에서 오른쪽을 빼냄
            let lt = stack.pop();
            if(x==="+") stack.push(lt+rt); //Number(x)했기에 lt부터가 맞음
            else if(x==="-") stack.push(lt-rt)
            else if(x==="*") stack.push(lt*rt)
        }
    }
    answer = stack[0]
    return answer;
}

let str="352+*9-";
console.log(solution(str));
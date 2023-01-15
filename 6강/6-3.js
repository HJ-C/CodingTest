// 카카오 크레인 인형뽑기(stack)

function solution(board, moves){
    let answer=0;
    let stack = [];
    moves.forEach(pos => {
        for(let i =0; i<board.length; i++){
            if(board[i][pos-1] !== 0){
                let tmp = board[i][pos-1];
                board[i][pos-1] =0;

                //뽑을때 스텍에 담겨있는 원소와 같다면 pop 후 answer count
                if(tmp === stack[stack.length-1]){
                    stack.pop();
                    answer+=2;
                // 같지 않다면 원소를 그냥 push
                }else{
                    stack.push(tmp);
                }break;
            }
        }
    });
                    
    return answer;
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
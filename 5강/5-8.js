function compareMaps(map1, map2){
    if(map1.size !== map2.size) return false;
    for(let [key,val] of map1){
        if(!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}
function solution(s, t){
    let answer = 0;
    let lt=rt=0;
    let sH = new Map();
    let tH = new Map();

    //1. tH에 Hash추가
    for(let x of t){
        if(tH.has(x)){
            tH.set(x,tH.get(x)+1);
        }else{
            tH.set(x,1);
        }
    }
    //2. sH Hash 추가(슬라이딩 윈도우를 위해 3칸씩)

    let len=t.length-1;
    for(let i=0; i<len; i++){
        if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
        else sH.set(s[i], 1);
    }

    //3.  슬라이딩 윈도우 Hash, 투포인터
        //슬라이딩 윈도우 Hash
    for(let rt=len ; rt<s.length; rt++){
        if(sH.has(s[rt])){
            sH.set(s[rt],sH.get(s[rt])+1);
        }else{
            sH.set(s[rt],1);
        }

        // sH,tH비교
        if(compareMaps(sH,tH)) answer++
        //투포인터 lt 하나씩 포인터 삭제
        sH.set(s[lt],sH.get(s[lt])-1);
        //lt의 키값이 0이면 delete
        if(sH.get(s[lt]) === 0){
            sH.delete(s[lt]);
        }
        lt++;
    }



    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));
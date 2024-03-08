document.addEventListener ("DOMContentLoaded", () => {
    const bt = document.querySelector("button");
    const nb = document.querySelector("#numbers");

    let arr = []; //배열은 바뀌기 때문에 let으로 선언해야 함
    
    
    bt.addEventListener("click", ()=> {
        //배열 초기화(arr.length = 0 이렇게도 가능)
        arr = [] ;

        //버튼이 눌러질 때마다 1에서 45까지 랜덤수 7개 생성(중복X)
        while(arr.length<7) {
            let n = Math.floor(Math.random()*45) + 1;
            if(!arr.includes(n)) arr.push(`<span class="sp${parseInt(n/10)}">${n}</span>`);
        }
        
        //배열 중간에 + 추가하기
        arr.splice(6,0,'<span> + </span>')

        //문자열에서 콤마 없애기(replaceAll)
        let s = arr.toString().replaceAll(',', ' ');
        console.log(s)
         
        //문자열 s를 nb 영역에 추가
        nb.innerHTML = s;
    })
    
})
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
            if(!arr.includes(n)) arr.push(n);
        }

        // //+ 넣기 방법1: if문 
        // let tags = ' '; //tags는 비어있는 문자열
        // arr.map((v, i) => {
        //     tags = tags + `<span class="sp${parseInt(v/10)}">${v}</span>`;
        // //숫자를 나눈 몫을 구하기 위해 실수를 정수로 만드는 parseInt 사용
        //     if(i === 5) 
        //         tags = tags + '<span> + </span>';
        //         console.log(tags)
        // });
        // nb.innerHTML = tags;
        
        //let tags = []; //tags는 비어있는 리스트
        tags = arr.map((v)=>`<span class="sp${parseInt(v/10)}">${v}</span>`);
        
        //배열 중간에 + 추가하기
        tags.splice(6,0,'<span> + </span>')

        //문자열에서 콤마 없애기(replaceAll)
        let s = tags.toString().replaceAll(',', ' ');
        console.log(s)
        
        //문자열 s를 nb 영역에 추가
        nb.innerHTML = s;
    })
    
})
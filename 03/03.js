//함수 작성2 : 화살표 함수(상수에 함수 선언)
//변수 선언: const(상수), let(변수) 
const handleClick = (n) =>  {
    let msg;
    if(n==1) msg = "<h2>안녕하세요</h2>";
    else if(n==2) msg = "<h2>안녕히 가세요</h2>";
    else if(n==3) msg = `<h2>버튼 ${n} 클릭</h2>`;
    else msg = `<h2>버튼 ${n} 클릭</h2>`;
    //else if 마지막에는 조건을 걸지 않음

    document.querySelector("#msgArea").innerHTML = msg;
}


//함수 작성1

// function handleClick (n) {
//     // 메세지 영역 가져오기1
//     // document.getElementById("msgArea").innerHTML = "안녕";

//     // 메세지 영역 가져오기2
//     // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>";

//     document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>`;
// }

// innerHTML은 속성-> .속성 = ""
// 함수작성2 : fuction은 메소드-> function 함수명() {} 
// const는 메소드-> const 함수명 = () => {}
//innerHTML은 html의 태그를 사용할 수 있음
// `: 백틱 문자열->'${}'

//DOM tree가 완성된 후 실행
//콜백 함수(메소드의 인수로 들어가는 함수, 함수를 호출하지 않아도 됨)
//addEventListener는 event를 감지함 ex.DOMContentLoaded
//DOMContentLoaded가 끝나면 콜백 함수가 실행됨
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok"); //오류 확인할 때
    
    //버튼생성
    const bt3 = document.createElement("button");//버튼 만들기
    const bt3Txt = document.createTextNode("버튼3");//버튼 이름 정하기

    bt3.setAttribute("id", "bt3"); //id 정하기
    bt3.appendChild(bt3Txt);//버튼에 이름 삽입하기

    //버튼삽입
    document.querySelector("#btArea2").append(bt3);//지정 영역에 버튼 넣기

    //버튼이벤트달기
    bt3.addEventListener("click", () => {
        handleClick(3);
    });

    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4");

    bt4.appendChild(bt4Txt);
    document.querySelector("#btArea2").append(bt4);
    
    bt4.addEventListener("click", () => {
        handleClick(4);
    });

}); 







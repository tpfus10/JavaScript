//함수 작성2 : 화살표 함수(상수에 함수 선언)
//변수 선언: const(상수), let(변수) 
const handleClick = (n) =>  {
    let msg;
    if(n==1) msg = "<h2>안녕하세요</h2>";
    else msg = "<h2>안녕히 가세요</h2>";
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
// fuction은 메소드-> function 함수명() {} 
// const는 메소드-> const 함수명 = () => {}
//innerHTML은 html의 태그를 사용할 수 있음
// `: 백틱 문자열->'${}'
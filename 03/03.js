function handleClick (n) {
    // 메세지 영역 가져오기1
    // document.getElementById("msgArea").innerHTML = "안녕";

    // 메세지 영역 가져오기2
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>";

    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>`;



}

// innerHTML은 속성->.속성 = ""
// fuction은 메소드->함수명() {}
//innerHTML은 html의 태그를 사용할 수 있음
// `: 백틱 문자열->'${}'
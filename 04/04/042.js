//함수 만들기: 난수를 입력받아서 이미지 파일 바꾸기
function randomPlay () { //함수 이름 설정
    const n = Math.floor(Math.random() * 6) + 1; //난수 생성
    document.querySelector("#img").setAttribute("src", `../img/${n}.png`); //어느 영역에 어떤 변화를 줄지 설정
}

//버튼을 누르면 함수가 실행되도록 하기
document.addEventListener("click", randomPlay);




document.addEventListener ("DOMContentLoaded", () => {
    //DOM 생성 후에 img, input, button 가져오기
    const upDownImg = document.querySelector("img");
    const numInput = document.getElementById("num1");
    // getElementById를 쓰면 #을 쓰면 안 됨
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    //input에 focus 맞추기(focus는 깜빡거리는 거,,)
    numInput.focus();

    //랜덤 수 생성 변수
    let n ; //undefined number
    let flag = false;

    //버튼의 클릭 이벤트 달기
    bt.addEventListener("click", (e)=> {
        e.preventDefault();
        //랜덤수 생성
        if(!flag) { //if(flag === false)로 써도 됨
            n = Math.floor(Math.random()*100) + 1; //1~100까지
            console.log("n=", n);
            flag = true;

            //입력 초기화
            numInput.style.display = 'inline';
            numInput.value = "";
            numInput.focus();
            bt.innerHTML = "확인";
            upDownImg.setAttribute("src", "./updown/what.png");
        } 

        //input 박스 내용 가져오기
        if(numInput.value == '') {
            //alert("숫자를 입력하세요.");
            msg.innerHTML = "<span>숫자를 입력하세요.</span>";
            return;
        }
        
        //숫자 비교
        msg.innerHTML = "";
        if(n == parseInt(numInput.value)) {
            //msg.innerHTML = "<span>정답입니다!</span>";
            upDownImg.setAttribute("src", "./updown/good.png")
            numInput.style.display = 'none';
            bt.innerHTML="재시작";
            flag = false;
        } 
        else if (n > numInput.value) {
            //msg.innerHTML = "<span>Up</span>";
            upDownImg.setAttribute("src", "./updown/up.png")

        } else {
           // msg.innerHTML = "<span>Down</span>";
           upDownImg.setAttribute("src", "./updown/down.png")
        }
    });
})


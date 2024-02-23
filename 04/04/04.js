document.addEventListener("DOMContentLoaded", () => {
    //버튼 가져오기
    const bt1 = document.querySelector("#bt1");

    //버튼 이벤트 달기
    bt1.addEventListener("click", () => {
        randomPlay();
    })

})

const randomPlay = () => {
    const a = Math.floor(Math.random() * 6) + 1;
    const img1 = document.querySelector("#img1");
    img1.setAttribute("src", `../img/${a}.png`);
    console.log("click", a);   

    const b = Math.floor(Math.random() * 6) + 1;
    const img2 = document.querySelector("#img2");
    img2.setAttribute("src", `../img/${b}.png`);
    console.log("click", b);

    const c = Math.floor(Math.random() * 6) + 1;
    const img3 = document.querySelector("#img3");
    img3.setAttribute("src", `../img/${c}.png`);
    console.log("click", c);

    const W = document.querySelector("#w");
    if(a === b === c) {
     W.setAttribute("id", "#c");
    } 

}


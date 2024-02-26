// document.addEventListener("DOMContentLoaded", () => {
//     const bts = document.querySelectorAll("img"); //배열이 만들어짐

//     //배열의 형태를 분리해줌
    
    
// })

const randomPlay = () => {
    const bts = document.querySelectorAll(".c1");
    const btsNum = [1, 1, 1];

    //for of
    for(let [idx, bt] of bts.entries()) {
     const n = Math.floor(Math.random() * 6) + 1;
     bt.setAttribute("src",  `../img/${n}.png`);
     btsNum[idx] = n;

     console.log(btsNum);
    }
}

// const randomPlay = () => {
//     const bts = document.querySelectorAll("section img"); //css 셀렉터 규칙이 적용됨
//     //selectall을 써야 반복문 for 사용 가능함


    // // for of => 파이썬의 for in
    // for(let bt of bts) {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bts[i].setAttribute("src", `../img/${n}.png`)
    // }

    // //for each
    // bts.forEach((bt)) => {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bts[i].setAttribute("src", `../img/${n}.png`);
    // }

    // //for in
    // for(let i in bts) {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bts[i].setAttribute("src", `../img/${n}.png`);

    //     console.log("for in i=", bts[i])
    // }

    // //기본 for
    // for(let i = 0; i < bts.length ; i++) {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bts[i].setAttribute("src", `../img/${n}.png`);
    // }


    // bts.forEach((item) => { 
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     item.setAttribute("src", `../img/${n}.png`);
    
    //     console.log("click", n);  
    // });

// }



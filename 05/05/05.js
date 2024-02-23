document.addEventListener("DOMContentLoaded", () => {
    const bts = document.querySelectorAll("img"); //배열이 만들어짐

    //배열의 형태를 분리해줌
    
    
})

const randomPlay = () => {
    const bts = document.querySelectorAll("img");

    bts.forEach((item) => { 
        const n = Math.floor(Math.random() * 6) + 1;
        item.setAttribute("src", `../img/${n}.png`);
    
        console.log("click", n);  
    });

}



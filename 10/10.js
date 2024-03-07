document.addEventListener ("DOMContentLoaded", () => {
    const bt = document.querySelector("button");
    const nb = document.querySelector(".numbers");

    let arr = []
    let n;

    
    bt.addEventListener("click", (e)=> {
        while(arr.length<8) {
            e.preventDefault();
            n = Math.floor(Math.random()*46) + 1;
            if(!arr.includes(n)) {
                arr.push(n);
            }
        }
        nb.innerHTML = "";
        for(let c of arr) {
         nb.innerHTML += "<span>${c}</span>";
        }
    })
    
})
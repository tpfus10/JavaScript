const handleChange = (s1, s2, lb1, lb2, t1, t2) => {
    if(sel1.value == "℃") {
      sel2.value = "℉"; //form의 값은 .value로 가져옴
      lb1.innerHTML = "℃";
      lb2.innerHTML = "℉";
  }
  else {
    sel2.value = "℃";
    lb1.innerHTML = "℉";
    lb2.innerHTML = "℃";
}

  t1.value ="";
  t1.focus();
  t2.value ="";
}


document.addEventListener("DOMContentLoaded", () => {//html에서 동적 설정을 하지 않았을 때 js에서 동적 설정을 하기 위한 준비
  const sel1 = document.querySelector("#sel1");
  const sel2 = document.querySelector("#sel2");

  const txt1 = document.querySelector("#txt1");
  const txt2 = document.querySelector("#txt2");

  const labels = document.querySelectorAll("label"); //여러 값이기 때문에 all을 붙여줘야 함
//화면(돔트리)의 필요한 값을 가져옴

  sel1.addEventListener("change", ()=> {
    handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2)
  })
  
  sel2.addEventListener("change", ()=> {
    handleChange(sel2, sel1, labels[1], labels[0])
  })

  //change를 이용하면 커서를 다른 곳에 클릭하거나 enter를 눌러줘야 값이 변함
  //input은 입력값이 변경될 때마다 발생함
  //change는 한 번만 발생하기 때문에 값을 선택하여 다른 작업을 수행하는 경우에 적절
  //input은 반복이 가능하기 때문에 사용자가 값을 입력할 때마다 작업을 수행하는 경우에 적절

  txt1.addEventListener("input", () => { //입력값을 숫자로 변환해야 하는 경우 parseFloat 사용하기
    console.log(txt1.value)
    console.log(sel1.value)
    if(sel1.value === "℃") {
      txt2.value=(parseFloat(txt1.value)*(9/5)) + 32; //parseFloat 함수는 문자열을 숫자로 변환함
    }else {
      txt2.value=(parseFloat(txt1.value)-32)*(5/9);
    }
  })
})

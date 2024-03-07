//자바스크립트 데이터 타입
//_기본 타입
let n1 = 10;          //정수
let n2 = 10.5;        //실수
let s1 ="안녕하세요."  //문자열

// console.log("정수 : ", n1);
// console.log("실수 : ", n2);
// console.log("문자열 : ", s1);
// // console.log("문자열의 요소 접근 : ", s1[0]); 
// //문자열도 배열의 함수가 적용되는 경우O
// //문자열은 특수한 배열이라고 생각하면 됨(자르기가 가능함)
// //문자가 한 개씩 6개 저장되어 있음

//문자열 순회
for(let i in s1) { //in을 쓰면 문자열의 인덱스를 가져옴(0~4)
    console.log("문자열 순회(in) : ", s1[i]); //파이썬의 f0r ~ in 
}
for(let c of s1) { //of를 쓰면 문자열의 값을 가져옴(안녕하세요) // js는 for ~ of
    console.log("문자열 순회(of) : ", c);
}

//배열
//tailing 쉼표 사용 가능(제일 마지막에 쉼표 쓰는 것)
//윈도우키+.=이모지
let arr =['🍎', 1, '🍌', 2, '🥕', 3, '🌽', ];
console.log("배열 : ", arr);
console.log("배열의 요소 접근 : ", arr[0]);

//배열 순회
for(let i in arr) {  //i는 배열의 인덱스가 됨
    console.log("배열 순회(in) : ", arr[i]);
}
for(let c of arr) { //c는 배열의 값이 됨
    console.log("배열 순회(of) : ", c);
}

//arr1 만들기(리스트에 i가 있을 때 for in으로 값을 "바꾸는" 경우)
//map도 기존에 있는 값을 무시하고 새로운 값으로 바꾸도록 할 수 있음
let arr1 = [0, 0, 0, 0, 0, 0,]
for(let i in arr) {
    arr1[i] = arr[i];
}
console.log("반복문 인덱스로 arr1 = ", arr1)

console.log("arr1을 for of로 = ", arr1)
//arr4 만들기(리스트에 i가 없을 때 push로 값을 "밀어넣는" 경우)
let arr4 = [];
console.log("arr4=", arr4);
//반복문으로 arr을 arr4에 
for(let item of arr) {
    arr4.push(item); //push는 파이썬의 append와 동일함
}                   //for-in을 쓸 경우에는 item을 arr[i]라고 해주면 됨
console.log("반복문으로 arr4 =", arr4)

//map으로 arr을 arr4에
//map() 함수는 배열의 각 요소에 함수를 적용하여 새로운 배열을 만드는 함수임
//() 안에는 기존 배열의 요소를 의미하는 변수가 들어감
arr4 = arr.map(v => v); //=매개변수 v를 그대로 리턴해서 arr4에 넣겠다
console.log("map으로 arr4 =", arr4);

//🟡배열 키-값 구조 분리: map 함수(call back함수가 들어감)
let arr2 = arr.map((v, i) => { //for of보다는 map 사용하기
    console.log("배열 map-v : ", v); //배열의 값
    console.log("배열 map-i : ", i); //배열의 index
    //console.log("배열 map-v : ", v, "배열 map-i : ", i); //합쳐서 보는 것도 가능
    return v + "🍟";//함수니까 return 사용 가능
});

//return값을 저장한 배열(원래 배열의 개수와 동일한 개수의 배열이 나옴)
console.log("arr2 = ", arr2);

//🟡콜백의 인수가 1개인 경우 () 생략 가능
//콜백의 바디에 실행문이 없고, return문만 있으면 {}와 return 생략 가능
arr2 = arr.map(v => v + "🥐"); //변경이 가능하려면 arr2를 let으로 선언해야 함
console.log("arr2 = ", arr2);

//filter를 for of/push로
let arr21 = [];
for(let item of arr) {
    if(isNaN(item)) arr21.push(item);  
}
console.log('arr의 문자값=', arr21)

//filter를 함수로
let arr22 = arr.filter((v) => !isNaN(v));
console.log('arr의 숫자값=', arr22);

//-------------------------------------------------------
//map()과 filter()는 배열에만 쓸 수 있고 오브젝트에는 못 씀
//그래서 오브젝트를 배열로 바꿔서 써야 함
//-------------------------------------------------------

//오브젝트:{'키':값}
let obj ={'🍎' : 1, '🍌': 2, '🥕': 3, '🌽': 4};
console.log("오브젝트 : ", obj);
console.log("오브젝트의 요소 접근 : ", obj['🍎']);

//오브젝트 순회: for in , for of
for(let i in obj) { 
    console.log("오브젝트 순회(in) : ", obj[i]);
}
for(let c of Object.entries(obj)) {  //Object.entries(오브젝트명): 키와 값을 배열로 가져옴
    console.log("오브젝트 순회(of) : ", c);//오브젝트는 키와 값이 쌍(함께 가져와야 함)
}

//오브젝트 키-값 구조 분할
for(let [k, v] of Object.entries(obj)) {  //let [,] of Object.entries(오브젝트명)
    console.log("오브젝트키 : ", k); 
    console.log("오브젝트값 : ", v); 
}

//키와 값을 하나의 요소로 만들기
console.log("오브젝트 키배열 : ", Object.keys(obj)); //오브젝트의 키값을 배열로 가져옴
let arr3 = Object.keys(obj).map( k => k + obj[k]);
console.log("arr3 =", arr3);

//전개연산자(리스트를 복사하는 새로운 연산자)
let arr33 = [...arr];
console.log("전개연산자=", arr33);


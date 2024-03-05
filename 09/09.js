//자바스크립트 데이터 타입
//_기본 타입
let n1 = 10;          //정수
let n2 = 10.5;        //실수
let s1 ="안녕하세요."  //문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);
console.log("문자열의 요소 접근 : ", s1[0]); 
//문자열도 배열의 함수가 적용되는 경우O
//문자열은 특수한 배열이라고 생각하면 됨(자르기가 가능함)

//문자열 순회
for(let i in s1) { //in을 쓰면 문자열의 인덱스를 가져옴(0~4)
    console.log("문자열 순회(in) : ", s1[i]);
}
for(let c of s1) { //of를 쓰면 문자열의 값을 가져옴(안녕하세요)
    console.log("문자열 순회(of) : ", c);
}

//배열
//tailing 쉼표 사용 가능(제일 마지막에 쉼표 쓰는 것)
//윈도우키+.=이모지
let arr =['🍎', 1, '🍌', 2, '🥕', 3, '🌽', ];
console.log("배열 : ", arr);
console.log("배열의 요소 접근 : ", arr[0]);

//배열 순회
for(let i in arr) { 
    console.log("배열 순회(in) : ", arr[i]);
}
for(let c of arr) { 
    console.log("배열 순회(of) : ", c);
}

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

//오브젝트:{'키':값}
let obj ={'🍎' : 1, '🍌': 2, '🥕': 3, '🌽': 4};
console.log("오브젝트 : ", obj);
console.log("오브젝트의 요소 접근 : ", obj['🍎']);

//오브젝트 순회
for(let i in obj) { 
    console.log("오브젝트 순회(in) : ", obj[i]);
}
for(let c of Object.entries(obj)) {  //Object.entries(오브젝트명)
    console.log("오브젝트 순회(of) : ", c);//오브젝트는 키와 값이 쌍(함께 가져와야 함)
}

//오브젝트 키-값 구조 분리
for(let [k, v] of Object.entries(obj)) {  //let [,] of Object.entries(오브젝트명)
    console.log("오브젝트키 : ", k); 
    console.log("오브젝트값 : ", v); 
}

//키와 값을 하나의 요소로 만들기
console.log("오브젝트 키배열 : ", Object.keys(obj));
let arr3 = Object.keys(obj).map( k => k + obj[k]);
console.log("arr3 =", arr3);


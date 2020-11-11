var arr=['ksh','female','korea','age']

var o={
'name':'sunhee',
'gender':'female',
'age':'35'
}

//json 이런 형식으로 표기됨

for(var x in o){
// o 라는 object 안에 x, property 를 담는다
console.log(x,o[x]);
}

console.log(o.name,o['name']);

let row = {
    name: '홍길동',
    age: 22
}

let keysOfRow = Object.keys(row);

let someFunc = function(key) {
    let value = row[key];
    
    if ( value == '22' ) {
        return true;
    }
};
let found = keysOfRow.some(someFunc);

console.log(found);
//출력 : true
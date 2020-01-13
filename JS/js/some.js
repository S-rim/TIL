//some함수는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트하는 함수

let testData = ["aa", "bb", "cc", "dd", "ee"];

let rs = testData.some(function(item) {
    return item.indexOf('ff') > -1;
});

console.log(rs);
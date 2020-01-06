/*
! 정리
* 1. mail-content를 한 개씩 받아온다.
* 2. 한 개씩 받아온 mail-content에 html을 추가한다. 
*/
const app = document.getElementById('app');
const mailArr = [];
const mailData = 
[{
    from: "David James",
    date: "2018-01-05",
    title: "qwerqwer",
    text: "asdfsadfadfsdf",
    tag: "sales",
    img: "red",
}, {
    from: "1452",
    date: "2018-01-08",
    title: "gsdbjdksfk",
    text: "adkeikdiekdj djfhskjdfskf akdhfdsafls",
    tag: "idontknow",
    img: "blue",
}, {
    from: "1452",
    date: "2018-01-08",
    title: "gsdbjdksfk",
    text: "adkeikdiekdj djfhskjdfskf akdhfdsafls",
    tag: "idontknow",
    img: "blasck",
}, {
    from: "1452",
    date: "2018-01-08",
    title: "gsdbjdksfk",
    text: "adkeikdiekdj djfhskjdfskf akdhfdsafls",
    tag: "idontknow",
    //! img속성이 없음
}];
// * mailData를 검사하여 값이 없거나
// * 정의되지 않은 것이 있다면 ""으로 초기화
mailData.forEach((data) => {
    data.from = data.from   || "";
    data.date = data.date   || "";
    data.title = data.title || "";
    data.text = data.text   || "";
    data.tag = data.tag     || "";
    data.img = data.img     || "";
});

for (let i in mailData) {
    mailArr[i] = document.createElement('div');
    mailArr[i].setAttribute('class', 'mailClass');
    mailArr[i].setAttribute('id', `mail${parseInt(i)+1}`);
    // * mailContent에 배열 형식으로 내용을 넣음
    let mailContent = mailData.map(data => {
        let test = `<div class="b">${data.from}</div>
    <div class="c">${data.date}</div>
    <div class="d">${data.title}</div>
    <div class="e">${data.text}</div>
    <div class="f">${data.tag}</div>
    <div class="g">${data.img}</div>`
        return test;
    });
    mailArr[i].innerHTML = mailContent[i];
    app.appendChild(mailArr[i]);
}
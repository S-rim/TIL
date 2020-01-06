// const title = document.querySelector("#title");

// function handleClick() {
//     title.sytle.color = "blue";
// }

// title.addEventListener("click", handleClick);

// if(10 > 5){
//     console.log("hi");
// } else{
//     console.log("ho");
// }

const data = [{
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
    img: "black",
}, {
    from: "1452",
    date: "2018-01-08",
    title: "gsdbjdksfk",
    text: "adkeikdiekdj djfhskjdfskf akdhfdsafls",
    tag: "idontknow",
    img: "red"
}];
let btn = document.getElementById('btn');
let message = document.querySelectorAll('.message');


btn.addEventListener('click', () => {
message.forEach(el => {
    data.map(data => {
        let content = `<div id="from">${data.from}</div>
        <div id="date">${data.date}</div>
        <div id="title">${data.title}</div>
        <div id="text">${data.text}</div>
        <div id="tag">${data.tag}</div>
        <div id="img">${data.img}</div>`
        el.innerHTML = content;
    });
})
});
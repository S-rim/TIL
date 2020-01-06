const mailData = [
    {
      from: "David James",
      date: "2018-01-05",
      title: "qwerqwer",
      text: "asdfsadfadfsdf",
      tag: "sales",
      img: "red",
    }, 
    {
      from: "1452",
      date: "2018-01-08",
      title: "gsdbjdksfk",
      text: "adkeikdiekdj djfhskjdfskf akdhfdsafls",
      tag: "",
      img: "blue",
    },
    {
      from: "urjnffjemd",
      date: "2018-02-26",
      title: 'sdjfsdf',
      text: "Dfsfds sdfs sadfadfsdf",
      tag: "",
      img: "green",
    }, 
    {
      from: "David James",
      date: "2018-03-02",
      title: "sjflksjdflk sdfsf",
      text: "asdfsadfadfsdf",
      tag: "marketing",
      img: "red",
    },
    {
      from: "uejdf James",
      date: "2018-04-09",
      title: "qwerqwer",
      text: "asdfsadfadfsdf",
      tag: "sales",
      img: "black",
    }, 
    {
      from: "olkfnjlffkf",
      date: "2018-05-14",
      title: "gsdbjdksfk",
      text: "adkeikdiekdj djfhskjdfskf akdhfdsafls",
      tag: "to me",
      img: "yellow",
    },
    {
      from: "dikcj",
      date: "2018-06-20",
      title: 'sdjfsdf',
      text: "Dfsfds sdfs sadfadfsdf",
      tag: "frontend",
      img: "green",
    }, 
    {
      from: "David James",
      date: "2018-03-02",
      title: "sjflksjdflk sdfsf",
      text: "asdfsadfadfsdf",
      tag: "design",
      img: "red",
    },
    {
        from: "Seo rim",
        date: "2018-09-21",
        title: "dkqorhvk",
        text: "dfsdfsfdsfsdfsdfs",
        tag: "frontend",
        img: "purple",
    },
    {
        from: "ssse",
        date: "2018-09-21",
        title: "dfssdfsd",
        text: "dsfdfssdsdfsdfsd",
        tag: "backend",
        img: "orange",
    }
  ]

//compose_btn 누르면 색깔 분홍색으로 바뀌는 것
const compose_btn = document.getElementById("compose_btn");
compose_btn.addEventListener('click',function() {
    compose_btn.style.backgroundColor = "pink";
})

//사이드바 칸 누르면 색 바뀌는 것
const list_index = document.getElementsByClassName("list_index");
for(let i=0; i<list_index.length; i++) {
    list_index[i].addEventListener('click', () => {
        seorim();
        list_index[i].style.backgroundColor = "rgba(0, 0, 0, 0.267)";
    });
}
//사이드바 원래 칸 색으로 초기화 해주는 함수
function seorim () {
    for(let i = 0; i<list_index.length; i++) {
        list_index[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

//div칸 태그 돔트리에 올려주는 것
//div칸 10개 만들기
for(let i=0; i<10; i++)
{
    const div = document.createElement('div');

    div.className = "message-content";

    const message_list = document.getElementById("message-list");

    message_list.appendChild(div);
}

//누르는 곳에 따라 클래스네임 바꿔서 스타일 바꾸기
function message()
{
    for(let i=0; i<message_content.length; i++)
    {
        message_content[i].classList.remove("selected-message-content");
    }
}

const message_content = document.getElementsByClassName("message-content");
const selected_message = document.getElementById('selected-message');
for (let i = 0; i < message_content.length; i++) {
    message_content[i].addEventListener('click', () => {
        //누르는 곳에 따라 클래스네임 바꿔서 스타일 바꾸기
        for (let i = 0; i < message_content.length; i++) {
            message_content[i].classList.remove("selected-message-content");
        }
        message_content[i].classList.add("selected-message-content");
        
        //문제의 이 부분..
        let content = `<div id="selected-message">
            <div id="user">
                <div class="upper-box">${mailData[i].title}</div>
                <div class="${mailData[i].img} circle"></div>
                <div class="lower_box"><div class="lower-box_from">${mailData[i].from}</div>
                <div class="lower-box_tag">${mailData[i].tag}</div>
                </div>
                <div class="lower-box_date">${mailData[i].date}</div>
            </div>
            <div id="text">
                <p id="mail-content">${mailData[i].text}</p>
            </div>
        </div>`;
        selected_message.innerHTML = content;
    });
}

for (let i in mailData) {
  let mailContent = mailData.map(data => {
      let from = `<div class="${data.img} img"></div>
      <div class="from">${data.from}</div>
      <div class="date">${data.date}</div>
      <div class="title">${data.title}</div>`
      return from;
  });
  message_content[i].innerHTML = mailContent[i];
}

// use.forEach(el => {
//   data.map(data => {
//       let content = `<div id="from">${data.from}</div>
//       <div id="date">${data.date}</div>
//       <div id="title">${data.title}</div>`
//       el.innerHTML = content;
//   });
// })

// function filter(){

//   let idx = data.filter((x) => {
//     return x === 0  
//   });
// console.log(idx);  
// }

// let data = [
//   {name: "jack", age:20},
//   {name: "sdf", age:2},
//   {name: "gfd", age:19},
//   {name: "ssk", age:15},
//   {name: "dddck", age:13}
// ]
// let result = mailData.filter( () => {
//   if() return idx;
// });

// console.log(result);

function keyword(e){
  search(e.target.value)
}

function search(keyword){
  console.log("f");
  const searchedList = mailData.filter((i)=>i.from.indexOf(keyword) !== -1);
  document.getElementById("message-list-container").removeChild(document.getElementById("message-list"));

      const div = document.createElement('div');

      div.className = "message-content";

      const message_list = document.getElementById("message-list");

      message_list.appendChild(div);

      for (let i in searchedList) {
        let datacontent = searchedList.map(data => {
            let from = `<div class="${data.img} img"></div>
            <div class="from">${data.from}</div>
            <div class="date">${data.date}</div>
            <div class="title">${data.title}</div>`
            return from;
        });
        message_content[i].innerHTML = datacontent[i];
      }
}


    
 


// function filter(){

//   let value = document.getElementById("message-search").value.toUpperCase();
//   let item = document.getElementsByClassName("message-content");

//   for(let i=0;i<item.length;i++){
//     let name = item[i].getElementsByClassName("from");
//     if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
//       item[i].style.display = "block";
//     }
//     else{
//       item[i].style.display = "none";
//     }
//   }
// }


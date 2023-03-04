



document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#menuBtn")
    .addEventListener("click", function (e) {
      if (document.querySelector(".menuWrap").classList.contains("on")) {
        //메뉴 slideOut
        document.querySelector(".menuWrap").classList.remove("on");
        //slideOut시 menuBtn의 img src를 menu icon으로 변경
        document.getElementById("menuBtn").src = "/img/icons/menuBtn.png";
        document.querySelector("#menuBtn").classList.remove("btnRotate");
      } else {
        //메뉴 slideIn
        document.querySelector(".menuWrap").classList.add("on");
        //slideIn시 menuBtn의 img src를 cross icon으로 변경
        document.getElementById("menuBtn").src = "/img/icons/cross.png";
        document.querySelector("#menuBtn").classList.add("btnRotate");
      }
    });
});




function chk_form(){
  document.getElementById('frm').onsubmit();
}


function chk_Arr(year){
  const divInstagram = document.getElementById("instagram"); // 인스타그램 아이템 DIV
  const element = document.querySelectorAll('[class*=instagram_item_year]'); // 인스타그램 각각의 아이템
  const elementYear = document.querySelectorAll('[id*=year]');

  if(element!==null){
    divInstagram.classList.remove('instagram_item_hidden');
  }else{
    divInstagram.classList.add('instagram_item_hidden');
  }
  
  element.forEach(function(element){
    if(element.classList.contains("instagram_item_year"+year)){
      element.classList.remove('instagram_item_hidden');
    }else{
      element.classList.add("instagram_item_hidden");
    }
  });


  elementYear.forEach(function(element){
    if(element.id==="year" + year){
      element.classList.add("instagram_item_selected");
    }else{
      element.classList.remove("instagram_item_selected");
    }
  })

  // if(elementYear !== null){
  //   element.classList.add("instagram_item_selected");
  // }

  

}



function test(){
  const accessToken = "IGQVJYVW5tZATRTUHBrU0s0elJFR0RUZAU5YVEh3bVJPVkN2RktIRzdMakVwMktwUHNfVWhWLTdHVVFIUm9hU0ZAGQThxVkNqNUdMdmJMU1ZAiS2R1NEdheV8zbUYwMzF5TVVlVS1reVNpOEJEUUc1ZAnpkYwZDZD";
  const hashtags = ["python", "data", "analysis"]; // 검색할 해시태그
  
  // 각 해시태그 별로 게시물 수를 계산합니다.
  const counts = {};
  for (const hashtag of hashtags) {
    const url = `https://api.instagram.com/v1/tags/${hashtag}/media/recent?access_token=${accessToken}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const count = data.data.length;
        counts[hashtag] = count;
  
        // 모든 해시태그에 대한 게시물 수를 계산한 경우, 랭킹순위를 출력합니다.
        if (Object.keys(counts).length === hashtags.length) {
          const rankedHashtags = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
          for (let i = 0; i < rankedHashtags.length; i++) {
            console.log(`${i + 1}: ${rankedHashtags[i]} (${counts[rankedHashtags[i]]})`);
          }
        }
      })
      .catch(error => console.log(error));
  }
   
}
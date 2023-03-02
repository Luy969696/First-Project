



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
  const divInstagram = document.getElementById("instagram");
  const element = document.querySelectorAll('[class*=instagram_item_year]');

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
}

function chk_yearList(){
  const element = document.getElementsByClassName("instagram_item_year2022");
  console.log(element);
}



document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#menuBtn")
    .addEventListener("click", function (e) {
      if (document.querySelector(".menuWrap").classList.contains("on")) {
        //메뉴 slideOut
        document.querySelector(".menuWrap").classList.remove("on");
        //slideOut시 menuBtn의 img src를 menu icon으로 변경
        document.getElementById("menuBtn").src = "public/img/icons/menuBtn.png";
        document.querySelector("#menuBtn").classList.remove("btnRotate");
      } else {
        //메뉴 slideIn
        document.querySelector(".menuWrap").classList.add("on");
        //slideIn시 menuBtn의 img src를 cross icon으로 변경
        document.getElementById("menuBtn").src = "public/img/icons/cross.png";
        document.querySelector("#menuBtn").classList.add("btnRotate");
      }
    });
});




function chk_form(){
  document.getElementById('frm').onsubmit();
}
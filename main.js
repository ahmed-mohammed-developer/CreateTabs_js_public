let tabs = document.querySelectorAll(".tabs li");
let tabArr = Array.from(tabs);

let divs = document.querySelectorAll(".content > div");
let divArr = Array.from(divs);

tabArr.forEach((ele) => {
     ele.addEventListener("click", function (e){
      //console.log(ele)
          tabArr.forEach((ele) => {
               ele.classList.remove("active");
          });
          e.currentTarget.classList.add("active");
          divArr.forEach((div) => {
               div.style.display = "none";
          });
          // console.log(e.currentTarget.dataset.cont);
          document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
     });
});
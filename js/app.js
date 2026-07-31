// ChineseMaster AI


console.log("ChineseMaster AI started");



// Menu mobile

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.onclick = function(){

        if(nav.style.display === "block"){

            nav.style.display="none";

        }else{

            nav.style.display="block";

            nav.style.background="white";

            nav.style.padding="20px";

            nav.style.position="absolute";

            nav.style.top="75px";

            nav.style.right="20px";

            nav.style.borderRadius="20px";

        }

    }

}




// Hiệu ứng card

const cards=document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow=
        "0 20px 40px rgba(0,0,0,.15)";

    });



    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow=
        "0 10px 30px rgba(0,0,0,.08)";

    });


});




// Nút bắt đầu học

const startButton=document.querySelector(".hero button");


if(startButton){


startButton.onclick=function(){


    window.location.href="hsk.html";


}


}




// Lưu trạng thái học demo


let progress = localStorage.getItem("learningProgress");


if(!progress){

    localStorage.setItem(
        "learningProgress",
        "0"
    );

}



console.log(
"Progress:",
localStorage.getItem("learningProgress")
);

let yesbtn = document.querySelector(".yes");
let nobtn = document.querySelector(".no");
let head = document.getElementsByTagName("h1")[0];
//560X232
nobtn.addEventListener("click" ,function (){
    nobtn.style.position="relative";
    let height = Math.floor(Math.random()*200);
    let width = Math.floor(Math.random()*502);
    if(height<=116 && width<=251){
        nobtn.style.bottom = height.toString()+"px";
        nobtn.style.left = width.toString()+"px"
    }
    else{
        nobtn.style.top = height.toString()+"px";
        nobtn.style.right = width.toString()+"px"  
    }
});

yesbtn.addEventListener("click",function (){
    head.innerText="😂Lmao, Indeed You Are Dumb!😭";
});

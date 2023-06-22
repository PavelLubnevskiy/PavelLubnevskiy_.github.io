document.querySelector(".phone_btn").addEventListener("click",()=>{
    document.querySelector(".block_contact").classList.toggle("active");
    blur();
})
document.querySelector(".blur").addEventListener("click",()=>{
    if(document.querySelector(".block_contact.active")){
        document.querySelector(".block_contact.active").classList.remove("active");
        blur();
    }
})
function blur() {
    document.querySelector(".blur").classList.toggle("active")
}
document.querySelector(".burger").addEventListener("click",()=>{
 document.querySelector(".menu_burger").classList.toggle("active");
 document.querySelector('.menu').classList.toggle("active");
})
document.querySelector(".blur").addEventListener("click",()=>{
    if(document.querySelector("menu_burger.active")){
        document.querySelector(".menu_burger.active").classList.remove("active");
        blur();
    }
})
document.querySelector(".span_burger").addEventListener("click",()=>{
    document.querySelector(".menu_burger").classList.toggle("active");
    blur();
   })
   document.querySelector(".blur").addEventListener("click",()=>{
       if(document.querySelector("menu_burger.active")){
           document.querySelector(".menu_burger.active").classList.remove("active");
           blur();
       }
   })
document.querySelector(".search_btn").addEventListener("click",()=>{
    document.querySelector(".search_main").classList.toggle("active");
})



const before=document.querySelector(".before");
const after=document.querySelector(".after");
after.addEventListener('click',()=>{
    const items=document.querySelectorAll(".items");
    document.querySelector(".slides").appendChild(items[0])
    console.log(items);
})
before.addEventListener('click',()=>{
    const items=document.querySelectorAll(".items");
    document.querySelector(".slides").prepend(items[3])
})
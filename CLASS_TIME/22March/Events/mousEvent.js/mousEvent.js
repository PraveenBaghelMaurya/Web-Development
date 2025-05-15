let data=document.querySelector('.data')
let btn=document.querySelector('.btn')
let data2=document.querySelector('.data2')
let btn2=document.querySelector('.btn2')

btn.addEventListener('keydown',(ev)=>{
    console.log(ev.key)
    console.log(ev.target)
})

btn2.addEventListener('keydown',(ev)=>{
    console.log(ev.key)
    console.log(ev.target)
})
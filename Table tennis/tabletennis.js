let myforms=document.querySelectorAll("form")
let mysecs=document.querySelectorAll("section")
let maxn=document.querySelector("#maxp")
let mydiv=document.querySelector('#result')
let mybutton=document.querySelector("#refresh")
myforms[0].addEventListener("submit",function(e){
    e.preventDefault()
    let t=parseInt(mysecs[0].textContent)+1
    mysecs[0].innerText=t
    if(t==parseInt(maxn.value)){
        mydiv.innerText="Player1 Wins!"
        mysecs[0].style.backgroundColor="green"
        mysecs[1].style.backgroundColor="red"
    }
})

myforms[1].addEventListener("submit",function(e){
    e.preventDefault()
    let t=parseInt(mysecs[1].textContent)+1
    mysecs[1].innerText=t
    if(t==parseInt(maxn.value)){
        mydiv.innerText="Player2 Wins!"
        mysecs[1].style.backgroundColor="green"
        mysecs[0].style.backgroundColor="red"
    }
})

mybutton.addEventListener('click',function(e){
    e.preventDefault()
    mysecs[0].innerText=0
    mysecs[1].innerText=0
    mysecs[1].style.backgroundColor="white"
    mysecs[0].style.backgroundColor="white"
    mydiv.innerText=""
})
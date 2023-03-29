let funfact= document.getElementById("funfact");
let excuser= document.getElementById("excuser");
let fun_btn= document.getElementById("fun_btn");
let excuser_btn= document.getElementById("excuser_btn");


fun_btn.addEventListener("click",goal);
 excuser_btn.addEventListener("click",pool);


function goal(){
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((res)=>res.json())
    .then((data)=>{
        funfact.innerHTML=`
        <h2>${data.text}</h2>`
    })
}


function pool(){
    fetch('https://dogapi.dog/api/facts')
    .then((res)=>res.json())
    .then((data)=>{
        excuser.innerHTML=`
        <h2>${data.facts}</h2>`
    })
}
import { getData,ran } from "./fetch.js";
let f=document.getElementById("find");
f.addEventListener("click",()=>{
    let name=document.getElementById("ran").value;
    getData(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`).then((res)=>{
        ran(res)
    })
    document.getElementById("ran").value=""
})
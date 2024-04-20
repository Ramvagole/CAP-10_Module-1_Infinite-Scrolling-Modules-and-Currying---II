import { getData,appe,sear } from "./fetch.js"
let search=document.getElementById("search");
search.addEventListener("click",()=>{
    let name=document.getElementById("nameSearch").value;
    getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then((res)=>{
        sear(res)
    })
    document.getElementById("nameSearch").value=""
})
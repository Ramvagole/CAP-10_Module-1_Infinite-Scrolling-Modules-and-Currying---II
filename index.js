import { getData,appe } from "./fetch.js";
let a="https://www.themealdb.com/api/json/v1/1/random.php"
getData(a).then((res)=>{
    appe(res)
})
async function getData(url){
    try{
        let a=await fetch(url);
        let b=await a.json();
        return b.meals;
    }catch(err){
        console.log(err)
    }
}

function appe(data){
    data.forEach((v)=>{
        let a=document.createElement("div");
        let name=document.createElement("h1");
        name.innerHTML=v.strMeal
        let img=document.createElement("img");
        img.src=v.strMealThumb
        let descp=document.createElement("p");
        descp.textContent=v.strInstructions
        a.append(name,img,descp)
        document.getElementById("container").append(a);
    })

}
function sear(data){
    data.forEach((v)=>{
        let a=document.createElement("div");
        let name=document.createElement("h1");
        name.innerHTML=v.strMeal
        let img=document.createElement("img");
        img.src=v.strMealThumb
        let descp=document.createElement("p");
        descp.textContent=v.strInstructions
        a.append(name,img,descp)
        document.getElementById("yelo").append(a);
    })
}
function ran(data){
    data.forEach((v)=>{
        let a=document.createElement("div");
        let name=document.createElement("h1");
        name.innerHTML=v.strMeal
        let img=document.createElement("img");
        img.src=v.strMealThumb
        let descp=document.createElement("p");
        descp.textContent=v.strInstructions
        a.append(name,img,descp)
        document.getElementById("rand").append(a);
    })
}
export {getData,appe,sear,ran};
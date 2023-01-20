let Add_div=document.querySelector(".Add_Data");
let Remove_div=document.querySelector(".Remove_Data");
let users = JSON.parse(localStorage.getItem("Admin_Data"));
let users_id=JSON.parse(localStorage.getItem("User_id"));
let email_id=users_id[users_id.length-1].email;

let name=users.filter((item)=>{
    return item.email==email_id;
})
// console.log(name)
let admin_name=document.querySelector("#User_Name");
admin_name.innerText=name[0].User_Name;
let Men=JSON.parse(localStorage.getItem("Men"))||[];
let Women=JSON.parse(localStorage.getItem("Women"))||[];
let Beauty=JSON.parse(localStorage.getItem("Beauty"))||[];
let Kids=JSON.parse(localStorage.getItem("Kids"))||[];
let Home=JSON.parse(localStorage.getItem("Home"))||[];

let Total_len=document.querySelector("#Total");
Total_len.innerText=(Men.length+Women.length+Beauty.length+Kids.length+Home.length);

let Men_len=document.querySelector("#Men");
Men_len.innerText=Men.length;

let Women_len=document.querySelector("#Women");
Women_len.innerText=Women.length;

let Beauty_len=document.querySelector("#Beauty");
Beauty_len.innerText=Beauty.length;

let Kid_len=document.querySelector("#Kid");
Kid_len.innerText=Kids.length;

let Home_len=document.querySelector("#Home");
Home_len.innerText=Home.length;





let add_btn=document.querySelector("#add");
let remove_btn=document.querySelector("#remove");
let form=document.querySelector("#Add_Data");
form.addEventListener("submit",(e)=>{
 e.preventDefault();
 let obj={
    title:form.Title.value,
    img:form.Link.value,
    realPrice:form.RPrice.value,
    offprice:form.OPrice.value,
    description:form.Description.value,
    Percantage:form.Percentage.value,
    category:form.Category.value,
    id:form.Id.value,
    Type:form.Select.value
}
    if(obj.Type=="Men")
    {
        Men.push(obj);
        localStorage.setItem("Men",JSON.stringify(Men))
        window.location.assign("./Admin_Data.html")
    }
    else if(obj.Type=="Women")
    {
        Women.push(obj);
        localStorage.setItem("Women",JSON.stringify(Women))
        window.location.assign("./Admin_Data.html")
    }
    else if(obj.Type=="Beauty")
    {
        Beauty.push(obj);
        localStorage.setItem("Beauty",JSON.stringify(Beauty))
        window.location.assign("./Admin_Data.html")
    }
    else if(obj.Type=="Kids")
    {
        Kids.push(obj)
        localStorage.setItem("Kids",JSON.stringify(Kids))
        window.location.assign("./Admin_Data.html")
    }
    else if(obj.Type=="Home")
    {
        Home.push(obj)
        localStorage.setItem("Home",JSON.stringify(Home))
        window.location.assign("./Admin_Data.html")
    }
})

let form1=document.querySelector("#Remove_Data");
form1.addEventListener("submit",(e)=>{
   e.preventDefault();
    let obj={
        Type:form1.Select1.value,
        Id:form1.Id1.value
    }
    if(obj.Type=="Men")
    {
        search_Data(Men,obj.Id,obj.Type)
    }
   else if(obj.Type=="Women")
    {
        search_Data(Women,obj.Id,obj.Type)
    }
    else if(obj.Type=="Beauty")
    {
        search_Data(Beauty,obj.Id,obj.Type)
    }
    else if(obj.Type=="Kids")
    {
        search_Data(Kids,obj.Id,obj.Type)
    }
    else if(obj.Type=="Home")
    {
        search_Data(Home,obj.Id,obj.Type)
    }

})

function search_Data(arr,Id,Name){
   
   arr.forEach((elem,index)=>{
    if(Id==elem.id)
    {
        Delete_Data(arr,index,Name)
    }
   })
}
function Delete_Data(arr,index,Name){
    arr.splice(index,1)
    localStorage.setItem(`${Name}`,JSON.stringify(arr))
    window.location.assign("./Admin_Data.html")
}
add_btn.addEventListener("click",()=>{
    Add_div.style.display="block"
    Remove_div.style.display="none"
})

remove_btn.addEventListener("click",()=>{
    Add_div.style.display="none"
    Remove_div.style.display="block"
}) 



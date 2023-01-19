let users = JSON.parse(localStorage.getItem("Admin_Data"));
let users_id=JSON.parse(localStorage.getItem("User_id"));
let email_id=users_id[users_id.length-1].email;

let name=users.filter((item)=>{
    return item.email==email_id;
})
// console.log(name)
let admin_name=document.querySelector("#User_Name");
admin_name.innerText=name[0].User_Name;
// let Men=JSON.parse(localStorage.getItem())||[];
// let Women=JSON.parse(localStorage.getItem())||[];
// let Beauty=JSON.parse(localStorage.getItem())||[];
// let Kids=JSON.parse(localStorage.getItem())||[];
// let Home=JSON.parse(localStorage.getItem())||[];

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

add_btn.addEventListener("click",()=>{
    console.log("shree")
})

remove_btn.addEventListener("click",()=>{
    console.log("shree")
}) 



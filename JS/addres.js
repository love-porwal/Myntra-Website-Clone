let btn = document.querySelector("#btn");
let form = document.querySelector("#form");
let Address = JSON.parse(localStorage.getItem("Data")) || [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    name: form.Name.value,
    mobile: form.mobile.value,
    Pin_Code: form.Pin.value,
    Address: form.Home.value,
    location: form.location.value,
    city: form.city.value,
    state: form.state.value,
    Make_Address: form.address1.value,
  };
  console.log(obj);
  Address.push(obj);
  localStorage.setItem("Data", JSON.stringify(Address));
  window.location.assign("../HTML/payment.html");
});

localcart = JSON.parse(localStorage.getItem("localcart")) || [];
let count = document.getElementById("count");
count.innerHTML=`${localcart.length} items`

let obj = JSON.parse(localStorage.getItem("total_price")) || {};
let Total_Mrp = document.querySelector("#Total_Mrp");
Total_Mrp.innerHTML = "Rs." + obj.totalprice;
let Discount = document.querySelector("#Discount");
Discount.innerText = "Rs." + obj.Discount;
let Total_Amount = document.querySelector("#Total_Amount");
Total_Amount.innerText = "Rs." + obj.totalamount;

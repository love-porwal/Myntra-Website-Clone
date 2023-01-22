let btn = document.querySelector("#btn");
let form = document.querySelector("#form")
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
        Make_Address: form.address1.value
    }
    console.log(obj)
    Address.push(obj)
    localStorage.setItem("Data", JSON.stringify(Address));
    window.location.assign("../HTML/payment.html")
})

let item = Total[Total.length - 1];
let Total_Mrp = document.querySelector("#Total_Mrp");
Total_Mrp.innerText = "Rs." + item.totalprice;
let Discount = document.querySelector("#Discount");
Discount.innerText = "Rs." + item.Discount;
let Total_Amount = document.querySelector("#Total_Amount");
Total_Amount.innerText = "Rs." + item.totalamount;
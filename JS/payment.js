const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", () => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
// COD--->
var inp = document.querySelector(".item-1-input");
var pass = JSON.parse(localStorage.getItem("id-details"));
console.log(inp.value);
var form = document
  .querySelector(".btn-item-1")
  .addEventListener("click", (e) => {
    if (inp.value == pass.password) {
      alert("Redirecting to Thankyou Page!");
      redirect_Page();
      function redirect_Page() {
        let tID = setTimeout(function () {
          window.location.href = "./thankyou.html";
          window.clearTimeout(tID);
        }, 2000);
      }
    } else {
      alert("Please Enter your right Password");
      inp.value = "";
    }
  });
// Credit/Debit ------->
var cardNumber = document.querySelector("#item-1");
var nameCard = document.querySelector("#item-2");
var validity = document.querySelector("#item-3");
var cvv = document.querySelector("#item-4");
var save_checkbox = document.querySelector("#item-5");
var btn = document.querySelector(".btn-1");
save_checkbox.addEventListener(
  "change",
  (event) => {
    if (event.target.checked) {
      alert("Card Details saved to Database");
    }
  },
  false
);
btn.addEventListener("click", () => {
  if (
    cardNumber.value.length == 0 ||
    nameCard.value.length == 0 ||
    validity.value.length == 0 ||
    cvv.value.length == 0
  ) {
    alert("Please Fill all Feilds!");
  } else {
    alert("Redirecting to Thankyou Page!");
    redirect_Page();
    function redirect_Page() {
      let tID = setTimeout(function () {
        window.location.href = "./thankyou.html";
        window.clearTimeout(tID);
      }, 2000);
    }
  }
});
cardNumber.addEventListener("keyup", (e) => {
  if (cardNumber.value.length > 12) {
    alert("Fill Your Appropriate Card Number!");
    cardNumber.value = "";
  }
});
var arr = [];
validity.addEventListener("keyup", () => {
  if (validity.value.length > 4) {
    alert("Fill Your Appropriate Validity Date");
    validity.value = "";
  }
});
cvv.addEventListener("keyup", () => {
  if (cvv.value.length > 3) {
    alert("Fill Your Appropriate CVV");
    cvv.value = "";
  }
});

document.getElementById("showMoreOffer").addEventListener("click", () => {
  showMore();
});

function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("showMoreOffer");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}
var price = JSON.parse(localStorage.getItem("cart"));
let Price_after_discount = JSON.parse(localStorage.getItem("total"));
console.log(Price_after_discount);
var changedPrice = document.querySelector(".price-details");
let total = 0;
changedPrice.innerHTML = `
<h3>PRICE DETAILS (${length()})</h3>
<div class="price-1">
  <p>Total MRP to be Paid</p>
  <span>&#8377;${Price_after_discount}</span>
</div>
<div class="price-2">
  <p>Discount on MRP</p>
  <span>&#8377;-${discount(Price_after_discount)}.00</span>
</div>
<div class="price-2">
  <p>Convenience Fee</p>
  <span class="knowmore">Know More</span>
  <span>FREE</span>
</div>`;
// totalMrp();
function totalMrp() {
  for (var i = 0; i < price.length; i++) {
    total += price[i].off_price;
  }
  return total;
}
function discount(p) {
  var price_before_discount = totalMrp() - p;
  return price_before_discount;
}
function length() {
  if (price.length == 1) {
    return price.length + " " + "Item";
  } else {
    return price.length + " " + "Items";
  }
}

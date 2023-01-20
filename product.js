// CHECK();
// function CHECK() {
//   fetch("dummy.json")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let arr = [];
//       for (let i = 0; i < 8; i++) {
//         arr.push(data.Mens[i]);
//       }
//       localStorage.setItem("localproduct", JSON.stringify(arr));
//     });
// }
let container=document.getElementById("container")
let cartcount = document.getElementById("cart-count-info");
let img = document.getElementById("img");
let content = document.getElementById("content");
let Amout = document.getElementById("Amout");
function render() {
  let localproduct = JSON.parse(localStorage.getItem("localproduct"));
  if (localproduct == null) {
    localproduct = [];
  }
  let last = [];
  if (localproduct.length != 0) {
    last.push(localproduct[localproduct.length - 1]);
  }
  last.forEach((element) => {
    let image = document.createElement("img");
    image.src = element.img;
    let title = document.createElement("strong");
    title.innerHTML = element.title;
    let description = document.createElement("div");
    description.setAttribute("class", "gray");
    let star = document.createElement("div");
    star.setAttribute("class", "star");
    let span = document.createElement("span");
    let review = document.createElement("span");
    review.innerHTML = "4.1";
    let rating = document.createElement("span");
    rating.innerHTML = "5k Ratings";
    rating.setAttribute("class", "review");
    let hr = document.createElement("hr");
    let combinethree = document.createElement("div");
    combinethree.classList.add("productthree");
    let realPrice = document.createElement("strong");
    realPrice.innerHTML = `₹${element.realPrice}`;
    let offprice = document.createElement("span");
    offprice.innerHTML = `MRP${element.offprice}`;
    offprice.classList.add("offprice");
    let Percantage = document.createElement("span");
    Percantage.classList.add("Percantage");
    if (element.Percantage.includes("OFF")) {
      Percantage.innerHTML = `(${element.Percantage})`;
    } else {
      Percantage.innerHTML = `(${element.Percantage}OFF)`;
    }
    span.setAttribute("class", "fa-solid fa-star");
    let tax = document.createElement("div");
    tax.innerHTML = "inclusive of all taxes";
    tax.setAttribute("class", "tax");
    let more = document.createElement("div");
    more.innerHTML = "MORE COLOR";
    let smallimg = document.createElement("img");
    smallimg.src = element.img;
    let divadd = document.createElement("div");
    divadd.setAttribute("class", "divadd");
    let mainadd = document.createElement("div");
    let add = document.createElement("span");
    add.innerHTML = "ADD TO BAG";
    let shop = document.createElement("span");
    shop.setAttribute("class", "fa-solid fa-bag-shopping");
    mainadd.setAttribute("id", "mainadd");
    let mainheart = document.createElement("div");
    mainheart.setAttribute("id", "mainheart");
    let wish = document.createElement("span");
    wish.setAttribute("class", "fa-solid fa-heart");
    let hart = document.createElement("span");
    hart.innerHTML = "WISHLIST";
    hart.setAttribute("class","hart")
    mainheart.append(wish, hart);
    mainadd.append(shop, add);
    divadd.append(mainadd, mainheart);
    Amout.innerHTML = `Rs. ${element.realPrice - 130}`;
    combinethree.append(realPrice, offprice, Percantage);
    star.append(review, span, rating);
    content.append(
      title,
      description,
      star,
      hr,
      combinethree,
      tax,
      more,
      smallimg,
      divadd
    );
    description.innerHTML = element.description;
    img.append(image);
    mainheart.addEventListener("click",()=>{
      let data = JSON.parse(localStorage.getItem("wishlist"));
      if (data == null) {
        data = [];
      }
      data.push(element)
      localStorage.setItem("wishlist",JSON.stringify(data))
      item.innerHTML = "item Succesfully added to Wishlist";
      imgpop.src = element.img;
      remove.setAttribute("id", "pop");
      setTimeout(() => {
        remove.setAttribute("id", "remove");
      }, 2000);
    })


    add.addEventListener("click", () => {
      localcart = JSON.parse(localStorage.getItem("localcart"));
      if (localcart == null) {
        localcart = [];
      }
      localcart.push(element);
      cartcount.innerHTML = localcart.length;
      localStorage.setItem("localcart", JSON.stringify(localcart));
      item.innerHTML = "item Succesfully added to bag";
      imgpop.src = element.img;
      remove.setAttribute("id", "pop");
      setTimeout(() => {
        remove.setAttribute("id", "remove");
      }, 2000);
    });
  });
}

let item = document.getElementById("item");
let remove = document.getElementById("remove");
let removewishlist=document.getElementById("removewishlist")
let btn = document.getElementById("btn");
let pincode = document.getElementById("pincode");
let hidden = document.getElementById("hidden");
btn.addEventListener("click", () => {
  console.log(pincode.value.length);
  if (pincode.value.length == 6) {
    removewishlist.setAttribute("id", "show");
    hidden.setAttribute("id", "correct");
  } else {
    hidden.innerHTML = "Please Enter Valid Pin";
  }

});

// datasection
window.addEventListener("load", () => {
  cartcountshow();
  render()
});

function cartcountshow() {
  fetch("dummy.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let arr = data.Mens.filter((element) => {
        if (element.category == "Casual Shirts") {
          return element;
        }
      });
      wishlistrender(arr);
    });
}
let wishlistcontainer = document.getElementById("wishlistcontainer");
function wishlistrender(data) {
  wishlistcontainer.innerHTML = null;
  data.forEach((element, index) => {
    let cart = document.createElement("div");
    cart.classList.add("card");
    let img = document.createElement("img");
    img.src = element.img;
    let description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = `${element.description.substring(0, 25)}...`;
    let combinethree = document.createElement("div");
    combinethree.classList.add("three");
    let realPrice = document.createElement("strong");
    realPrice.innerHTML = `Rs.${element.realPrice}`;
    let offprice = document.createElement("span");
    offprice.innerHTML = `Rs${element.offprice}`;
    offprice.classList.add("offprice");
    let Percantage = document.createElement("span");
    Percantage.classList.add("Percantage");
    if (element.Percantage.includes("OFF")) {
      Percantage.innerHTML = `(${element.Percantage})`;
    } else {
      Percantage.innerHTML = `(${element.Percantage}OFF)`;
    }

    let bag = document.createElement("div");
    bag.classList.add("btn");
    bag.innerHTML = "MOVE TO BAG";
    combinethree.append(realPrice, offprice, Percantage);
    cart.append(img, description, combinethree, bag);
    wishlistcontainer.append(cart);
    localcart = JSON.parse(localStorage.getItem("localcart"));
    if (localcart == null) {
      localcart = [];
    }
    cartcount.innerHTML = localcart.length;
    bag.addEventListener("click", () => {
      localcart = JSON.parse(localStorage.getItem("localcart"));
      if (localcart == null) {
        localcart = [];
      }
      localcart.push(element);
      localStorage.setItem("localcart", JSON.stringify(localcart));
      item.innerHTML = "item Succesfully added to bag";
      imgpop.src = element.img;
      remove.setAttribute("id", "pop");
      setTimeout(() => {
        remove.setAttribute("id", "remove");
      }, 2000);
      cartcountshow();
    });
  });
}

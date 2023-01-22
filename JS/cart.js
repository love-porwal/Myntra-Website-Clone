let mainsection = document.getElementById("mainsection");
window.addEventListener("load", () => {
  render();
  cartcountshow();
});

let item = document.getElementById("specialitem");
let imgpop = document.getElementById("imgpop");
let remove = document.getElementById("remove");
let count = document.getElementById("count");
let total = document.getElementById("total");
let mrp = document.getElementById("mrp");
let Discount = document.getElementById("Discount");
function render() {
  let disc = 0;
  let sum = 0;
  mainsection.innerHTML = null;
  total.innerHTML = `₹${sum}`;
  mrp.innerHTML = `₹${sum}`;
  Discount.innerHTML = `-₹${disc}`;
  let data = JSON.parse(localStorage.getItem("localcart")) || [];
  count.innerHTML = data.length;
  data.forEach((element, index) => {
    disc += element.quantity * element.offprice;
    sum += element.quantity * element.realPrice;
    total.innerHTML = `₹${sum - 99}`;
    mrp.innerHTML = `₹${sum}`;
    Discount.innerHTML = `-₹${disc}`;
    let cart = document.createElement("div");
    cart.classList.add("card");
    let title = document.createElement("div");
    title.innerHTML = element.title;
    title.setAttribute("class", "title");
    title.classList.add("padding");
    let sold = document.createElement("div");
    sold.innerHTML = "Sold by: India Mart";
    sold.classList.add("padding");
    let imgdiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = element.img;
    imgdiv.append(img);
    let select = document.createElement("select");
    let option = document.createElement("option");
    option.innerHTML = `Qty: ${element.quantity}`;
    let two = document.createElement("option");
    two.innerHTML = `Qty: 2`;
    two.setAttribute("value", "2");
    let three = document.createElement("option");
    three.setAttribute("value", "3");
    three.innerHTML = `Qty: 3`;
    let four = document.createElement("option");
    four.innerHTML = `Qty: 4`;
    four.setAttribute("value", "4");
    let five = document.createElement("option");
    five.innerHTML = `Qty: 5`;
    five.setAttribute("value", "5");
    let six = document.createElement("option");
    six.innerHTML = `Qty: 6`;
    six.setAttribute("value", "6");
    select.append(option, two, three, four, five, six);
    let divlogo = document.createElement("div");
    let logo = document.createElement("i");
    let thirty = document.createElement("span");
    thirty.innerHTML = "30 Days return available";
    thirty.classList.add("padding");
    logo.setAttribute("class", "fa-solid fa-arrow-rotate-left");
    let fast = document.createElement("i");
    fast.setAttribute("class", "fa-regular fa-truck-fast");
    divlogo.append(logo, thirty);
    let span = document.createElement("span");
    span.innerHTML = "Express Delivery by Tomorrow";
    let description = document.createElement("div");
    description.classList.add("description");
    divlogo.classList.add("padding");
    description.classList.add("padding");
    description.innerHTML = `${element.description.substring(0, 35)}...`;
    let realPrice = document.createElement("div");
    realPrice.classList.add("padding");
    realPrice.innerHTML = `Rs.${element.realPrice}`;
    let cross = document.createElement("span");
    cross.innerHTML = "&times";
    cross.setAttribute("class", "cross");
    let rest = document.createElement("div");
    rest.append(
      title,
      description,
      sold,
      select,
      realPrice,
      divlogo,
      fast,
      span,
      cross
    );
    rest.classList.add("rest");
    cart.append(imgdiv, rest);
    mainsection.append(cart);
    cross.addEventListener("click", () => {
      data.splice(index, 1);
      localStorage.setItem("localcart", JSON.stringify(data));
      imgpop.src = element.img;
      item.innerHTML = "Item Removed From Cart";
      remove.setAttribute("id", "pop");
      setTimeout(() => {
        remove.setAttribute("id", "remove");
      }, 2000);
      render();
    });
    select.addEventListener("change", () => {
      let obj = { ...element };
      obj.quantity = select.value;
      data.splice(index, 1);
      data.splice(index, 0, obj);
      localStorage.setItem("localcart", JSON.stringify(data));
      render();
    });
  });
}

let More = document.getElementById("More");
let less = document.getElementById("less");
let pararemove = document.getElementById("pararemove");
More.addEventListener("click", () => {
  pararemove.setAttribute("id", "parashow");
  More.setAttribute("id", "morehide");
  less.setAttribute("id", "lessshow");
});
less.addEventListener("click", () => {
  pararemove.setAttribute("id", "pararemove");
  More.setAttribute("id", "More");
  less.setAttribute("id", "less");
});

// wishlistcontainer

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
      console.log(arr)
      wishlistrender(arr);
    });
}

let wishlistcontainer = document.getElementById("wishlistcontainer");
function wishlistrender(data) {
  wishlistcontainer.innerHTML = null;
  data.forEach((element, index) => {
    let cart = document.createElement("div");
    cart.classList.add("cartcard");
    let img = document.createElement("img");
    img.src = element.img;
    let description = document.createElement("div");
    description.classList.add("cartdescription");
    description.innerHTML = `${element.description.substring(0, 25)}...`;
    let combinethree = document.createElement("div");
    combinethree.classList.add("cartthree");
    let realPrice = document.createElement("strong");
    realPrice.innerHTML = `Rs.${element.realPrice}`;
    let offprice = document.createElement("span");
    offprice.innerHTML = `Rs${element.offprice}`;
    offprice.classList.add("cartoffprice");
    let Percantage = document.createElement("span");
    Percantage.classList.add("cartPercantage");
    Percantage.innerHTML = `(${element.Percantage}%OFF)`;
    let bag = document.createElement("div");
    bag.classList.add("cartbtn");
    bag.innerHTML = "MOVE TO BAG";
    combinethree.append(realPrice, offprice, Percantage);
    cart.append(img, description, combinethree, bag);
    wishlistcontainer.append(cart);
    localcart = JSON.parse(localStorage.getItem("localcart"));
    if (localcart == null) {
      localcart = [];
    }
    bag.addEventListener("click", () => {
      let obj = { ...element, quantity: 1 };
      localcart = JSON.parse(localStorage.getItem("localcart"));
      if (localcart == null) {
        localcart = [];
      }
      localcart.push(obj);
      localStorage.setItem("localcart", JSON.stringify(localcart));
      item.innerHTML = "item Succesfully added to bag";
      imgpop.src = element.img;
      remove.setAttribute("id", "pop");
      setTimeout(() => {
        remove.setAttribute("id", "remove");
      }, 2000);
      cartcountshow();
      render();
    });
  });
}
let place_order = document.getElementById("place-order");
place_order.addEventListener("click", () => {
  let obj = {
    totalprice: mrp.innerHTML.substring(1),
    Discount: Discount.innerHTML.substring(2),
    totalamount: total.innerHTML.substring(1),
  };
  let data = JSON.parse(localStorage.getItem("total_price"))||{}

  localStorage.setItem("total_price", JSON.stringify(obj));
});


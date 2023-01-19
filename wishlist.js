let lighter = document.getElementById("lighter");
let wishlistcontainer = document.getElementById("wishlistcontainer");
window.addEventListener("load", () => {
  render();
});

// CHECK()
// function CHECK() {
//     fetch('dummy.json').then((res)=>{
//         return res.json()
//     }).then((data)=>{
//        console.log(data);
//     })
// }
let cartcount = document.getElementById("cart-count-info");
let imgpop = document.getElementById("imgpop");
let item = document.getElementById("item");
let remove = document.getElementById("remove");
function render() {
  let count = 0;
  let data = JSON.parse(localStorage.getItem("wishlist"));
  if (data == null) {
    data = [];
  }
  wishlistcontainer.innerHTML = null;
  data.forEach((element, index) => {
    count++;
    lighter.innerHTML = `${count} items`;
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
    let cross = document.createElement("span");
    cross.innerHTML = "&times";
    cross.setAttribute("class", "cross");
    let bag = document.createElement("div");
    bag.classList.add("btn");
    bag.innerHTML = "MOVE TO BAG";
    combinethree.append(realPrice, offprice, Percantage);
    cart.append(img, description, combinethree, bag, cross);
    wishlistcontainer.append(cart);
    localcart = JSON.parse(localStorage.getItem("localcart"));
    if (localcart == null) {
      localcart = [];
    }
    cartcount.innerHTML=localcart.length
    cross.addEventListener("click", () => {
      data.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(data));
      imgpop.src = element.img;
      item.innerHTML = "item removed from wishlist";
      remove.setAttribute("id", "pop");
      setTimeout(() => {
        remove.setAttribute("id", "remove");
      }, 2000);
      render();
    });
    bag.addEventListener("click", () => {
      localcart = JSON.parse(localStorage.getItem("localcart"));
      if (localcart == null) {
        localcart = [];
      }
      localcart.push(element);
      localStorage.setItem("localcart", JSON.stringify(localcart));
      data.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(data));
      item.innerHTML = "item Succesfully added to bag";
      imgpop.src = element.img;
      remove.setAttribute("id", "pop");
      setTimeout(() => {
        remove.setAttribute("id", "remove");
      }, 2000);
      render();
    });
  });
}

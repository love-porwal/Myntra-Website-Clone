let cartcount = document.getElementById("cart-count-info");
localcart = JSON.parse(localStorage.getItem("localcart"));
      if (localcart == null) {
        localcart = [];
      }
      cartcount.innerHTML = localcart.length;


fetch("dummy.json").then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data.Mens)
    localStorage.setItem("mens", JSON.stringify(data.Mens))
    // window.location.reload()
})
.catch((err)=>{
    console.log(err)
})

let mens_data=JSON.parse(localStorage.getItem("mens"))||[]
let productGridItems = document.getElementById("productGridItems");


const displayProducts = (data) => {
  productGridItems.innerHTML = "";
  console.log(data);
  data.forEach(function (product) {

    let outer_div = document.createElement("div");
    let div = document.createElement("div");
    let image_div = document.createElement("div");
    image_div.className = "img_div";

    outer_div.setAttribute("id", "products");

    let img = document.createElement("img");
    img.src = product.img;
 

    div.innerHTML = `<a>
    <div>
      <div class="brandname">${product.title} <span></span></div>
      <div class="title">${product.category}</div>
      <div class="price"> Rs. ${product.realPrice} <span class="line-through">Rs. ${product.offprice}</span> <span class="discount">(${product.Percantage}% OFF)</span>
      </div>
    </div></a>`;

  
    let wishListDiv = document.createElement ('div');
    wishListDiv.setAttribute('id','wishListDiv')
    let wishListBtn = document.createElement ('button');
    wishListBtn.setAttribute('id','wishListBtn');
    let wishicon = document.createElement ('span');
    wishicon.className = 'material-icons';
    wishicon.innerHTML = 'favorite_border';
    let wishname = document.createElement ('span');
    wishname.innerHTML = 'WISHLIST';
    wishListBtn.append (wishicon, wishname);
    wishListDiv.append(wishListBtn)


    outer_div.onmousemove = function () {
      wishListDiv.style.visibility = 'visible';
      // wishListBtn.innerHTML=`<button id="wishListBtn"><span class='material-icons'>favorite_border</span>WISH LIST</button>`
    };

     outer_div.onmouseout = function () {
      wishListDiv.style.visibility = 'hidden';
    };

  

    wishListBtn.onclick = function () {
      wishListBtn.style.backgroundColor = "#535766";
      wishListBtn.style.color = "white"
      wishname.innerHTML = 'WISHLISTED';
      addToWishList(product);
    };

//==========================================================================================================
    image_div.append (img, wishListDiv);

    outer_div.append(image_div, div);
    let  x=JSON.parse(localStorage.getItem("PoductDetalisData"))||[]
    x.push(product)
    
    img.addEventListener("click", () => {
      localStorage.setItem("PoductDetalisData", JSON.stringify(x));
      window.location.href = "../HTML/product.html";
    });

    div.addEventListener("click", () => {
      localStorage.setItem("PoductDetalisData", JSON.stringify(x));
      window.location.href = "../HTML/product.html";
    });

    productGridItems.append(outer_div);
    let WishListData = localStorage.getItem("wishlist");
if (WishListData === null) {
  localStorage.setItem("wishlist", JSON.stringify([]));
}


const addToWishList = (product) => {
  WishListData = JSON.parse(localStorage.getItem("wishlist"));
  console.log(WishListData);
  let checkIfProductExit = WishListData.find((Item) => Item.id === product.id);

  if (!checkIfProductExit) {
    WishListData.push(product);
    localStorage.setItem("wishlist", JSON.stringify(WishListData));
  }
};
  });
};

displayProducts(mens_data)









/////////////////////////
let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("change", sortProducts);

function sortProducts() {
  let sortCriteria = sortButton.value;
  let mens_data = JSON.parse(localStorage.getItem("mens"))||[];

  let updatedProductList = mens_data.sort((prodA, prodB) => {
    if (sortCriteria === "asc") {
      return prodA.realPrice - prodB.realPrice;
    } else if (sortCriteria === "desc") {
      return prodB.realPrice - prodA.realPrice;
    } else if (sortCriteria === "whatsNew") {
      return prodB.id - prodA.id;
    }else if (sortCriteria === "Discount") {
      return prodB.discount - prodA.discount;;
    } else {
      return true;
    }
  });
  displayProducts(updatedProductList);
}





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // filter Product By Brand

  let FilterBrand = document.getElementById("filterButtonBrand");

  FilterBrand.addEventListener("click", (event) => {
      let productList = JSON.parse(localStorage.getItem("mens"));
      let filter = event.target.checked;
      let sortCriteria = sortButton.value;
      let filterCriteria = event.target.value;
      if (filter) {
        let updatedProductList = productList.filter((prod) => {
          if (filterCriteria === "Roadster") {
            return prod.title == "Roadster";
          } else if (filterCriteria === "WROGN") {
            return prod.title == "WROGN";
          } else if (filterCriteria === "HRX by Hrithik Roshan") {
            return prod.title == "HRX by Hrithik Roshan";
          } else if (filterCriteria === "Louis Philippe Sport") {
            return prod.title == "Louis Philippe Sport";
          } else if (filterCriteria === "Puma") {
            return prod.title == "Puma";
          } else {
            return true;
          }
        }).sort((prodA, prodB) => {
          if (sortCriteria === "asc") {
            return prodA.realPrice - prodB.realPrice;
          } else if (sortCriteria === "desc") {
            return prodB.realPrice - prodA.realPrice;
          } else if (sortCriteria === "whatsNew") {
            return prodB.id - prodA.id;
          }  else if (sortCriteria === "discount") {
            return prodB.Percantage - prodA.Percantage;
          } else {
            return true;
          }
        });
        displayProducts(updatedProductList);
      }
      else{
        displayProducts(JSON.parse(localStorage.getItem("mens")))
      }
    });
//=============================================================================
//filter by price 
  // let FilterPrice = document.getElementById("filterButtonPrice");
  
  // FilterPrice.addEventListener("click", (event) => {
  //   let men_data = JSON.parse(localStorage.getItem("mens"));
  //   let filter = event.target.checked;
  //   let sortCriteria = sortButton.value;
  //   let filterCriteria = event.target.value;
  
  //   if (filter) {  
  //     let updatedProductList = men_data.filter((prod) => {
  //       if (filterCriteria === "Roadster") {
  //         return prod.title == "Roadster";
  //       } else if (filterCriteria === "WROGN") {
  //         return prod.title == "WROGN";
  //       } else if (filterCriteria === "HRX by Hrithik Roshan") {
  //         return prod.title == "HRX by Hrithik Roshan";
  //       } else if (filterCriteria === "Louis Philippe Sport") {
  //         return prod.title == "Louis Philippe Sport";
  //       } else if (filterCriteria === "Puma") {
  //         return prod.title == "Puma";
  //       } else {
  //         return true;
  //       }
  //     }).sort((prodA, prodB) => {
  //       if (sortCriteria === "asc") {
  //         return prodA.realPrice - prodB.realPrice ;
  //       } else if (sortCriteria === "desc") {
  //         return prodB.realPrice  - prodA.realPrice ;
  //       } else if (sortCriteria === "whatsNew") {
  //         return prodB.id - prodA.id;
  //       }  else if (sortCriteria === "Discount") {
  //         return prodB.Percantage - prodA.Percantage;
  //       } else {
  //         return true;
  //       }
  //     });
  //     displayProducts(updatedProductList);
  //   }
  // });



  //
  let FilterPrice = document.getElementById("filterButtonPrice");

FilterPrice.addEventListener("click", (event) => {
  let prodList = JSON.parse(localStorage.getItem("mens"));
  let filter = event.target.checked;

  if (filter) {
    let filterCriteria = event.target.value;

    let updatedProductList = prodList.filter((prod) => {
      if (filterCriteria === "174-1881") {
        return prod.realPrice >= 174 && prod.realPrice <= 1881;
      } else if (filterCriteria === "1881-3588") {
        return prod.realPrice > 1881 && prod.realPrice <= 3588;
      } else if (filterCriteria === "3588-5295") {
        return prod.realPrice > 3588 && prod.realPrice <= 5299;
      } else if (filterCriteria === "5295-7002") {
        return prod.realPrice > 5295 && prod.realPrice <= 7002;
      } else {
        return true;
      }
    });
    displayProducts(updatedProductList);
  }
});


////// filter by discount
let Filterdiscount = document.getElementById("filterButtonDiscount");

Filterdiscount.addEventListener("click", (event) => {
  let prodList = JSON.parse(localStorage.getItem("mens"));
  let filter = event.target.checked;

  if (filter) {
    let filterCriteria = event.target.value;

    let updatedProductList = prodList.filter((prod) => {
      if (filterCriteria === "10") {
        return prod.Percantage >= 10 ;
      } else if (filterCriteria === "20") {
        return prod.Percantage >= 20 ;
      } else if (filterCriteria === "30") {
        return prod.Percantage > 30 ;
      } else if (filterCriteria === "40") {
        return prod.Percantage > 40;
      } else if (filterCriteria === "50") {
        return prod.Percantage >= 50 ;
      } else if (filterCriteria === "60") {
        return prod.Percantage > 60 ;
      } else if (filterCriteria === "70") {
        return prod.Percantage > 70;
      } else if (filterCriteria === "80") {
        return prod.Percantage > 80 ;
      } else if (filterCriteria === "90") {
        return prod.Percantage > 90;
      } else {
        return true;
      }
    });
    displayProducts(updatedProductList);
  }
});
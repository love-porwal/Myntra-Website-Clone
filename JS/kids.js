fetch('dummy.json').then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data.Mens)
    localStorage.setItem("kid", JSON.stringify(data.kids))
})
.catch((err)=>{
    console.log(err)
})

let kid_data=JSON.parse(localStorage.getItem("kid"))||[]
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
  });
};

displayProducts(kid_data)

let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("change", sortProducts);

function sortProducts() {
  let sortCriteria = sortButton.value;
  let kid_data = JSON.parse(localStorage.getItem("kid"))||[];

  let updatedProductList = kid_data.sort((prodA, prodB) => {
    if (sortCriteria === "asc") {
      return prodA.realPrice - prodB.realPrice;
    } else if (sortCriteria === "desc") {
      return prodB.realPrice - prodA.realPrice;
    } else if (sortCriteria === "whatsNew") {
      return prodB.id - prodA.id;
    }else if (sortCriteria === "Discount") {
      return prodB.discount - prodA.discount;;
    } else {
      return  true;
    }
  });
  displayProducts(updatedProductList);
}





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // filter Product By Brand

  let FilterBrand = document.getElementById("filterButtonBrand");

  FilterBrand.addEventListener("click", (event) => {
      let productList = JSON.parse(localStorage.getItem("kid"));
      let filter = event.target.checked;
      let sortCriteria = sortButton.value;
      let filterCriteria = event.target.value;
      if (filter) {
        let updatedProductList = productList.filter((prod) => {
          if (filterCriteria === "Crocs") {
            return prod.title == "Crocs";
          } else if (filterCriteria === "H&M") {
            return prod.title == "H&M";
          } else if (filterCriteria === "HELLCAT") {
            return prod.title == "HELLCAT";
          } else if (filterCriteria === "max") {
            return prod.title == "max";
          } else if (filterCriteria === "YK") {
            return prod.title == "YK";
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
        displayProducts(JSON.parse(localStorage.getItem("kid")))
      }
    });
//=============================================================================
let Filterdiscount = document.getElementById("filterButtonDiscount");

Filterdiscount.addEventListener("click", (event) => {
  let prodList = JSON.parse(localStorage.getItem("kid"));
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



  //
  let FilterPrice = document.getElementById("filterButtonPrice");

FilterPrice.addEventListener("click", (event) => {
  let prodList = JSON.parse(localStorage.getItem("kid"));
  let filter = event.target.checked;

  if (filter) {
    let filterCriteria = event.target.value;

    let updatedProductList = prodList.filter((prod) => {
      if (filterCriteria === "249-4687") {
        return prod.realPrice >= 249 && prod.realPrice <= 4687;
      } else if (filterCriteria === "4687-7588") {
        return prod.realPrice > 4687 && prod.realPrice <= 7588;
      } else if (filterCriteria === "7588-10295") {
        return prod.realPrice > 7588 && prod.realPrice <= 10295;
      } else if (filterCriteria === "10295-27002") {
        return prod.realPrice > 10295 && prod.realPrice <= 27002;
      } else {
        return true;
      }
    });
    displayProducts(updatedProductList);
  }
});
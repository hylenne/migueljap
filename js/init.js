const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function logOut() {
  localStorage.removeItem("uemail")
  localStorage.removeItem("upass")
  window.location = "login.html"
}

function setProdID(id){
  localStorage.setItem ("prodID", id)
  window.location = "product-info.html"
}

if(localStorage.getItem("uemail") == null) {
  location = "login.html"
} else {
  document.getElementsByClassName("nav-item")[3].innerHTML = `
      <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="userDrop" data-bs-toggle="dropdown" aria-expanded="false">
              ${localStorage.uemail}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
              <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
              <li><a class="dropdown-item" href="#" onclick="logOut()">Cerrar sesión</a></li>
            </ul>
          </div>
    `
  }

let result = document.getElementById("results")
let searchBtn = document.getElementById("search-btn")
let url ="https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
let userInp = document.getElementById("user-inp").value;
if (userInp.length ==0) {
    result.innerHTML =`<h3 class="msg">The input field cannotbe empty</h3>`;
}

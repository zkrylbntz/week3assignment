console.log("testline1");

let cookieCount = 0;
let cookiesPerSecond = 0;
// let addCookiesPerSecond = 0;

const mainClicker = document.getElementById("main-button");
const resetButton = document.getElementById("reset-button");
const countCookies = document.getElementById("count");
const increaseCPS = document.getElementById("per-second");
const shopContainer = document.getElementById("shop-container");
const idContainer = document.getElementById("id-container");
const nameContainer = document.getElementById("name-container");
const costContainer = document.getElementById("cost-container");
const increaseContainer = document.getElementById("increase-container");
const upgrade1 = document.getElementById("1");

let shopUpgrades = [];

async function getShopUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

getShopUpgrades();

async function displayUpgrades() {
  const postsUpgrades = await getShopUpgrades();
  postsUpgrades.forEach(function (post) {
    document.createElement("p");
    let id = document.createElement("p");
    let name = document.createElement("p");
    let cost = document.createElement("p");
    let increase = document.createElement("p");
    id.className = "class-id";
    name.className = "class-name";
    cost.className = "class-cost";
    increase.className = "class-increase";
    id.textContent = post.id;
    name.textContent = post.name;
    cost.textContent = post.cost;
    increase.textContent = post.increase;
    idContainer.appendChild(id);
    nameContainer.appendChild(name);
    costContainer.appendChild(cost);
    increaseContainer.appendChild(increase);
  });
}

displayUpgrades();

mainClicker.addEventListener("click", handleCookieClick);

function handleCookieClick() {
  cookieCount = cookieCount + 1;
  countCookies.textContent = `Cookie count :- ${cookieCount}`;
  cookiesPerSecond = 1;
  increaseCPS.textContent = `Cookies per second :- ${cookiesPerSecond}`;

  setInterval(function (addCookiesPerSecond) {
    cookiesPerSecond = cookiesPerSecond + 1;
    countCookies.textContent = `Cookie count :- ${cookiesPerSecond}`;
  }, 1000);
}

// setInterval(function (addCookiesPerSecond) {
//   cookiesPerSecond = cookiesPerSecond + 1;
//   countCookies.textContent = `Cookie count :- ${cookiesPerSecond}`;
// }, 1000);

resetButton.addEventListener("click", handleResetClick);

function handleResetClick() {
  cookieCount = 0;
  cookiesPerSecond = 0;
  countCookies.textContent = `Cookie count :- ${cookieCount}`;
  increaseCPS.textContent = `Cookies per second :- ${cookieCount}`;
  // stopInterval(addCookiesPerSecond);
}

//cookie button adds amount of cookies in cookies persecond
//cookies = 0 + 1 etc
//as well as adding that amount per second
//cps= 0 , 1, 2, 3, 4 etc
//upgrades need to update cps and cookies, but be a running total
//upgrade 5 - 10, 15, 20 ,25
// or adding on to whatever the number thats added
//also take away that amount from cookies first, before adding on to click

upgrade1.addEventListener("click", upgrade1Click);

function upgrade1Click() {
  cookieCount - 5;
  cookiesPerSecond + 5;
}

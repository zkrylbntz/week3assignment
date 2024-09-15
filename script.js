console.log("testline1");

let cookieCount = 0;
let cookiesPerSecond = 0;
let addCookiesPerSecond = 0;

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

resetButton.addEventListener("click", handleResetClick);

function handleResetClick() {
  cookieCount = 0;
  cookiesPerSecond = 0;
  countCookies.textContent = `Cookie count :- ${cookieCount}`;
  increaseCPS.textContent = `Cookies per second :- ${cookieCount}`;
}

upgrade1.addEventListener("click", upgrade1Click);

function upgrade1Click() {
  cookieCount - 100;
  cookiesPerSecond + 5;
}

//Click button - adds 1 cookie, and starts off Cookies per second.
//Every click adds to the cookie count, which then adds ontop of Cookies per second.
//Every item from the bakery firstly takes away cost from overall Cookie count, but then adds to the Cookies per second, then adding to the Cookie count.
//All the while updating the current Cookie count and Cookies per second.

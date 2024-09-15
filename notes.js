console.log("testline1");

//we need to store two global values: cookie count and cookies per second

//variable
let cookieCount = 0;
let cookiesPerSecond = 0;

// //object
// // if you choose the stats object, you don't need the global variables
// let stats = {
//   cookieCount: 0,
//   cookiesPerSecond: 0,
// };

//dom manipulation
//selecting dom elements (buttons, imgs, p tags etc....)
const countCookies = document.getElementById("count");
// a way to store the shop upgrades that come from the API

// let shopUpgrades = [];

// fetch the items from the API
// async function getShopUpgrades() {
//   const response = await fetch(
//     "https://cookie-upgrade-api.vercel.app/api/upgrades"
//   );
//   console.log(respose);
//   const date = await response.json();
//   console.log(data);
//   return data;
//   //fetch the data
//   //translate into JSON
//   //PUSH the items into the shopUpgrades array above
// }

// getShopUpgrades();

// const shopContainer = document.getElementById("shop-container");

// function shopUpgrades(stringContent){
//   const content = document.createElement ("p");
//   content.textContent = stringContnet;
//   shopContainer.appendChild(content);
// }

// async function displayUpgrades()[
//   const postsUpgrades = await getPo
// ]

//an event listener to click on the cookie button
//make sure cookie or button/img is selected
//write event handler and event listener
function handleCookieClick() {
  // when I click on the cookie, the value of cookieCount goes up by one
}
addEventListener("click", handleCookieClick);

// we need a timer that increases the cookiesCount value by one every second
setInterval(function () {
  //I want to increase the value of cookieCount by one every second
  //I want to update the value displayed on the page (this task can also be a seperate function, for example updateCookieCount(), and you would call this funcion inside the setInterval function)
  //I want to store this value in local storage
}, 1000);

// function updateCookieCount() {
//   //I update the cookieCount value (this is just one option)
// }

function storeLocalStorage() {
  //I store the values in locak storage (this is just one option)
}

//==============================================
//extra function blocks to give you other ideas
// these building block are just possible solutions to problems you might find
function renderShopUpgrades() {
  //create DOM elements
  //you will use a loop or array method
  shopUpgrades.forEach(function (upgrade) {
    //for each item in the array, assign the value to a dom element, append the element to the dom
  });
  //}

  function saveLocalStorage() {
    // a method that turns your data into string soup
    // a method to set the data into key and values in local storage
  }
}

myButton.addEventListener("click", handleClick);

//counting button
const myCountingButton = document.getElementById("count-button");
console.log(myCountingButton);

let clicks = 0;

function handleCounting() {
  clicks = clicks + 1;
  console.log(clicks);
  if (clicks < 10) {
    myCountingButton.textContent = `You have clicked ${clicks} times!`;
  } else if (clicks > 9 && clicks < 20) {
    myCountingButton.textContent = `You can stop now... ${clicks}`;
  } else {
    myCountingButton.textContent = `Okay..I get it... ${clicks}`;
  }
}

myCountingButton.addEventListener("click", handleCounting);



@media (min-width: 600px) {
  .main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 2rem;
  }
  .box {
    height: 100px;
    width: 150px;
    border: solid blue 3px;
  }
}

@media (min-width: 700px) {
  .main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 3rem;
  }
  .box {
    height: 150px;
    width: 200px;
    border: solid blue 5px;
  }
}

@media (min-width: 800px) {
  .main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 4rem;
  }
  .box {
    height: 200px;
    width: 250px;
    border: solid blue 7px;
  }
}
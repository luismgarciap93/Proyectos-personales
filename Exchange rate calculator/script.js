const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const rateVal = document.getElementById("rate");

//Fetch exchnge rates and update the DOM

function caclulate() {
  const currencyValueOne = currencyOne.value;
  const currencyValueTwo = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyValueOne}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currencyValueTwo];
      rateVal.innerText = `1 ${currencyValueOne} = ${rate} ${currencyValueTwo}`;
      amountTwo.value = (amountOne.value * rate).toFixed(3);
    });
}

//Event listener//

currencyOne.addEventListener("change", caclulate);
amountOne.addEventListener("input", caclulate);
currencyTwo.addEventListener("change", caclulate);
amountTwo.addEventListener("input", caclulate);

swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  caclulate();
});

caclulate();

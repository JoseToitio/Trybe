
async function fetchCriptos () {
  const coins = await fetch(`https://api.coincap.io/v2/assets`)
  .then(response => response.json())
  .then(data => {
    return data.data
  })

  return coins;
}

async function setCoins () {
  const coins = await fetchCriptos();

  const coinsList = document.querySelector('#criptos');

  coins
  .filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);
    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}


window.onload =  () => setCoins();
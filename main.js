const rates = {}
const elementUSD = document.querySelector('[data-value="USD"]')
const elementEUR = document.querySelector('[data-value="EUR"]')
const elementGBP = document.querySelector('[data-value="GBP"]')

const select = document.querySelector('#select')
const input = document.querySelector('#input')
const result = document.querySelector('#result')

getCurrencies()

// setInterval(getCurrencies, 10000) //каждые 10 сек обновляем табло с курсами валют

async function getCurrencies() {
  const response = await fetch('https://cbu.uz/ru/arkhiv-kursov-valyut/json/')
  const data = await response.json()
  const result = await data
  
  rates.USD = result[0].Rate
  rates.EUR = result[1].Rate
  rates.GBP = result[3].Rate
  
  elementUSD.textContent = rates.USD
  elementEUR.textContent = rates.EUR
  elementGBP.textContent = rates.GBP
}

input.addEventListener('input', function () {
  convertValue()
})

select.addEventListener('input', function () {
  convertValue()
})

function convertValue () {
  result.value = (parseFloat(input.value) / rates[select.value]).toFixed(2)
}
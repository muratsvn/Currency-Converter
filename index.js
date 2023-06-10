const firstSelectEl = document.getElementById("currency-first");
const secondSelectEl = document.getElementById("currency-second");
const firstInput = document.getElementById("first-value");
const exchangeDescription = document.getElementById("exchange-description");
const secondInput = document.getElementById("second-value");

firstSelectEl.addEventListener("change", updateRate);
secondSelectEl.addEventListener("change", updateRate);
firstInput.addEventListener("input", updateRate);



function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/656593d99f9f621e33d0f567/latest/${firstSelectEl.value}`)
    .then((res) => res.json())
    .then((data) => {
        let rate = data.conversion_rates[secondSelectEl.value];
        
        secondInput.value = (firstInput.value * rate).toFixed(2);

        exchangeDescription.innerText = `1 ${firstSelectEl.value} = ${rate + " " + secondSelectEl.value} `

    })
}


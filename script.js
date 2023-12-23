const error = document.querySelector('#error');
const quote = document.querySelector('#quote');
const buton = document.querySelector('button');
const historyContainer = document.querySelector('#history');

let currentQuote;
let quoteHistory = [];

const getQuote = async () => {
    const res = await fetch('https://dummyjson.com/quotes/random');
    if (res.status === 200) {
        return res.json();

    } else {
        throw new Error('Quote does not exist.Please try again!');
    }
}
buton.addEventListener('click', () => {
    getQuote()
        .then((res) => {
            if (currentQuote) {
                quoteHistory.unshift(currentQuote);
            }
            currentQuote = res.quote;
            quote.innerText = currentQuote;
            historyContainer.innerHTML = '' ;


            quoteHistory.forEach((oldQuote) => {
                const div = document.createElement("div");
                div.innerText = oldQuote;
                historyContainer.appendChild(div);
            })

        })
           .catch((err) => {
            error.innerText = err;
        })
})
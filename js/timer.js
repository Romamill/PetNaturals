
// Today date

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const formattedDate = dd + '.' + mm + '.' + yyyy;
document.getElementById("order-date").innerHTML = "Order date: " + formattedDate;




const priceFull = document.querySelector('.price-full');
const priceSale = document.querySelector('.price-sale');
const timer = document.getElementById('timer');

function updatePrices(fullPrice, salePrice) {
    priceFull.textContent = fullPrice;
    priceSale.textContent = salePrice;
}

let fullPrice = 120;
let salePrice = fullPrice * 0.5;

updatePrices(fullPrice + 'uah', salePrice + 'uah');

function showStrikethrough() {
    priceFull.classList.add('show-strikethrough');
}

function hideStrikethrough() {
  priceFull.classList.remove('show-strikethrough');
}

const countDownDate = new Date().getTime() + 2 * 60 * 60 * 1000;

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    timer.innerHTML = hours + ":" + minutes + ":" + seconds;
    
    if (distance < 0) {
        clearInterval(x);
        timer.innerHTML = "TIME TO BUY";
        priceFull.style.display = 'inline';
        priceSale.style.display = 'none';
        hideStrikethrough();
    } else {
        priceFull.style.display = 'inline'; 
        priceSale.style.display = 'inline';
        showStrikethrough();
    }
}, 1000);







const btns = document.querySelectorAll('.rate');
const btnBlock = document.querySelector('.rating');
const submitBtn = document.querySelector('.submit');
const title = document.querySelector('.title');
const msg = document.querySelector('.sub-text');
const blockMsg = document.querySelector('.context');
const rateSelected = document.querySelector('.rate-selected');
const iconStar = document.querySelector('.star-icon');
const result = document.querySelector('.result');

let rate = null;
console.log(btns);
console.log(submitBtn)

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        rate = e.target.value;
        console.log(rate);
    })
});

submitBtn.addEventListener('click', ()=> {
    if(rate) {
        // blockMsg.style.alignItems = 'center';
        iconStar.style.display = 'none';
        btnBlock.style.display = 'none';
        submitBtn.style.display = 'none';
        // blockMsg.style.textAlign = 'center'
        result.style.display = 'flex';
        rateSelected.textContent = `You selected ${rate} out of 5`;
        title.style.textAlign = 'center';
        msg.style.textAlign = 'center';
        title.textContent = 'Thank you!';
        msg.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`
    }
})




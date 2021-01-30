function ticketHandle(product, isIncrease) {
    const ticketInput = document.getElementById(product + 'Input');
    const ticketNewInput = parseInt(ticketInput.value);
    let ticketLastInput = ticketNewInput;
    if (isIncrease == true) {
        ticketLastInput = ticketNewInput + 1;
    }

    if (isIncrease == false && ticketNewInput > 0) {
        ticketLastInput = ticketNewInput - 1;
    }
    ticketInput.value = ticketLastInput;
    let ticketNewPrice = 0;
    if (product == 'firstClass') {
        ticketNewPrice = ticketLastInput * 150;
    }
    if (product == 'economy') {
        ticketNewPrice = ticketLastInput * 100;
    }
    subTotal();
}


function subTotal() {
    const firstClassTicketCount = ticketInput('firstClass');
    const economyTicketCount = ticketInput('economy');

    const subTotal = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subTotal').innerText = subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = tax;

    const grandTotal = subTotal + tax;
    document.getElementById('total').innerText = grandTotal;
}

function ticketInput(product) {
    const ticketInput = document.getElementById(product + 'Input');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


//The code of my extra part .
function bookNow() {
    const details = document.getElementById('details');
    details.style.display = "none";
    let confirmation = document.getElementById('confirmation');
    confirmation.style.display = "block";

    const firstClassTicketCount = ticketInput('firstClass');
    const economyTicketCount = ticketInput('economy');

    const firstClassPieces = document.getElementById('firstClassPieces');
    firstClassPieces.innerText = firstClassTicketCount;
    const economyPieces = document.getElementById('economyPieces');
    economyPieces.innerText = economyTicketCount;

    const totalPieces = document.getElementById('totalPieces');
    totalPieces.innerText = firstClassTicketCount + economyTicketCount;

    const firstClassPrice = document.getElementById('firstClassPrice');
    firstClassPrice.innerText = firstClassTicketCount * 150;

    const economyClassPrice = document.getElementById('economyClassPrice');
    economyClassPrice.innerText = economyTicketCount * 100;

    const total = document.getElementById('totalPrice');
    const totalPrice = firstClassTicketCount * 150 + economyTicketCount * 100;
    const totalPriceWithTax = totalPrice * 0.1;
    total.innerText = totalPrice + totalPriceWithTax;
}
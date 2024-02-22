console.log('connected')


const allBtn = document.getElementsByClassName("kbd");


// const price = document.getElementById("seat-price").parentNode.parentNode.childNodes[3].childNodes[0].innerText;
// console.log(price);






// console.log(allBtn)

for (const btn of allBtn) {

    btn.addEventListener("click", function (event) {
        // console.log(event.target.innerText);

        const seat = event.target.innerText;
        // console.log(seat);

        const price = document.getElementById("seat-price").parentNode.parentNode.childNodes[3].childNodes[0].innerText;


        // update seats
        const seats = getConvertedValue("seats-left");
        document.getElementById("seats-left").innerText = seats - 1;

        const count = getConvertedValue("seat-count");
        document.getElementById("seat-count").innerText = count+1;








        const selectedContainer = document.getElementById("selected-seat-container");
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-between");


        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seat;
        p2.innerText = 'economic';
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotalCost(price);
        updateGrandTotal();

    });
}








function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-price");

    if (status == undefined) {

        document.getElementById("grand-total").innerText = totalCost;

    }

    else {
        const couponCode = document.getElementById("cupon-code").value;


        if (couponCode == "NEW15") {
            const discounted = totalCost * 0.15;
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }
        else if (couponCode == "COUPLE20") {
            const discounted = totalCost * 0.2;
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }

        else {
            alert("please enter valid cupon coad");
        }

    }


}






function updateTotalCost(value) {

    const totalCost = getConvertedValue("total-price");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-price").innerText = sum;


}








function getConvertedValue(id) {
    const element = document.getElementById(id).innerText;
    const convertedValue = parseInt(element);
    return convertedValue;
}

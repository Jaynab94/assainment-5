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

    });
}



function updateTotalCost(value) {
    
    const totalCost = getConvertedValue("total-price");
    const sum=totalCost+parseInt(value);
    document.getElementById("total-price").innerText=sum;


}





















function getConvertedValue(id) {
    const element = document.getElementById(id).innerText;
    const convertedValue = parseInt(element);
    return convertedValue;
}

console.log('connected')


const allBtn = document.getElementsByClassName("kbd");
console.log(allBtn)

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seat = event.target.parentNode.childNodes[3].innerText;
console.log( event.target.parentNode.childNodes.childNodes)
    })
}























function getConvertedValue(id) {
    const element = document.getElementById(id).innerText;
    const convertedValue = parseInt(element);
    return convertedValue;
}

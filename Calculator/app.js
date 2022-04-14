const historyElem = document.querySelector("#history-el");
const clearButton = document.querySelector(".clearHistory")

const display = (val) => {
    document.getElementById("result").value+=val
}

const clr = () => {
    document.getElementById("result").value = ""
}

const historyEl = document.querySelector("#history-el");

const solve = () => {
    let sumString = document.getElementById("result").value
    let sum = eval(sumString)
    document.getElementById("result").value = sum

    const node = document.createElement("li");
    const textnode = document.createTextNode(sumString + " = " + sum)
    node.appendChild(textnode);
    historyElem.appendChild(node);
}

const clearResults = () => {
    historyElem.textContent = "";
}

clearButton.addEventListener("click", clearResults);
const display = (val) => {
    document.getElementById("result").value+=val
}

const clr = () => {
    document.getElementById("result").value = ""
}

const historyEl = document.querySelector("#history-el");

const solve = () => {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y

    const node = document.createElement("li");
    const textnode = document.createTextNode(y)
    node.appendChild(textnode);
    document.querySelector("#history-el").appendChild(node);
}
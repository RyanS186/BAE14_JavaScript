"use strict";
const plusOneEl = document.querySelector("#plusOneEl");
const countEl = document.querySelector("#count-el");
const saveEl = document.querySelector("#save-el");
const historyEl = document.querySelector("#history-el");

let count = 0;
let history = [];

let increment = () => {
  count++;
  countEl.textContent = count;
};

// let save = () => {
//   if (count > 0) {
//     history.push(" " + count);
//     count = 0;
//     countEl.textContent = count;
//     historyEl.textContent = history;
//   }
// };

let save = () => {
    if (count > 0) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(count)
        node.appendChild(textnode);
        document.querySelector("#history-el").appendChild(node);
        count = 0;
        countEl.textContent = count;
    }
}

plusOneEl.addEventListener("click", increment);
saveEl.addEventListener("click", save);

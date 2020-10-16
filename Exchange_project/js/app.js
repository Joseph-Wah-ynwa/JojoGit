let input = document.getElementById("input");
let from = document.getElementById("from");
let to = document.getElementById("to");
let result = document.getElementById("result");
let historyList = document.getElementById("history-list");

function createOption(x, y, z) {
  let o = document.createElement("option");
  let text = document.createTextNode(y);
  o.setAttribute("value", parseFloat(z));
  o.appendChild(text);
  x.appendChild(o);
}

function toNum(x) {
  return Number(x.replace(",", ""));
}

for (x in data.rates) {
  createOption(to, x, toNum(data.rates[x]));
  createOption(from, x, toNum(data.rates[x]));
}

function createHistory(x) {
  let tr = document.createElement("tr");
  let rowEmpty = document.getElementById("rowEmpty");
  if (rowEmpty) {
    rowEmpty.remove();
  }
  x.map(function (cur) {
    let td = document.createElement("td");
    let text = document.createTextNode(cur);
    td.append(text);
    tr.appendChild(td);
  });
  historyList.appendChild(tr);
}

function store() {
  localStorage.setItem("record", historyList.innerHTML);
}

document.getElementById("calc").addEventListener("submit", function (e) {
  e.preventDefault();
  //get state;
  let x = input.value;
  let y = from.value;
  let z = to.value;
  let fromText = x + " " + from.options[from.selectedIndex].text;
  let toText = to.options[to.selectedIndex].text;
  let date = new Date().toLocaleString();

  //process
  let first = x * y;
  let second = first / z;
  let res = second.toFixed(2);
  let arr = [date, fromText, toText, res + " " + toText];
  createHistory(arr);
  store();

  //set state
  result.innerHTML = res;

  //clear
  input.value = "";
  // input.focus();
  from.value = "";
  to.value = "1";
});

(function () {
  if (localStorage.getItem("record")) {
    historyList.innerHTML = localStorage.getItem("record");
  } else {
    historyList.innerHTML = `<tr id="rowEmpty"><td colspan=4 style="text-align:center">There is no record.</td></tr>`;
  }
})();

function test() {
  let x = input.value;
  let fromText = x + from.options[from.selectedIndex].text;
  let toText = to.options[to.selectedIndex].text;
  let date = new Date().toLocaleString();
  // let date = new Date().toLocaleString();
  console.log(fromText, toText, date);
}

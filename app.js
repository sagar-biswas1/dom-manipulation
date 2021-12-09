console.log("connected");
console.dir(document)


// update name function

function updateName() {
  const name = document.getElementById("name_input").value;
  document.getElementById("name_header").innerText = `Hello ${name}...`;
}


const submitButton = document.getElementById("submit_button");

submitButton.addEventListener("click", () => {
  const itemName = document.getElementById("item_text").value;
  const itemPrice = document.getElementById("item_price").value;

  let tableRow = document.createElement("tr");
  tableRow.setAttribute('class', 'table_row');

  tableRow.innerHTML = ` <td>${itemName}</td>
            <td class='price'>${itemPrice}</td>
            <td><button class="btn btn-danger" onclick='handleDelete(event)'>delete</button> </td>
            `;

  document.getElementById("table_body").appendChild(tableRow);

  

  calculateCost();
});

const calculateCost = () => {
  const allCost = document.getElementsByClassName("price");

  let cost = 0;

  for (let index = 0; index < allCost.length; index++) {
    const element = allCost[index];
    const x = parseInt(element.innerText);

    cost = cost + x;
  }

  console.log(cost);
  document.getElementById("total_cost").innerText = cost;
  console.log(allCost);
};

function handleDelete(event) {
  event.target.parentNode.parentNode.parentNode.removeChild(
    event.target.parentNode.parentNode
  );
  // console.log(
  //   event.target.parentNode.parentNode.parentNode.removeChild(
  //     event.target.parentNode.parentNode
  //   )
  // );
  calculateCost();
}

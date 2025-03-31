let totalCost = 0;

function addExpense() {
    const name = document.getElementById("expense-name").value.trim();
    const cost = parseFloat(document.getElementById("expense-cost").value);

    if (name === "" || isNaN(cost) || cost <= 0) {
        alert("Please enter a valid expense name and cost.");
        return;
    }

    totalCost += cost;
    document.getElementById("total-cost").textContent = totalCost.toFixed(2);

    const listItem = document.createElement("li");
    listItem.textContent = `${name}: $${cost.toFixed(2)}`;
    document.getElementById("expense-list").appendChild(listItem);

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-cost").value = "";
}

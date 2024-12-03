function tipValue(percentage)
{
    const billAmount=parseFloat(document.getElementById('bilAmount').vlaue);
    const noPersons=parseInt(document.getElementById('noPersons').value);
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    if (isNaN(noPersons) || noPersons <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }
       


            const tipAmount = (billAmount * percentage) / 100 / noPersons;
            const totalAmount = billAmount + tipAmount;
            const perPersonAmount = totalAmount / noPersons;

            document.getElementById('tipAmount').textContent=`${tipAmount}`;
            document.getElementById("perPersonAmount").textContent = `${perPersonAmount}`;
}

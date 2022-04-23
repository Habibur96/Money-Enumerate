// Task of Calculate Button
document.getElementById('calculate').addEventListener('click', function () {

    //Expenses of Food
    const Food = document.getElementById('food')
    Food.value
    const changeTypeOfFood = parseFloat(Food.value)
    Food.value = ''

    //Expenses of Rent
    const Rent = document.getElementById('rent')
    Rent.value
    const changeTypeOfRent = parseFloat(Rent.value)
    Rent.value = ''

    //Expenses of Clothes
    const Clothes = document.getElementById('clothes')
    Clothes.value
    const changeTypeOfClothes = parseFloat(Clothes.value)
    Clothes.value = ''

    //Sum of Expenses
    const sumOfExpenses = changeTypeOfFood + changeTypeOfRent + changeTypeOfClothes;
    //console.log(sumOfExpenses)
    const changeTypeOfSumOfExpenses = parseFloat(sumOfExpenses)

    //Taken income
    const Income = document.getElementById('income')
    const valueOfIncome = Income.value
    const changeTypeOfIncome = parseFloat(valueOfIncome)

    //Added Total Expenses 
    document.getElementById('totalExpenses').innerText = changeTypeOfSumOfExpenses

    // Calculated Balance
    const tOtalExpenses = changeTypeOfIncome - changeTypeOfSumOfExpenses;
    const changeTypeOfTotal = parseFloat(tOtalExpenses)
    // console.log(changeTypeOfTotal)

    //Added Balance 
    const Balance = document.getElementById('balance')
    Balance.innerText = changeTypeOfTotal

    //Call the function of value()
    value(changeTypeOfIncome, changeTypeOfTotal)

})

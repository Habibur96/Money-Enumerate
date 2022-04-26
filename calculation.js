






// Task of Calculate Button
document.getElementById('calculate').addEventListener('click', function (event) {

    //Take Income
    const Income = document.getElementById('income')
    const valueOfIncome = Income.value

    //Expenses of Food
    const Food = document.getElementById('food')
    Food.value

    //Take Rent value
    const Rent = document.getElementById('rent')
    Rent.value

    // Take clothes value
    const Clothes = document.getElementById('clothes')
    Clothes.value


    if (Income.value < 0) {
        alert('keep positive value for income.')
    }
    else if (Income.value == '') {
        alert('Do not keep null value for income.')
    }
    else if (isNaN(Income.value)) {
        alert('Do not keep string as a income value')
    }
    else if (Food.value < 0) {
        alert('Do not keep negative food value')
    }
    else if (Food.value == '') {
        alert('Do not keep null food value')
    }
    else if (isNaN(Food.value)) {
        alert('Do not keep string food value')
    }
    else if (Rent.value < 0) {
        alert('Do not keep negative rent value')
    }
    else if (Rent.value == '') {
        alert('Do not keep null rent value')
    }
    else if (isNaN(Rent.value)) {
        alert('Do not keep string rent value. Please input numeric')
    }
    else if (Clothes.value < 0) {
        alert('keep positive clothes value')
    }
    else if (isNaN(Clothes.value)) {
        alert('Do not keep null clothes value')
    }
    else if (Clothes.value == '') {
        alert('Do not keep null clothes value')
    }
    else {


        const changeTypeOfFood = parseFloat(Food.value)

        const changeTypeOfRent = parseFloat(Rent.value)

        const changeTypeOfClothes = parseFloat(Clothes.value)
        // Clothes.value = ''

        //Sum of Expenses
        const sumOfExpenses = changeTypeOfFood + changeTypeOfRent + changeTypeOfClothes;

        const changeTypeOfSumOfExpenses = parseFloat(sumOfExpenses)

        //Taken income
        const Income = document.getElementById('income')
        const valueOfIncome = Income.value
        const changeTypeOfIncome = parseFloat(valueOfIncome)

        if (changeTypeOfIncome > changeTypeOfSumOfExpenses) {

            document.getElementById('totalExpenses').innerText = changeTypeOfSumOfExpenses

            const totalExpenses = changeTypeOfIncome - changeTypeOfSumOfExpenses;

            const changeTypeOfTotalExpenses = parseFloat(totalExpenses)

            const Balance = document.getElementById('balance')
            Balance.innerText = changeTypeOfTotalExpenses

            calculate(changeTypeOfIncome, changeTypeOfTotalExpenses)
        } else {
            alert('It is not possible')
        }
    }
})



//Task of Save Button
function calculate(changeTypeOfIncome, changeTypeOfTotalExpenses) {
    document.getElementById('save-button').addEventListener('click', function () {

        //Taken value for calculate the saving amount on Income
        const saveInput = document.getElementById('save-input')
        saveInput.value

        const changeTypeOfSaveInputValue = parseFloat(saveInput.value)
        //saveInput.value = ''

        // Calculated percentage on saving amount.
        const parsentSaving = (changeTypeOfSaveInputValue * changeTypeOfIncome) / 100
        console.log(parsentSaving)

        const changeTypeOfParsentSaving = parseFloat(parsentSaving)

        if (saveInput.value < 0) {
            alert('Saving Amount should be positive balance.')
        }
        else if (isNaN(saveInput.value)) {
            alert('Saving Amount should not be string.')
        }
        else if (saveInput.value == '') {
            alert('Saving Amount should not be null.')
        }

        else if (changeTypeOfTotalExpenses > changeTypeOfParsentSaving) {

            //Added Saving Amount
            document.getElementById('savingAmount').innerText = changeTypeOfParsentSaving

            //Caculated and added the Remaining Balance
            const remainingBalance = changeTypeOfTotalExpenses - changeTypeOfParsentSaving
            const changeTypeOfRemainingBalance = parseFloat(remainingBalance)

            document.getElementById('remaining-balance').innerText = changeTypeOfRemainingBalance

        }

        else {
            alert('Saving Amount should be small than balance.')
        }

    })

}
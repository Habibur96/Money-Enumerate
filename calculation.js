


// Task of Calculate Button
document.getElementById('calculate').addEventListener('click', function () {

    //Expenses of Food
    const Food = document.getElementById('food')
    Food.value
    const changeTypeOfFood = parseFloat(Food.value)
    //  Food.value = ''

    //Expenses of Rent
    const Rent = document.getElementById('rent')
    Rent.value
    const changeTypeOfRent = parseFloat(Rent.value)
    // Rent.value = ''

    //Expenses of Clothes
    const Clothes = document.getElementById('clothes')
    Clothes.value
    const changeTypeOfClothes = parseFloat(Clothes.value)
    // Clothes.value = ''

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
    const totalExpenses = changeTypeOfIncome - changeTypeOfSumOfExpenses;
    const changeTypeOfTotal = parseFloat(totalExpenses)
    // console.log(changeTypeOfTotal)

    //Added Balance 
    const Balance = document.getElementById('balance')
    Balance.innerText = changeTypeOfTotal

    //Call the function of value()
    value(changeTypeOfIncome, changeTypeOfTotal)


})


//Task of Save Button
function value(changeTypeOfIncome, changeTypeOfTotal) {
    document.getElementById('save-button').addEventListener('click', function () {

        //Taken value for calculate the saving amount on Income
        const saveInput = document.getElementById('save-input')
        saveInput.value
        //   console.log('********' + saveInput.value)
        const changeTypeOfSaveInputValue = parseFloat(saveInput.value)
        //saveInput.value = ''


        //  console.log('->' + changeTypeOfIncome)
        ///   console.log('->' + changeTypeOfTotal)


        // console.log('----<<<<<<<<' + changeTypeOfSaveInputValue)
        // Calculated percentage on saving amount.
        const parsentSaving = (changeTypeOfSaveInputValue * changeTypeOfIncome) / 100
        console.log('---->>' + parsentSaving)

        const changeTypeOfParsentSaving = parseFloat(parsentSaving)



        //Added Saving Amount
        document.getElementById('savingAmount').innerText = changeTypeOfParsentSaving
        console.log(changeTypeOfParsentSaving)// problrm-1

        //Caculated and added the Remaining Balance
        const remainingBalance = changeTypeOfTotal - changeTypeOfParsentSaving
        const changeTypeOfRemainingBalance = parseFloat(remainingBalance)
        console.log(changeTypeOfRemainingBalance)


        document.getElementById('remaining-balance').innerText = changeTypeOfRemainingBalance

        console.log(changeTypeOfParsentSaving)
        console.log(changeTypeOfRemainingBalance)

    })

}
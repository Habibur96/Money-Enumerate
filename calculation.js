




// Task of Calculate Button
document.getElementById('calculate').addEventListener('click', function (event) {

    //Take Income
    const Income = document.getElementById('income')
    const valueOfIncome = Income.value

    //Expenses of Food
    const Food = document.getElementById('food')
    //Food.value

    //  const Food = document.getElementById('food')
    Food.value

    const Rent = document.getElementById('rent')
    Rent.value

    const Clothes = document.getElementById('clothes')
    Clothes.value

    console.log(Food.value)

    if (Income.value < 0) {
        alert('keep positive value')
    }
    else if (Income.value == '') {
        alert('Do not keep null value')
    }
    else if (isNaN(Income.value)) {
        alert('Don not keep string Income value')
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
        alert('Do not keep string value')
    }
    else if (Clothes.value < 0) {
        alert('keep positive clothes value')
    }
    else if (isNaN(Clothes.value)) {
        alert('Do not keep null value')
    }
    else if (Clothes.value == '') {
        alert('Do not keep null clothes value')
    }
    else {
        //     const a = alert('keep r8 value')
        //     throw "a"

        const changeTypeOfFood = parseFloat(Food.value)
        //const a = typeof (changeTypeOfFood)
        // console.log(a)
        //  Food.value = ''

        //Expenses of Rent
        // const Rent = document.getElementById('rent')
        // Rent.value
        const changeTypeOfRent = parseFloat(Rent.value)
        // Rent.value = ''

        //Expenses of Clothes
        // const Clothes = document.getElementById('clothes')
        // Clothes.value
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

        if (changeTypeOfIncome > changeTypeOfSumOfExpenses) {

            document.getElementById('totalExpenses').innerText = changeTypeOfSumOfExpenses



            const totalExpenses = changeTypeOfIncome - changeTypeOfSumOfExpenses;

            const changeTypeOfTotalExpenses = parseFloat(totalExpenses)

            const Balance = document.getElementById('balance')
            Balance.innerText = changeTypeOfTotalExpenses



            // totalExpenses = changeTypeOfIncome - changeTypeOfTotalExpenses;
            // changeTypeOfTotalExpenses = parseFloat(totalExpenses)

            value(changeTypeOfIncome, changeTypeOfTotalExpenses)
        } else {
            alert('It is not possible')
        }

        //Added Total Expenses 
        // document.getElementById('totalExpenses').innerText = changeTypeOfSumOfExpenses

        // Calculated Balance
        // const totalExpenses = changeTypeOfIncome - changeTypeOfSumOfExpenses;
        // const changeTypeOfTotalExpenses = parseFloat(totalExpenses)


        // console.log(changeTypeOfTotal)

        //Added Balance 


        //Call the function of value()
        // value(changeTypeOfIncome, changeTypeOfTotal)

    }
})










//Task of Save Button
function value(changeTypeOfIncome, changeTypeOfTotalExpenses) {
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

            //  console.log("(((((" + changeTypeOfTotalExpenses)
            //Added Saving Amount
            document.getElementById('savingAmount').innerText = changeTypeOfParsentSaving
            //  console.log(changeTypeOfParsentSaving)// problrm-1


            //Caculated and added the Remaining Balance
            const remainingBalance = changeTypeOfTotalExpenses - changeTypeOfParsentSaving
            const changeTypeOfRemainingBalance = parseFloat(remainingBalance)


            //  console.log(changeTypeOfRemainingBalance)


            document.getElementById('remaining-balance').innerText = changeTypeOfRemainingBalance

            //   console.log(changeTypeOfParsentSaving)
            //   console.log(changeTypeOfRemainingBalance)




        }

        else {
            alert('Saving Amount should be small than balance.')
        }

    })

}
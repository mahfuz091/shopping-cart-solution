function updateCaseNumber(isIncrease){
    const caseValueField = document.getElementById('case-input');
    const caseValueString = caseValueField.value;
    const previousCaseValue = parseInt(caseValueString);
    let newCaseValue;
    if(isIncrease === true){
        newCaseValue = previousCaseValue + 1;
    }
    else{
         newCaseValue = previousCaseValue - 1;
    }

    caseValueField.value = newCaseValue; 
    return newCaseValue;


    
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber*59;

    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber)
    calculateTotal()
   
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber)
    calculateTotal()
})
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseValueField = document.getElementById('case-input');
    const caseValueString = caseValueField.value;
    const previousCaseValue = parseFloat(caseValueString);
    const newCaseValue = previousCaseValue + 1;
    caseValueField.value = newCaseValue 
   
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseValueField = document.getElementById('case-input');
    const caseValueString = caseValueField.value;
    const previousCaseValue = parseFloat(caseValueString);
    const newCaseValue = previousCaseValue - 1;
    caseValueField.value = newCaseValue
})
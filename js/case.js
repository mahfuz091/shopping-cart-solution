document.getElementById('btn-case').addEventListener('click', function(){
    const caseValueString = document.getElementById('case-value').value;
    const caseValue = parseFloat(caseValueString);
    console.log(caseValue);

})
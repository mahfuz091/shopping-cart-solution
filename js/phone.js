function updatePhoneNumber(isIncrease){
    const phoneValueField = document.getElementById('phone-input');
    const phoneValueString = phoneValueField.value;
    const previousphoneValue = parseInt(phoneValueString);
    let newphoneValue;
    if(isIncrease === true){
        newphoneValue = previousphoneValue + 1;
    }
    else{
         newphoneValue = previousphoneValue - 1;
    }

    phoneValueField.value = newphoneValue; 
    return newphoneValue;


    
}
function updatePhoneTotalPrice(newphoneNumber){
    const phoneTotalPrice = newphoneNumber*1219;

    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}




document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newphoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newphoneNumber);
    calculateTotal()
    
   
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newphoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newphoneNumber);
    calculateTotal()
})
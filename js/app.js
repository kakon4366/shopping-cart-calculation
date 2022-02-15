//product quantity increment and decrement function
function getProductQuantity(quantityDisplayId, isIncrese){

    const productQuantityInput = document.getElementById(quantityDisplayId);
    const productQuantityText = productQuantityInput.value;
    const productQuantity = parseInt(productQuantityText);

    if(isIncrese){
        return productQuantityInput.value = productQuantity + 1;
    }else if(productQuantity > 0){
        return productQuantityInput.value = productQuantity - 1;
    }else{
        return 0;
    }
}

//





//Phone quantity increment and decrement handler
document.getElementById('phone-increment').addEventListener('click', function(){
    const phoneQuantity = getProductQuantity('phone-quantity-count', true);
    
})
document.getElementById('phone-decrement').addEventListener('click', function(){
    const phoneQuantity = getProductQuantity('phone-quantity-count', false);
    console.log(phoneQuantity);
})

//Phone Case quantity increment and decrement handler
document.getElementById('case-increment').addEventListener('click', function(){
    const caseQuantity = getProductQuantity('case-quantity-count', true);
    console.log(caseQuantity);
})
document.getElementById('case-decrement').addEventListener('click', function(){
    const caseQuantity = getProductQuantity('case-quantity-count', false);
    console.log(caseQuantity);
})

//Headphone quantity increment and decrement handler
document.getElementById('headphone-increment').addEventListener('click', function(){
    const caseQuantity = getProductQuantity('headphone-quantity-count', true);
    console.log(caseQuantity);
})
document.getElementById('headphone-decrement').addEventListener('click', function(){
    const caseQuantity = getProductQuantity('headphone-quantity-count', false);
    console.log(caseQuantity);
})
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

//Product Price Function
function getProductPrice(productPriceInput, productPrice, productQuantity){
    const productPriceText = document.getElementById(productPriceInput);
    // const productPriceText = productPriceInput.innerText;

    const totalproductPrice = productPrice * productQuantity ;
    productPriceText.innerText = totalproductPrice;

}

// Total Product Price
function totalProductPrice(){
    const phonePriceText = document.getElementById('phone-price');
    const phonePrice = parseFloat(phonePriceText.innerText);

    const casePriceText = document.getElementById('case-price');
    const casePrice = parseFloat(casePriceText.innerText);

    const headphonePriceText = document.getElementById('headphone-price');
    const headphonePrice = parseFloat(headphonePriceText.innerText);

    const subTotal = phonePrice + casePrice + headphonePrice;

    const subTotalText =  document.getElementById('sub-total');
    subTotalText.innerText = subTotal;
}




//Phone quantity increment and decrement handler
document.getElementById('phone-increment').addEventListener('click', function(){
    //phone quantity
    const phoneQuantity = getProductQuantity('phone-quantity-count', true);

    // total phone price 
    const totalPhonePrice = getProductPrice('phone-price', 1279, phoneQuantity);
    console.log(totalPhonePrice);

    //update sub total price
    totalProductPrice();

    
})
document.getElementById('phone-decrement').addEventListener('click', function(){
    //phone quantity
    const phoneQuantity = getProductQuantity('phone-quantity-count', false);
    
    // total phone price 
    getProductPrice('phone-price', 1279, phoneQuantity);

    //update sub total price
    totalProductPrice();
})

//Phone Case quantity increment and decrement handler
document.getElementById('case-increment').addEventListener('click', function(){
    //case quantity
    const caseQuantity = getProductQuantity('case-quantity-count', true);

    // total case price 
    getProductPrice('case-price', 49, caseQuantity);

    //update sub total price
    totalProductPrice();
})
document.getElementById('case-decrement').addEventListener('click', function(){
    //case quantity
    const caseQuantity = getProductQuantity('case-quantity-count', false);

    // total case price 
    getProductPrice('case-price', 49, caseQuantity);

   //update sub total price
   totalProductPrice();
})

//Headphone quantity increment and decrement handler
document.getElementById('headphone-increment').addEventListener('click', function(){
    //headphone quantity
    const headphoneQuantity = getProductQuantity('headphone-quantity-count', true);

    // total headphone price 
    getProductPrice('headphone-price', 69, headphoneQuantity);

    //update sub total price
    totalProductPrice();
})
document.getElementById('headphone-decrement').addEventListener('click', function(){
    //headphone quantity
    const headphoneQuantity = getProductQuantity('headphone-quantity-count', false);

    // total headphone price
    getProductPrice('headphone-price', 69, headphoneQuantity);
 
    //update sub total price
    totalProductPrice();
})
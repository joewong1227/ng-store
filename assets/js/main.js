//Basic Set Up
simpleCart({
  checkout: { 
    type: "PayPal", 
    email: "wsjwong@outlook.com",
    sandbox: true,
    success: "success.html",
    cancel: "cancel.html" 
  },
  currency: "HKD",
  shippingFlatRate: 20,
  cartStyle: "table",
  cartColumns: [
    { view: "remove" , text: "x" , label: false },
    { attr: "name" , label: "Name" },
    { attr: "price" , label: "Amount", view: 'currency' },
    { view: "decrement" , label: false , text: "-" },
    { attr: "quantity" , label: "Quantity" },
    { view: "increment" , label: false , text: "+" },
    { attr: "total" , label: "SubTotal", view: 'currency' },
  ]
});

//Check if item exists before add
simpleCart.bind( 'beforeAdd' , function( item ){
  if ( simpleCart.has( item )){
    return false;
  }
  else {
    return true; 
  } 
});
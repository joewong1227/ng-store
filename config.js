//Basic Set Up
simpleCart({
  checkout: { 
    type: "PayPal", 
    email: "youremails@domain.com",
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
    { view: "decrement" , label: false , text: "-" },
    { attr: "quantity" , label: "Quantity" },
    { view: "increment" , label: false , text: "+" },
    { attr: "total" , label: "Amount", view: 'currency' },
  ]
});
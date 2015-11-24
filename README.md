#ngStore							  
A lightweight and responsive store application without database, which enables you to set it up in minutes. ngStore is built on AngularJS framework with <a href ="http://simplecartjs.org/" target="_blank">simpleCart.js</a> and Bootstrap.

<a href="http://wsjwong.github.io/ngStore/" target="_blank">Demo</a>

#Features
* Mobile-first Responsive Design
* No Database
* Slideshow with Touch Swiping
* Custom product attributes including Size/Color
* Sort Products by any attributes
* Shipping
* Multiple Currencies
* Standard Paypal

#Set up
* Clone from github
* Download ZIP
* 
# Setup

1.Make sure simpleStore is on a web server (any type will do as long as it can serve static web pages).

2.Configure your payment options in `js/config.js`.

```
checkout: {
	type: "PayPal" ,
	email: "you@yours.com"
},
```

3.Edit the `js/config.js` to your liking.

4.Add additional products in the `products.json` file.

#Credit
* <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>
* <a href="https://jquery.com/" target="_blank">jQuery</a>

# Contributing

All forms of contribution are welcome: bug reports, bug fixes, pull requests and simple suggestions.
If you do wish to contribute, please follow the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) Thanks!


## List of contributors

You can find the list of contributors [here](https://github.com/cdmedia/simplestore/graphs/contributors).

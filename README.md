#ngStore							  
A lightweight and responsive store application without database, which enables you to set it up in minutes. ngStore is built on AngularJS framework with <a href ="http://simplecartjs.org/" target="_blank">simpleCart.js</a> and <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>.

<a href="http://wsjwong.github.io/ngStore/" target="_blank">Demo</a>

# Features
* Mobile-first Responsive Design
* No Database
* Slideshow with Touch Swiping
* Custom product attributes including Size/Color
* Sort Products by any attributes
* Shipping
* Paypal with Multiple Currencies
* Payment Success/Cancel Redirect Page

# Set up
* Clone from github
* <a href="https://github.com/wsjwong/ngStore/archive/gh-pages.zip" target="_blank">Download ZIP</a>

1.Make sure ngStore is on a web server

2.Configure your payment options in `js/config.js`.

```
checkout: {
	type: "PayPal" ,
	email: "you@yours.com"
},
```

3.Edit the `js/config.js` to your liking.

4.Add additional products in the `products.json` file.

# To-do

# Contributing

All forms of contribution are welcome: bug reports, bug fixes, pull requests and simple suggestions.
If you do wish to contribute, please follow the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) Thanks!

## List of contributors

You can find the list of contributors [here](https://github.com/cdmedia/simplestore/graphs/contributors).

#Credit
* <a href="https://angularjs.org" target="_blank">AngularJS</a>
* <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>
* <a href="https://angular-ui.github.io/bootstrap/" target="_blank">UI Bootstrap</a>
* <a href="http://angular-ui.github.io" target="_blank">AngularUI</a>
* <a href ="http://simplecartjs.org/" target="_blank">simpleCart.js</a>
* Photos by <a href="http://www.pazzo.com.tw" target="_blank">PAZZO</a>

# ng-store						  
A lightweight and responsive store application without database, which enables you to set it up in minutes. ng-store is built on AngularJS framework with <a href ="http://simplecartjs.org/" target="_blank">simpleCart.js</a> and <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>.

# <a href="http://wsjwong.github.io/ng-store" target="_blank">Demo</a>
To see the product page responsive effect, please see the 'New Arrivals' page.

# Features
* Mobile-first Responsive Design
* No Database
* Slideshow with Touch Swiping
* Product attributes including (but not limited to) Sizes/Colors
* Sort Products by any attributes
* Flat rate Shipping
* Paypal with Multiple Currencies

# Set up
* Clone from GitHub
* <a href="https://github.com/wsjwong/ng-store/archive/gh-pages.zip" target="_blank">Download ZIP</a>

1.ng-store runs on a web server

2.Configure your payment options in `config.js`.

```
checkout: {
	type: "PayPal" ,
	email: "you@yours.com"
	sandbox: true,
},
```
3.Add products in the `items.json` file.

# To-do list
There are plenty of custom configurations could be done easily but I have not started the documentation/testing yet:
* Payment Successful/Cancellalation Redirect Page
* Shipping by products weight/quantity
* Hide Safari bars after Adding to home screen
* More..

# Contributing
All forms of contribution are welcome:
* Bug Reports
* Bug Fixes
* Work on To-do List
* Documentations
* Suggestions

[List of contributors](https://github.com/wsjwong/ng-store/graphs/contributors)

# Credit
* <a href="https://angularjs.org" target="_blank">AngularJS</a>
* <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>
* <a href="https://angular-ui.github.io/bootstrap/" target="_blank">UI Bootstrap</a>
* <a href="http://angular-ui.github.io" target="_blank">AngularUI</a>
* <a href ="http://simplecartjs.org/" target="_blank">simpleCart.js</a>
* Inspired by <a href ="https://github.com/cdmedia/simplestore" target="_blank">simpleStore</a>
* Photos by <a href="http://www.pazzo.com.tw" target="_blank">PAZZO</a>

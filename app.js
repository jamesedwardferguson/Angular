(function(){
var app = angular.module('store',[]);

app.controller('StoreController', function(){
this.products = gems;
 });
app.controller('PanelController', function(){
  this.tab = 1;

this.selectTab = function(setTab) {
  this.tab = setTab;
 };    
});
 var gems = [
     {
     name: 'Dodecahedron',
     price: 2.95,
     description: 'This is for sale',
     canPurchase: true,
     soldOut: false,
     images: [
         {
             full: 'https://www.fillmurray.com/100/100',
             thumb: "http://fillmurray.com/g/50/50"
         },
     ]
 },
 {
     name: 'Pentagonal Gem',
     price: 5.95,
     description: 'This is also for sale',
     canPurchase: true,
     soldOut: false,
     images: [
         {
        full: 'https://www.placecage.com/100/100',
     },
    ]
 },
 ];


})();

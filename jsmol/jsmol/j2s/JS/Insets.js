Clazz.declarePackage("JS");
(function(){
var c$ = Clazz.decorateAsClass(function(){
this.top = 0;
this.left = 0;
this.bottom = 0;
this.right = 0;
Clazz.instantialize(this, arguments);}, JS, "Insets", null);
Clazz.makeConstructor(c$, 
function(top, left, bottom, right){
this.top = top;
this.left = left;
this.bottom = bottom;
this.right = right;
}, "~N,~N,~N,~N");
})();
;//5.0.1-v4 Tue Nov 12 14:58:21 CST 2024
Clazz.declarePackage("J.shapesurface");
Clazz.load(["J.shapesurface.Pmesh"], "J.shapesurface.Plot3D", null, function(){
var c$ = Clazz.declareType(J.shapesurface, "Plot3D", J.shapesurface.Pmesh);
Clazz.defineMethod(c$, "initShape", 
function(){
Clazz.superCall(this, J.shapesurface.Plot3D, "initShape", []);
this.myType = "plot3d";
});
});
;//5.0.1-v4 Tue Nov 12 14:58:21 CST 2024
$("#mostrar").click(function(){
    $("#caja").show(400);
});
$("#ocultar").click(function(){
    $("#caja").hide(400);
});
$("#alerta").click(function(){
    alert("le diste al boton");
});
$("#mostrar2").mouseover(function(){
    $("#caja3").fadeIn(400);
});
$("#ocultar2").mouseover(function(){
    $("#caja3").fadeOut(400);
});
$("#alternar").click(function(){
    $("#caja4").toggle(300);
});
$("#animar").click(function(){
    $("#caja7").animate({"left": "2000px"}, 900);
});
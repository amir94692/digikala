
  

/////////////////////////
$(document).ready(function(){


$(".Inputsearch").focusin(function ()
{  
  $("#ddd").addClass("disibled")
$("#Popupsearch").addClass("AddclassSearch").show();
var w=$(document).width();
console.log(w);

if(w < 1328){
   $("#Popupsearch").hide();
}
})
$("#Popupsearch").focus(function(){
   $(this).hide() 
})
$(".container-fluid,#ddd").click(function(){
   $("#Popupsearch").hide()
   $("#ddd").removeClass("disibled")
})
 $("#Searchinput").focusout(function()
 {
  $(this).prop("placeholder" , "جستجو در دیجی کالا ...").css("padding-right" , "0px")  
 })
/////////////
$("#Inputemail").focusin(function()
{
  $('[data-toggle="tooltip"]').tooltip()
  $(this).css("border" , "1px solid black")
  $("#Capa_1").css("fill" , "red")
  
})
$("#Inputemail").focusout(function()
{
  $("#Capa_1").css("fill" , "black")
  $(this).css("border" , "1px solid black")
  
})
$("#Inputemail1").focusin(function()
{
  $('[data-toggle="tooltip"]').tooltip()
  $(this).css("border" , "1px solid black")
  $("#Capa_2").css("fill" , "red")
})
$("#Inputemail1").focusout(function()
{
  $("#Capa_2").css("fill" , "black")
  $(this).css("border" , "1px solid black")
})
/////////////////////////////////////////
$("#Mymodal,#SvgGPS").click(function(){
  $("#Modal").show()
  $("#ddd").addClass("disibledmodal")
})
$("#ddd,#Svgclosebutton").click(function(){
  $("#Modal,#Modal2").hide()
  $("#ddd").removeClass("disibledmodal")
})
$(".Divcity p").click(function(){
$("#Modal2").show()
$("#Modal").hide()
})
$("#Textbacktolist,#Svgarrowright").click(function(){
  $("#Modal2").hide()
  $("#Modal").show()
 
})
////////////////////////////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
$("#Divbackgroundkalaydg1").show()
$("#Divbackgroundkalaydg1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
$("#Divbackgroundkalaydg2").show()
$("#Divbackgroundkalaydg2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
$("#Divbackgroundkalaydg3").show()
$("#Divbackgroundkalaydg3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
$("#Divbackgroundkalaydg4").show()
$("#Divbackgroundkalaydg4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
$("#Divbackgroundkalaydg5").show()
$("#Divbackgroundkalaydg5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
$("#Divbackgroundkalaydg6").show()
$("#Divbackgroundkalaydg6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
$("#Divbackgroundkalaydg7").show()
$("#Divbackgroundkalaydg7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
$("#Divbackgroundkalaydg8").show()
$("#Divbackgroundkalaydg8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
$("#Divbackgroundkalaydg9").show()
$("#Divbackgroundkalaydg9").siblings().hide()
})
/////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
  $("#Divbackgroundarayeshi1").show()
  $("#Divbackgroundarayeshi1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
  $("#Divbackgroundarayeshi2").show()
  $("#Divbackgroundarayeshi2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
  $("#Divbackgroundarayeshi3").show()
  $("#Divbackgroundarayeshi3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
  $("#Divbackgroundarayeshi4").show()
  $("#Divbackgroundarayeshi4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
  $("#Divbackgroundarayeshi5").show()
  $("#Divbackgroundarayeshi5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
  $("#Divbackgroundarayeshi6").show()
  $("#Divbackgroundarayeshi6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
  $("#Divbackgroundarayeshi7").show()
  $("#Divbackgroundarayeshi7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
  $("#Divbackgroundarayeshi8").show()
  $("#Divbackgroundarayeshi8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
  $("#Divbackgroundarayeshi9").show()
  $("#Divbackgroundarayeshi9").siblings().hide()
})
//////////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
  $("#Divbackgroundkhodro1").show()
  $("#Divbackgroundkhodro1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
  $("#Divbackgroundkhodro2").show()
  $("#Divbackgroundkhodro2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
  $("#Divbackgroundkhodro3").show()
  $("#Divbackgroundkhodro3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
  $("#Divbackgroundkhodro4").show()
  $("#Divbackgroundkhodro4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
  $("#Divbackgroundkhodro5").show()
  $("#Divbackgroundkhodro5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
  $("#Divbackgroundkhodro6").show()
  $("#Divbackgroundkhodro6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
  $("#Divbackgroundkhodro7").show()
  $("#Divbackgroundkhodro7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
  $("#Divbackgroundkhodro8").show()
  $("#Divbackgroundkhodro8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
  $("#Divbackgroundkhodro9").show()
  $("#Divbackgroundkhodro9").siblings().hide()
})
//////////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
  $("#Divbackgrounmode1").show()
  $("#Divbackgrounmode1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
  $("#Divbackgroundkhodro2").show()
  $("#Divbackgroundkhodro2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
  $("#Divbackgrounmode3").show()
  $("#Divbackgrounmode3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
  $("#Divbackgrounmode4").show()
  $("#Divbackgrounmode4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
  $("#Divbackgrounmode5").show()
  $("#Divbackgrounmode5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
  $("#Divbackgrounmode6").show()
  $("#Divbackgrounmode6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
  $("#Divbackgrounmode7").show()
  $("#Divbackgrounmode7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
  $("#Divbackgrounmode8").show()
  $("#Divbackgrounmode8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
  $("#Divbackgrounmode9").show()
  $("#Divbackgrounmode9").siblings().hide()
})
//////////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
  $("#Divbackgrounkhane1").show()
  $("#Divbackgrounkhane1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
  $("#Divbackgrounkhane2").show()
  $("#Divbackgrounkhane2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
  $("#Divbackgrounkhane3").show()
  $("#Divbackgrounkhane3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
  $("#Divbackgrounkhane4").show()
  $("#Divbackgrounkhane4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
  $("#Divbackgrounkhane5").show()
  $("#Divbackgrounkhane5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
  $("#Divbackgrounkhane6").show()
  $("#Divbackgrounkhane6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
  $("#Divbackgrounkhane7").show()
  $("#Divbackgrounkhane7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
  $("#Divbackgrounkhane8").show()
  $("#Divbackgrounkhane8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
  $("#Divbackgrounkhane9").show()
  $("#Divbackgrounkhane9").siblings().hide()
})
///////////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
  $("#Divbackgrounketab1").show()
  $("#Divbackgrounketab1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
  $("#Divbackgrounketab2").show()
  $("#Divbackgrounketab2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
  $("#Divbackgrounketab3").show()
  $("#Divbackgrounketab3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
  $("#Divbackgrounketab4").show()
  $("#Divbackgrounketab4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
  $("#Divbackgrounketab5").show()
  $("#Divbackgrounketab5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
  $("#Divbackgrounketab6").show()
  $("#Divbackgrounketab6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
  $("#Divbackgrounketab7").show()
  $("#Divbackgrounketab7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
  $("#Divbackgrounketab8").show()
  $("#Divbackgrounketab8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
  $("#Divbackgrounketab9").show()
  $("#Divbackgrounketab9").siblings().hide()
})
//////////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
  $("#Divbackgrouasbabbazi1").show()
  $("#Divbackgrouasbabbazi1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
  $("#Divbackgrouasbabbazi2").show()
  $("#Divbackgrouasbabbazi2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
  $("#Divbackgrounketab3").show()
  $("#Divbackgrounketab3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
  $("#Divbackgrouasbabbazi4").show()
  $("#Divbackgrouasbabbazi4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
  $("#Divbackgrouasbabbazi5").show()
  $("#Divbackgrouasbabbazi5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
  $("#Divbackgrouasbabbazi6").show()
  $("#Divbackgrouasbabbazi6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
  $("#Divbackgrouasbabbazi7").show()
  $("#Divbackgrouasbabbazi7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
  $("#Divbackgrouasbabbazi8").show()
  $("#Divbackgrouasbabbazi8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
  $("#Divbackgrouasbabbazi9").show()
  $("#Divbackgrouasbabbazi9").siblings().hide()
})
///////////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
  $("#Divbackgrouvarzesh1").show()
  $("#Divbackgrouvarzesh1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
  $("#Divbackgrouvarzesh2").show()
  $("#Divbackgrouvarzesh2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
  $("#Divbackgrouvarzesh3").show()
  $("#Divbackgrouvarzesh3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
  $("#Divbackgrouvarzesh4").show()
  $("#Divbackgrouvarzesh4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
  $("#Divbackgrouvarzesh5").show()
  $("#Divbackgrouvarzesh5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
  $("#Divbackgrouvarzesh6").show()
  $("#Divbackgrouvarzesh6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
  $("#Divbackgrouvarzesh7").show()
  $("#Divbackgrouvarzesh7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
  $("#Divbackgrouvarzesh8").show()
  $("#Divbackgrouvarzesh8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
  $("#Divbackgrouvarzesh9").show()
  $("#Divbackgrouvarzesh9").siblings().hide()
})
////////////////////////
$("#Divul>ul li:nth-child(1)").mouseover(function(){
  $("#Divbackgroukhordani1").show()
  $("#Divbackgroukhordani1").siblings().hide()
})
$("#Divul>ul li:nth-child(2)").mouseover(function(){
  $("#Divbackgroukhordani2").show()
  $("#Divbackgroukhordani2").siblings().hide()
})
$("#Divul>ul li:nth-child(3)").mouseover(function(){
  $("#Divbackgroukhordani3").show()
  $("#Divbackgroukhordani3").siblings().hide()
})
$("#Divul>ul li:nth-child(4)").mouseover(function(){
  $("#Divbackgroukhordani4").show()
  $("#Divbackgroukhordani4").siblings().hide()
})
$("#Divul>ul li:nth-child(5)").mouseover(function(){
  $("#Divbackgroukhordani5").show()
  $("#Divbackgroukhordani5").siblings().hide()
})
$("#Divul>ul li:nth-child(6)").mouseover(function(){
  $("#Divbackgroukhordani6").show()
  $("#Divbackgroukhordani6").siblings().hide()
})
$("#Divul>ul li:nth-child(7)").mouseover(function(){
  $("#Divbackgroukhordani7").show()
  $("#Divbackgroukhordani7").siblings().hide()
})
$("#Divul>ul li:nth-child(8)").mouseover(function(){
  $("#Divbackgroukhordani8").show()
  $("#Divbackgroukhordani8").siblings().hide()
})
$("#Divul>ul li:nth-child(9)").mouseover(function(){
  $("#Divbackgroukhordani9").show()
  $("#Divbackgroukhordani9").siblings().hide()
})
///////////
//////////////////////////////////////////////////////////////////////////////
$("#Svgiconnavbar1,#Link1navbar").hover(function(){
$("#Divlinksliders1").show()
$("#ddd").addClass("disibledmoda2")
$("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide();
},function(){
})
$(".nav-item:nth-child(4)").hover(function(){
  $("#ddd").addClass("disibledmoda2")
})
$("#Divnavbar").mouseleave(function(){
  $("#ddd").removeClass("disibledmoda2")
  $("#Divlinksliders1,#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$(".nav-item:nth-child(2),.nav-item:nth-child(3),.nav-item:nth-child(5),.nav-item:nth-child(6)").hover(function(){
  $("#Divlinksliders1").hide()
  $("#ddd").removeClass("disibledmoda2")
})
$("#Linkkaladigital").hover(function(){
  $("#Divlinksliders1").show();
  $("Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
//////////////////////
$("#Linkarayesh").hover(function(){
  $("#Divlinksliders2").show();
  $("#Divlinksliders1,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkaladigital2").hover(function(){
  $("#Divlinksliders1").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
/////////////////////////
$("#Linkkhodro2").hover(function(){
  $("#Divlinksliders3").show();
  $("#Divlinksliders2,#Divlinksliders1,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkarayesh3").hover(function(){
  $("#Divlinksliders2").show();
  $("#Divlinksliders1,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkaladigital3").hover(function(){
  $("#Divlinksliders1").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
////////////////////////////
$("#Linkmode3").hover(function(){
  $("#Divlinksliders4").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhodro4").hover(function(){
  $("#Divlinksliders3").show();
  $("#Divlinksliders2,#Divlinksliders1,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkarayesh4").hover(function(){
  $("#Divlinksliders2").show();
  $("#Divlinksliders1,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkaladigital4").hover(function(){
  $("#Divlinksliders1").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
//////////////////////////////
$("#Linkkhane4").hover(function(){
  $("#Divlinksliders5").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkmode5").hover(function(){
  $("#Divlinksliders4").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhodro5").hover(function(){
  $("#Divlinksliders3").show();
  $("#Divlinksliders2,#Divlinksliders1,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkarayesh5").hover(function(){
  $("#Divlinksliders2").show();
  $("#Divlinksliders1,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkaladigital5").hover(function(){
  $("#Divlinksliders1").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
//////////////////////////////////
$("#Linklavazemtahrir5").hover(function(){
  $("#Divlinksliders6").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhane6").hover(function(){
  $("#Divlinksliders5").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkmode6").hover(function(){
  $("#Divlinksliders4").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhodro6").hover(function(){
  $("#Divlinksliders3").show();
  $("#Divlinksliders2,#Divlinksliders1,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkarayesh6").hover(function(){
  $("#Divlinksliders2").show();
  $("#Divlinksliders1,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkaladigital6").hover(function(){
  $("#Divlinksliders1").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
////////////////////////////////////
$("#Linkasbabbazi6").hover(function(){
  $("#Divlinksliders7").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders1,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linklavazemtahrir7").hover(function(){
  $("#Divlinksliders6").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhane7").hover(function(){
  $("#Divlinksliders5").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkmode7").hover(function(){
  $("#Divlinksliders4").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhodro7").hover(function(){
  $("#Divlinksliders3").show();
  $("#Divlinksliders2,#Divlinksliders1,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkarayesh7").hover(function(){
  $("#Divlinksliders2").show();
  $("#Divlinksliders1,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkaladigital7").hover(function(){
  $("#Divlinksliders1").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
/////////////////////////////////////////
$("#Linkvarzesh7").hover(function(){
  $("#Divlinksliders8").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders1,#Divlinksliders9").hide()
})
$("#Linkasbabbazi8").hover(function(){
  $("#Divlinksliders7").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders1,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linklavazemtahrir8").hover(function(){
  $("#Divlinksliders6").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhane8").hover(function(){
  $("#Divlinksliders5").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkmode8").hover(function(){
  $("#Divlinksliders4").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhodro8").hover(function(){
  $("#Divlinksliders3").show();
  $("#Divlinksliders2,#Divlinksliders1,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkarayesh8").hover(function(){
  $("#Divlinksliders2").show();
  $("#Divlinksliders1,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkaladigital8").hover(function(){
  $("#Divlinksliders1").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
///////////////////////////////////////
$("#Linkkhordani8").hover(function(){
  $("#Divlinksliders9").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders1").hide()
})
$("#Linkvarzesh9").hover(function(){
  $("#Divlinksliders8").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders1,#Divlinksliders9").hide()
})
$("#Linkasbabbazi9").hover(function(){
  $("#Divlinksliders7").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders1,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linklavazemtahrir9").hover(function(){
  $("#Divlinksliders6").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhane9").hover(function(){
  $("#Divlinksliders5").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkmode9").hover(function(){
  $("#Divlinksliders4").show();
  $("#Divlinksliders1,Divlinksliders2,#Divlinksliders3,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkhodro9").hover(function(){
  $("#Divlinksliders3").show();
  $("#Divlinksliders2,#Divlinksliders1,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkarayesh9").hover(function(){
  $("#Divlinksliders2").show();
  $("#Divlinksliders1,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
$("#Linkkaladigital9").hover(function(){
  $("#Divlinksliders1").show();
  $("#Divlinksliders2,#Divlinksliders3,#Divlinksliders4,#Divlinksliders5,#Divlinksliders6,#Divlinksliders7,#Divlinksliders8,#Divlinksliders9").hide()
})
////////////////////////////////////////
$("#collapsibleNavbar ul li:nth-child(4)").hover(function(){
  $("#Containerslidervav2").show()
})
$("#collapsibleNavbar ul li:nth-child(3),#collapsibleNavbar ul li:nth-child(5),#collapsibleNavbar ul li:nth-child(6),#collapsibleNavbar ul li:nth-child(7)").hover(function(){
  $("#Containerslidervav2").hide()
})
$("#Containerslidervav2>.row").mouseleave(function(){
  $("#Containerslidervav2").hide()
})
$("#Divnavbar").mouseleave(function(){
  $("#Containerslidervav2").hide()
})
///////////////////////////////////////////
/*part mobile */
$("#Svgiconnavbar").click(function(){
  $("#Container-mobile").show().animate({right:-69},{duration:1000},{done:function(){
  }})
  $("#ddd").addClass("disibledmodal3")
  $("#Pagefirst").hide()
})
$("#ddd").click(function(){
  $("#Pagefirst").show()
  $("#ddd").removeClass("disibledmodal3")
  $("#Container-mobile").animate({right:-900},{duration:1000},{done:function(){
  
  }}).hide(0)
 
})
//////////////////////////////////////
/**menu */
$("#Listpishnahad>li:nth-child(1)").click(function(){
  $("#Linkpishhnahad").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
 $("#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi, #Lazemarayeshi,#khodrolavazem,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Ashpazkhane,#Linkashpaz,#Ketab,#Linkketab,  #bazi,#Asbabbazi,#Varzesh,#Linkvarzesh,#khordani,#Linkkhordani,#sayerkaladg,#sayeredoorbin,#Link4").hide()
})
$("#Kaladigital>li:nth-child(1)").click(function(){
  $("#Link4").toggle()
  $("#sayerkaladg,#sayeredoorbin").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(1)").show()
  $("#Linkpishhnahad,#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi,#Lazemarayeshi,#khodrolavazem,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Ashpazkhane,#Linkashpaz,#Ketab,#Linkketab,#bazi,#Asbabbazi,#Varzesh,#Linkvarzesh,#khordani,#Linkkhordani").hide()
})
$("#Link4>li:nth-child(1)").click(function(){
  $("#vasayelphonr").toggle()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin").hide()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Link4>li:nth-child(3)").click(function(){
  $("#Linkmobil").toggle()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#vasayelphonr,#Linkdoorbin,#Linklavzmdoorbin").hide()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Link4>li:nth-child(6)").click(function(){
  $("#Linkdoorbin").toggle()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Linkmobil,#vasayelphonr,#Linklavzmdoorbin").hide()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Link4>li:nth-child(8)").click(function(){
  $("#Linklavzmdoorbin").toggle()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Link4>li:nth-child(8)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Linkmobil,#vasayelphonr,#Linkdoorbin").hide()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Link4>li:nth-child(6)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Kaladigital>li:nth-child(3)").click(function(){
  $("#Lazemarayeshi").toggle()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Linkpishhnahad,#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi,#khodrolavazem,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Ashpazkhane,#Linkashpaz,#Ketab,#Linkketab,  #bazi,#Asbabbazi,#Varzesh,#Linkvarzesh,#khordani,#Linkkhordani,#Link4").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
  $("#Lazemarayeshi>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Lazemarayeshi>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Lazemarayeshi>li:nth-child(1)").click(function(){
  $("#Linklazmarayeshi").toggle()
  $("#Lazemarayeshi>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Lazemarayeshi>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle() 
})
$("#Kaladigital>li:nth-child(5)").click(function(){
  $("#khodrolavazem").toggle()
  $("#Linkpishhnahad,#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi, #Lazemarayeshi,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Ashpazkhane,#Linkashpaz,#Ketab,#Linkketab,  #bazi,#Asbabbazi,#Varzesh,#Linkvarzesh,#khordani,#Linkkhordani,#Link4").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
  $("#khodrolavazem>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#khodrolavazem>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
})
$("#khodrolavazem>li:nth-child(1)").click(function(){
  $("#Tazeenylink").toggle()
  $("#khodrolavazem>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#khodrolavazem>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
})
$("#Kaladigital>li:nth-child(7)").click(function(){
  $("#Lavazmmode").toggle()
  $("#Linkpishhnahad,#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi, #Lazemarayeshi,#khodrolavazem,#Tazeenylink,#Ashpazkhane,#Linkashpaz,#Ketab,#Linkketab,  #bazi,#Asbabbazi,#Varzesh,#Linkvarzesh,#khordani,#Linkkhordani,#Link4").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
  $("#Lavazmmode>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Lavazmmode>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Lavazmmode>li:nth-child(1)").click(function(){
  $("#Linklavaazmmode").toggle()
  $("#Lavazmmode>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Lavazmmode>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
})
$("#Kaladigital>li:nth-child(9)").click(function(){
  $("#Ashpazkhane").toggle()
  $("#Linkpishhnahad,#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi, #Lazemarayeshi,#khodrolavazem,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Linkashpaz,#Ketab,#Linkketab,#bazi,#Asbabbazi,#Varzesh,#Linkvarzesh,#khordani,#Linkkhordani,#Link4").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
  $("#Ashpazkhane>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Ashpazkhane>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Ashpazkhane>li:nth-child(1)").click(function(){
  $("#Linkashpaz").toggle()
  $("#Ashpazkhane>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Ashpazkhane>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
})
$("#Kaladigital>li:nth-child(11)").click(function(){
  $("#Ketab").toggle()
  $("#Linkpishhnahad,#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi, #Lazemarayeshi,#khodrolavazem,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Ashpazkhane,#Linkashpaz,#Linkketab,  #bazi,#Asbabbazi,#Varzesh,#Linkvarzesh,#khordani,#Linkkhordani,#Link4").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
  $("#Ketab>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Ketab>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()

})
$("#Ketab>li:nth-child(1)").click(function(){
  $("#Linkketab").toggle()
  $("#Ketab>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Ketab>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
})

$("#Kaladigital>li:nth-child(13)").click(function(){
  $("#Asbabbazi").toggle()
  $("#Linkpishhnahad,#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi, #Lazemarayeshi,#khodrolavazem,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Ashpazkhane,#Linkashpaz,#Ketab,#Linkketab,#bazi,#Varzesh,#Linkvarzesh,#khordani,#Linkkhordani,#Link4").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(3)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
  $("#Asbabbazi>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Asbabbazi>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Asbabbazi>li:nth-child(1)").click(function(){
  $("#bazi").toggle()
  $("#Asbabbazi>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Asbabbazi>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
})

$("#Kaladigital>li:nth-child(15)").click(function(){
  $("#Varzesh").toggle()
  $("#Linkpishhnahad,#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi, #Lazemarayeshi,#khodrolavazem,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Ashpazkhane,#Linkashpaz,#Ketab,#Linkketab,  #bazi,#Asbabbazi,#Linkvarzesh,#khordani,#Linkkhordani,#Link4").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").show()
  $("#Varzesh>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Varzesh>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
})
$("#Varzesh>li:nth-child(1)").click(function(){
  $("#Linkvarzesh").toggle()
  $("#Varzesh>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Varzesh>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
  
})
$("#Kaladigital>li:nth-child(17)").click(function(){
  $("#khordani").toggle()
  $("#vasayelphonr,#Linkmobil,#Linkdoorbin,#Linklavzmdoorbin,#sayerelazmdoorbin,#Linklazmarayeshi, #Lazemarayeshi,#khodrolavazem,#Tazeenylink,#Lavazmmode,#Linklavaazmmode,#Ashpazkhane,#Linkashpaz,#Ketab,#Linkketab,  #bazi,#Asbabbazi,#Varzesh,#Linkvarzesh,#sayerkaladg,#sayeredoorbin,#Link4").hide()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#Kaladigital>li:nth-child(17)>a>#Svgplusadd:nth-child(1)").toggle()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Listpishnahad>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(5)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(7)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(9)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(11)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(13)>a>#Svgplusadd:nth-child(1)").show()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(2)").hide()
  $("#Kaladigital>li:nth-child(15)>a>#Svgplusadd:nth-child(1)").show()
  $("#khordani>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").hide()
  $("#khordani>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").show()
})
$("#khordani>li:nth-child(1)").click(function(){
  $("#Linkkhordani").toggle()
  $("#khordani>li:nth-child(1)>a>#Svgplusadd:nth-child(2)").toggle()
  $("#khordani>li:nth-child(1)>a>#Svgplusadd:nth-child(1)").toggle()
 
})
/*end menu */
/*end part mobile */
///////////////////////////
/*cont 1*/
var owl = $('#carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    dots:true,
    slideTransition:"ease in out"
});
////////////////////////////////////
$('#carousel2').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  nav:true,
 
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      800:{
          items:3
      },
      1268:{
          items:4
      }
  }
})
//////////////////////
$('#carousel3').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  nav:true,
 
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    800:{
        items:3
    },
    1268:{
        items:4
    }
}
})
///////////////////
$('#carousel4').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  nav:true,
 
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    800:{
        items:3
    },
    1268:{
        items:4
    }
}
})
$('#carousel5').owlCarousel({
  items:5,
  loop:true,
  margin:10,
  autoplayTimeout:2700,
  autoplay:true,
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:1
      }
  }
})
///////////////////////////////
$('#carousel6').owlCarousel({
  items:5,
  loop:true,
  margin:10,
  nav:true,
  autoplayTimeout:2700,
  autoplay:true,
  
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    800:{
        items:3
    },
    1268:{
        items:5
    }
}
})
$('#carousel7').owlCarousel({
  items:5,
  loop:true,
  margin:10,
  nav:true,
  autoplayTimeout:2700,
  autoplay:true,
  
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    800:{
        items:3
    },
    1268:{
        items:5
    }
}
})
/////////////
$('#carousel8').owlCarousel({
  items:5,
  loop:true,
  margin:10,
  nav:true,
  autoplayTimeout:2700,
  autoplay:true,
  
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    800:{
        items:3
    },
    1268:{
        items:5
    }
}
})
/////////
$('#carousel9').owlCarousel({
  items:5,
  loop:true,
  margin:10,
  nav:true,
  autoplayTimeout:2700,
  autoplay:false,
  
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    800:{
        items:3
    },
    1268:{
        items:5
    }
}
})

/////////////(//////
   // fade in #back-top
   $(function () {
    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    $('#back-top').fadeIn();
    } else {
    $('#back-top').fadeOut();
    }
    }); 
   // scroll body to 0px on click
    $('#Btnarrowup').click(function () {
    $('body,html').animate({
    scrollTop: 0
    }, 2000);
    return false;
    });
    }); 
/*end cont 1*/
////
$("#detailmore").hide()
$("#btncloze").hide()
$("#btndetailmore").click(function(){
  $("#btndetailmore").hide()
  $("#detailmore").show()
  $("#btncloze").show()
})
$("#btncloze").click(function(){
  $("#detailmore").hide()
  $("#btndetailmore").show()
  $("#btncloze").hide()
})
///////////////////////////////////////

  $(window).mouseover(function () {
  if($(this).scrollTop()>1000){
    $("#Nav").slideUp()
    $("#Divnavbar").css("height" , "0")
  }
  else if($(this).scrollTop()<1000){
    $("#Nav").slideDown()
    $("#Divnavbar").css("height" , "50")
  }

  })
  }); 


////////////////////////////////////


///java script
var options = {
  target: document.getElementById('myDivId'),
  
};
var bar = new Nanobar(options);
pos=0;
var time=setInterval(progress,2700);
function progress(){
  if(pos<0){
    clearInterval(time)
  }
  else{
    pos++;
    bar.go(100); 
  }
}



var x=screen.availWidth;

document.getElementById("ppp").innerHTML=x;
 function Myfunction()
 {
document.getElementById("Searchinput").type;
document.getElementById("Searchinput").style.paddingRight="50px";
document.getElementById("Searchinput").placeholder="";
 }
function Myfunction1()
{
  document.getElementById("Inputemail").type;
  document.getElementById("Inputemail").style.paddingLeft="20px"; 
}
function Myfunction2()
{
  document.getElementById("Inputemail1").type;
  document.getElementById("Inputemail1").style.paddingLeft="20px";
}
function Myfunct3()
{
  document.getElementById("inputfooter").type;
  document.getElementById("inputfooter").style.paddingLeft="20px";
  // document.getElementById("inputfooter").placeholder.
  
}




/////////////////////////////////////////




////////////////////////////////////////////

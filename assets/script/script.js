
$(document).ready(function () {

//object of Characters

// var characters={
//     "johnSnow":{
//         name: "John Snow",
//         hp:"200",
//         attack:"10",
//         counterAttack:"15"
//     },
//     "daenerys":{
//         name: "Daenerys Targaryen",
//         hp:"180",
//         attack:"20",
//         counterAttack:"25"
//     },
//     "jaime":{
//         name: "Jaime Lannister",
//         hp:"180",
//         attack:"15",
//         counterAttack:"15"
//     },
//     "nightKing":{
//         name: "Night King",
//         hp:"200",
//         attack:"10",
//         counterAttack:"15"
//     },
// }


//This it to move Characters into position

$("#johnSnow").on("click", function(){
    if($("#pla").not(":empty")){
    $("#johnSnow").detach().appendTo("#def");
}})

$("#johnSnow").on("click", function(){
    if($("#pla").is(":empty")){
    $("#johnSnow").detach().appendTo("#pla");
}})

$("#daenerys").on("click", function(){
    if($("#pla").not(":empty")){
    $("#daenerys").detach().appendTo("#def");
    
}})

$("#daenerys").on("click", function(){
    if($("#pla").is(":empty")){
    $("#daenerys").detach().appendTo("#pla");
    
}})

$("#jaime").on("click", function(){
    if($("#pla").not(":empty")){
    $("#jaime").detach().appendTo("#def");
   
}})

$("#jaime").on("click", function(){
    if($("#pla").is(":empty")){
    $("#jaime").detach().appendTo("#pla");
   
}})

$("#nightKing").on("click", function(){
    if($("#pla").not(":empty")){
    $("#nightKing").detach().appendTo("#def");
    
}})

$("#nightKing").on("click", function(){
    if($("#pla").is(":empty")){
    $("#nightKing").detach().appendTo("#pla");
    
}})

// This is for reset button

$(".resetb").on("click", function(){
    $("#pla").children().closest();
    $("#def").children().closest();
})




})
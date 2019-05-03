var friends = [];
var lolito=0;
var price;
var total=[];

$(".craftButton").click(function(){
   var newComment=$(".newComment").val();
    price = parseInt($(".price").val());
    total.push(price);
    console.log(newComment);
    var name=$(".name").val();
    
    
    
     $(".numberOfGuests").html(friends.length);
    $(".addComment").append("<img class=" + "'img-size'" + "src=" + newComment+'>'+'<br>');
    $(".name3").append(name+'<br>');
    $(".price2").append(price+'<br>');
});
$(".zeus").click(function(){
    total.forEach(function(hades){
        lolito+=hades;
        });
    $(".atena").html(lolito);   
        
    });

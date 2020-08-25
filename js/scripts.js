// Business Logic 
function Ticket(title, times, age){
  this.title = title;
  this.times = times;
  this.age = age;
}

// Ticket.prototype.price = function() {
//   return this.name + " " + this.times + " " + this.age;
// }





// User Interface Logic----------------
// $(document).ready(function(){
//   const userAge = $("#age").val();
//   const oldMovies = parseInt($("#old-movies").val());
//   const newMovies = parseInt($("#new-movies").val());
// });

$(function(){
  var $select = $(".1-100");
  for (i=1;i<=100;i++){
      $select.append($('<option></option>').val(i).html(i))
  }
});​


 

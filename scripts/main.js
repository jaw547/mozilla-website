 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var dogImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 dogImage.onclick = sayOuch;

 //Toggle code.

 $( "#clickMe" ).click(function() {
 	$( "#mainImage" ).toggle("slow", function() {
 		// Animation complete.
 	});
 });
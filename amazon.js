//script runs when on any amazon page

function amazonJQ()
{
	var buyButton = $("#add-to-cart-button");
	buyButton.click(function(){
		alert("dont buy this!");
	})
}
//script runs when on any amazon page

function amazonJQ()
{
	var buyButton = $("#add-to-cart-button");
	buyButton.prop("disabled",true);
	buyButton.click(function(){
		alert("dont buy this!");
	})
}
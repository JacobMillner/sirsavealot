//script runs when on any amazon page

function amazonJQ()
{
	debugger;
	var buyButton = $("#add-to-cart-button");
	
	if(buyButton != null)
	{
		buyButton.parent().click(function(){
			alert("dont buy this!");
		})
		buyButton.attr('disabled','disabled');
	}
}

function ebayJQ()
{
	debugger;
	var buyButon = $("#binBtn_btn");
	if(buyButton != null)
	{
		buyButton.parent().click(function(){
			alert("dont buy this!");
		})
		buyButton.attr('disabled','disabled');
	}
}
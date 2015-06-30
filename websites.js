//script runs when on any amazon page

function amazonJQ()
{
	debugger;
	var buyButton = $("#add-to-cart-button");
	var price = $("#priceblock_ourprice");
	var oneStarRatingList = $(".a-icon a-icon-star a-star-1 review-rating");
	var custReviewsLink = $(".a-link-emphasis a-nowrap").attr("href");
	var score;
	var insults[];
	var mathProblems[];
	
	if(buyButton != null)
	{
		buyButton.parent().click(function(){
			buyButton.attr("disabled","disabled");
			alert("dont buy this!");
			alert("Insert one star rating here");
		})
	}
}

//script runs when on any page at startup
debugger;
var hostname = $(location).attr('hostname');
hostname = hostname.toUpperCase();
if(hostname == "WWW.AMAZON.COM") //I cant get localCompare working D:
{
		amazonJQ();
}
if(hostname == "WWW.EBAY.COM") //I cant get localCompare working D:
{
		ebayJQ();
}
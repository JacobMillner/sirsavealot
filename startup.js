//script runs when on any page at startup
debugger;
var hostname = $(location).attr('hostname');
hostname = hostname.toUpperCase();
if(hostname == "WWW.AMAZON.COM") //i cant get localCompare working D:
{
		amazonJQ();
}
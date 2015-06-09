//script runs when on any page at startup
debugger;
//var jtest = $('body');
//    alert(jtest);
//    alert(jtest.text());
var hostname = $(location).attr('hostname');
//	alert(hostname);
	
hostname = hostname.toUpperCase();

if(hostname == "WWW.AMAZON.COM") //i cant get localCompare working D:
{
	alert("You are on amazon!");
}
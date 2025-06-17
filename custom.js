//UDMv3.5
//**DO NOT EDIT THIS *****
if (!exclude) { //********


// *** POSITIONING AND STYLES *********************************************



var menuALIGN = "center";		// alignment
var absLEFT = 	15;		// absolute left or right position (if menu is left or right aligned)
var absTOP = 	0; 		// absolute top position

var staticMENU = true;		// static positioning mode (ie5,ie6 and ns4 only)

var stretchMENU = true;		// show empty cells
var showBORDERS = true;		// show empty cell borders

var baseHREF = "";	// base path to .js files for the script (ie: resources/)
var zORDER = 	1000;		// base z-order of nav structure (not ns4)

var mCOLOR = 	"#0080c0";	// main nav cell color
var rCOLOR = 	"#0080C0";	// main nav cell rollover color
var bSIZE = 	0;		// main nav border size
var bCOLOR = 	"#004A6F"	// main nav border color
var aLINK = 	"white";	// main nav link color
var aHOVER = 	"#004A6F";	// main nav link hover-color (dual purpose)
var aDEC = 	"none";		// main nav link decoration
var fFONT = 	"arial";	// main nav font face
var fSIZE = 	13;		// main nav font size (pixels)
var fWEIGHT = 	"bold"		// main nav font weight
var tINDENT = 	7;		// main nav text indent (if text is left or right aligned)
var vPADDING = 	7;		// main nav vertical cell padding
var vtOFFSET = 	0;		// main nav vertical text offset (+/- pixels from middle)

var keepLIT =	true;		// keep rollover color when browsing menu
var vOFFSET = 	6;		// shift the submenus vertically
var hOFFSET = 	5;		// shift the submenus horizontally

var smCOLOR = 	"#0080C0";	// submenu cell color

var srCOLOR = 	"#004A6F";	// submenu cell rollover color
var sbSIZE = 	1;		// submenu border size
var sbCOLOR = 	"#004A6F"	// submenu border color
var saLINK = 	"white";	// submenu link color
var saHOVER = 	"";		// submenu link hover-color (dual purpose)
var saDEC = 	"none";		// submenu link decoration
var sfFONT = 	"arial";// submenu font face
var sfSIZE = 	13;		// submenu font size (pixels)
var sfWEIGHT = 	"normal"	// submenu font weight
var stINDENT = 	5;		// submenu text indent (if text is left or right aligned)
var svPADDING = 0;		// submenu vertical cell padding
var svtOFFSET = 0;		// submenu vertical text offset (+/- pixels from middle)

var shSIZE =	0;		// submenu drop shadow size
var shCOLOR =	"#cccccc";	// submenu drop shadow color
var shOPACITY = 75;		// submenu drop shadow opacity (not ie4,ns4 or opera)

var keepSubLIT = true;		// keep submenu rollover color when browsing child menu
var chvOFFSET = -12;		// shift the child menus vertically
var chhOFFSET = 7;		// shift the child menus horizontally

var openTIMER = 10;		// [** new **] menu opening delay time (not ns4/op5/op6)
var openChildTIMER = 20;	// [** new **] child-menu opening delay time (not ns4/op5/op6)
var closeTIMER = 330;		// menu closing delay time

var cellCLICK = true;		// links activate on TD click
var aCURSOR = "hand";		// cursor for active links (not ns4 or opera)

var altDISPLAY = "";		// where to display alt text
var allowRESIZE = mu;		// allow resize/reload

var redGRID = false;		// show a red grid
var gridWIDTH = 760;		// override grid width
var gridHEIGHT = 500;		// override grid height
var documentWIDTH = 0;		// override document width

var hideSELECT = false;		// auto-hide select boxes when menus open (ie only)
var allowForSCALING = false;	// allow for text scaling in gecko browsers
var allowPRINTING = false;	// allow the navbar and menus to print (not ns4)

var arrWIDTH = 13;		// [** new **] arrow width (not ns4/op5/op6)
var arrHEIGHT = 13;		// [** new **] arrow height (not ns4/op5/op6)

var arrHOFFSET = -1;		// [** new **] arrow horizontal offset (not ns4/op5/op6)
var arrVOFFSET = -3;		// [** new **] arrow vertical offset (not ns4/op5/op6)
var arrVALIGN = "middle";	// [** new **] arrow vertical align (not ns4/op5/op6)

var arrLEFT = "<";		// [** new **] left arrow (not ns4/op5/op6)
var arrRIGHT = ">";		// [** new **] right arrow (not ns4/op5/op6)



//** LINKS ***********************************************************


// add main link item ("url","Link name",width,"text-alignment","_target","alt text",top position,left position,"key trigger","mCOLOR","rCOLOR","aLINK","aHOVER") [** last four are new **]
addMainItem("test3.htm","Home",80,"center","","",0,0,"","#0080C0","#0080C0","white","#004A6F");

addMainItem("porta.htm","Port A Room",80,"center","","",0,0,"","#0080C0","#0080C0","white","#004A6F");

addMainItem("contact.htm","Contact Us",80,"center","_blank","",0,0,"","#0080C0","#0080C0","white","#004A6F");

addMainItem("sitemap.htm","Site Map",80,"center","","",0,0,"","#0080C0","#0080C0","white","#004A6F");



//**DO NOT EDIT THIS *****
}//***********************
//************************

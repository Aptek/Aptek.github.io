 Keyword = new Object();
 Address = new Object();
Keyword [0] = 10
Keyword [1] = "home page"
Address [1] = "index.html"
Keyword [2] = "Contact Information. This Page contains Phone Numbers and Addresses to contact the Port A Room Staff over the phone or in person"
Address [2] = "contact.htm"
Keyword [3] = "News Update. Read the latest News about Aptek Port A Rooms"
Address [3] = "newsupdate.html"
Keyword [4] = "Picture Gallery. Here you will will find Images/Photos of new and old Port A Rooms "
Address [4] = "gallery.html"
Keyword [5] = "Port A Rooms. This Page Contains Most information you will need to know about the Buying, Delivery, Upgrades/Extras and Multiple Uses of an Aptek Port A Room"
Address [5] = "porta.htm"
Keyword [6] = "Machinery Catalogue 1. Our Machinery Catalogue is split into two catalogues containing many Machines such as CNC Lathes, Sawing Machines, Milling and Drilling Machines and many many many more, The Machinery Section has its own seperate Search Engine Also to help you find what your looking for easier"
Address [6] = "/machcat/machcat1.html"
Keyword [7] = "Machinery Catalogue 2. Our Machinery Catalogue is split into two catalogues containing many Machines such as CNC Lathes, Sawing Machines, Milling and Drilling Machines and many many many more, The Machinery Section has its own seperate Search Engine Also to help you find what your looking for easier"
Address [7] = "/machcat/machcat2.html"
Keyword [8] = "Products. The Products Page contains a list of products which Aptek import and that you can Buy"
Address [8] = "products.htm"
Keyword [9] = "Search Engine. Use this to search the Main Aptek Website"
Address [9] = "search.htm"
Keyword [10] = "Site Map. This Page May help you Navigate around our website easier as it has a list of what the Aptek Website Involves and links to those specific pages"
Address [10] = "sitemap.htm"


 function contains(sub,s){
 strlen1=sub.length
 strlen2=s.length
 istrue=false
 for(i=0;i<=strlen2;i++)
 {
 comp=s.substring(i-1,strlen2)
 comp=comp.substring(0,strlen1)
 if(comp==sub){
 istrue=true
 break  
    }   
   }
 return istrue
  }
 function dolt() {
 loopCount=0;
 var Found=false
 var Item=document.forms[0].sub.value.toLowerCase();
 
stats='toolbar=no,location=no,scrollbars=yes,directories=no,status=yes,menubar=no,height=400,width=600,top=0,left=0'
stats += 'scrollbars=yes,resizable=yes'
MsgBox = window.open ("","msgWindow",stats) 
MsgBox.opener = window;
MsgBox.opener.name = "opener";
MsgBox.document.write("<link rel=stylesheet href=style2.css type=text/css><head><title>Search: "+Item+"</title></head><body>");

 if(document.form1.sub.value=="")
 MsgBox.document.write('<h5><font face="Verdana,Arial,Helvetica">Search ::<font color="Red"> records of database</font><HR></h5></font>');
 else
 MsgBox.document.write('<h5><font face="Verdana,Arial,Helvetica">Search: '+Item+'<HR></h5></font>');
MsgBox.document.write(' '+ ' <b>Powered by Excproductions inc.</b><br><hr>');for(var i=1; i<=Keyword[0]; i++){
contains(Item,Keyword[i].toLowerCase()) 
if(comp==Item) {
loopCount++;
Found=true;
MsgBox.document.write('<div align="center"><center><table border="0" width="100%" cellspacing="0" cellpadding="8"><tr><td width="2%" height="18" align="center"><font face="Verdana,Arial,Helvetica" size="2"><h5>'+loopCount+'. </h5></font></td><td width="150%" height="18" align="left"><font color="#ff0000"></font><font><font face="Verdana,Arial,Helvetica" size="2" color="#006600"><A HREF='+Address[i]+' target="">'+Keyword[i]+'<BR></A></font></h1></font></td></tr></table></center></div>')
  MsgBox.document.write('<script Language="JavaScript">window.status=("Total pages: '+loopCount+' ")</'+'script'+'>');

     }
  }

if(!Found)
MsgBox.document.write('<font face="Verdana,Arial,Helvetica" size="2" color="#FFFFFF">No documents were found sorry</font>')
MsgBox.document.write('<style type="text/css"><!-- @import ../style1.css; A:link{text-decoration:none} A:visited { text-decoration:none} --></style></body>')
// Импорт и указание стилей, закрытие тела документа.
if(loopCount==0){
MsgBox.document.write('<script Language="JavaScript">window.status=("No pages found!")</'+'script'+'>');
      }
    }

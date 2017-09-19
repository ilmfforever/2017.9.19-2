window.onload=function() {

	let aside=document.getElementsByClassName("cedaohang")[0];
    let lis=aside.getElementsByTagName("li");
    let item=document.getElementsByClassName("item");
    let imglists=document.getElementsByClassName("img-list")[0];
    let imgs=imglists.getElementsByTagName("li");
    let btns=document.getElementsByClassName("btn-list")[0];
    let btnlis=btns.getElementsByTagName("li");
    let banner=document.getElementsByClassName("bigbanner")[0];
   
       

    for(let i=0;i<lis.length;i++){

    	lis[i].onmouseover=function(){
    		item[i].style.display="block";
    	}
    	lis[i].onmouseout=function(){
    		item[i].style.display="none";
    	}
    }

     let num=0;
     let t=setInterval(move,1000);
     function move(){
         num++;
        if(num==imgs.length){
          num=0;
          }
        for(let j=0;j<imgs.length;j++){
            imgs[j].style.display="none";
            btnlis[j].style.background="rgba(0,0,0,0)";
          }
         imgs[num].style.display="block";    
         btnlis[num].style.background="#fff"; 
       }
       banner.onmouseover=function(){
             clearInterval(t);
    }
       banner.onmouseout=function(){
          t=setInterval(move,1000);
    }


    for(let i=0;i<btnlis.length;i++){
        btnlis[i].onmouseover=function(){
           for(let j=0;j<imgs.length;j++){
               imgs[j].style.display="none";
               btnlis[j].style.background="rgba(0,0,0,0)";
           }
           imgs[i].style.display="block";
           btnlis[i].style.background="#fff"; 
            num=i;
           }
          
    }


   
    // let now=0;
    // for(let i=0;i<btnlis.length;i++)
    // 	btnlis[i].onclick=function(){
    // 		imgs[now].style.display="none";
    // 		imgs[i].style.display="block";
    // 		now=i;
    // 	}
    // for(var j=0;j<btnlis.length;j++){
    // 	btnlis[j].index=j;
    // 	btnlis[j].onclick=(function(j){
    // 		return function(){
    // 			imgs[now].style.display="none";
    // 			imgs[j].style.display="block";
    // 			now=j;
    // 		}
    
   
// })(j)
 // }



//  function $(select){
//     var first=select.charAt(0);
//     if(first=="."){
//         return document.getElementsByClassName(select.substring(1));
//     }     
//     else if(first=="#"){
//         return document.getElementById(select.substring(1));
//     }
//     else if(/^[a-z][a-z1-6]{1,7}$/.test(select)){
//         return document.getElementsByTagName(select);
//     }
// }
}




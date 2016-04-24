var Cookie = {
    createCookie : function(name,value,days){   //创建cookie
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }else{
            var expires = "";
        }
        document.cookie = name+"="+value+expires+"; path=/";
    },
    readCookie : function(name){    //读取cookie
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0;i < ca.length; i++){
            var c = ca[i];
            while (c.charAt(0)==' '){
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0){
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    },
    eraseCookie : function(name){   //清除cookie
        this.createCookie(name,"",-1);
    }
}


	function addLoadEvent(func){
        var oldonload = window.onload;
        if (typeof window.onload != "function") {
            window.onload = func;
        }
        else {
            window.onload = function(){
                oldonload();
                func();
            }
        }
    };


function showTips(){
     var oBox = document.getElementById("tips_for_fall_ie");
      var oClose = document.getElementById("close");
	  var oF = document.getElementById("f")

	  if (Cookie.readCookie('closeUpdata') != null ){ oBox.style.display = "none";oF.style.display = "block"}else{ oBox.style.display = "block";oF.style.display = "none"}
   

   function closeTips(){
      var oBox = document.getElementById("tips_for_fall_ie");
      var oClose = document.getElementById("close");
	  var oF = document.getElementById("f")
	  oClose.onclick = function (){
		 oBox.style.display = "none";
		 oF.style.display = "block";
         Cookie.createCookie('closeUpdata','have');

		 
	  }
	  oF.onclick = function (){

	    oBox.style.display = "block";
		this.style.display = "none"
        Cookie.eraseCookie('closeUpdata');
	   
	  }
    
   }//升级提醒
  


   function see_thumb(){

      var oLink = document.getElementById("see_thumb");
	  var oImg = oLink.getElementsByTagName("img")[0];

	  oLink.onmouseover = function (){oImg.style.display = 'block'}
	  oLink.onmouseout = function (){oImg.style.display = 'none'}
    
   }//缩略图

  closeTips()  
  see_thumb()

 
}


  addLoadEvent(showTips); 
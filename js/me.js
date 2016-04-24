
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



         function aniLogo(){
		   var oLogoWp = document.getElementsByTagName("h1")[0];
		   var oLogo = document.getElementById("logo");

			oLogoWp.onmouseover = function (){
                oLogo.className = "do";
             }
			oLogoWp.onmouseout = function (){
			 oLogo.className = ""
			 
			}

           }//LOGO动画

  addLoadEvent(aniLogo); 
  


 function radomfamous(){

    var afamous = [['我真的相信有些东西如果我不拍下来就没人会看见。'],['对于伟大的摄影作品，重要的是情深，而不是景深。'],['摄影本来就没有不可打破的法则，你觉得自己应该怎么拍，那就怎么拍。'],['只有好照片，没有好照片的准则。'],['在你成为大师前不断学习用光及拍摄角度。'],['在你成为大师前不断学习用光及拍摄角度。']];

    var oFamousBox = document.getElementById("famous");
	var oFamous = oFamousBox.getElementsByTagName("p")[0];
   

    var newfamous = afamous.slice(0)
    for(
	  var i=j=0,temp;i<newfamous.length;i++){
      j = parseInt(Math.random()*newfamous.length)
      temp = newfamous[i]
      newfamous[i] = newfamous[j]
      newfamous[j] = temp
    }
        for(i=0;i<1;i++){
		oFamous.innerHTML = newfamous[i];
		}
    }
 radomfamous()

//随机名言



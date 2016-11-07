//图片编号
var scroll_img=new Array();
scroll_img[0]="images/1.jpg";
scroll_img[1]="images/2.jpg";
scroll_img[2]="images/3.jpg";
scroll_img[3]="images/4.jpg";
//按钮编号
var scroll_number=new Array();
scroll_number[0]="scroll_1";
scroll_number[1]="scroll_2";
scroll_number[2]="scroll_3";
scroll_number[3]="scroll_4";
var nowFrame=1;
var maxFrame=4;
function loopShow(num){
	if(Number(num)){
		nowFrame=num;
	}
	for(var i=1;i<(maxFrame+1);i++){
		if(i==nowFrame){
			document.getElementById("scroll_img").src=scroll_img[i-1];
			document.getElementById(scroll_number[i-1]).className="scroll_number_over";
		}else{
			document.getElementById(scroll_number[i-1]).className="scroll_number_out";
		}
	}
	//因为先显示的
	if(nowFrame==maxFrame){
		nowFrame=1;
	}else{
		nowFrame++;
	}
}
setInterval(loopShow,3000);
window.onload=loopShow;
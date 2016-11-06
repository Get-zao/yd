window.onload=function(){
	var imgs=$('.i3');
	var cir=$('.two');
	var box=$('.banner-T')[0];
	var right=$('.left')[0];
	var left=$('.right')[0];
	var width=parseInt(getStyle(imgs[0],'width'));

	var n=0;
	var next=0;
	var t=setInterval(move,1500)
	function move(){
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		imgs[next].style.left=width+'px';
		animate(imgs[n],{left:-width},400);
		animate(imgs[next],{left:0},400);
		cir[n].style.background='rgba(204,179,185,0.8)';
		cir[next].style.background='#E72487';
		n=next;	
	}
		box.onmouseover=function(){
			clearInterval(t);
		}
		box.onmouseout=function(){
			t=setInterval(move,1500);
		}
		right.onclick=function(){
			move(0);
		}
		left.onclick=function(){
			next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-width+'px';
		animate(imgs[n],{left:width},600);
		animate(imgs[next],{left:0},600);
		cir[n].style.background='rgba(204,179,185,0.8)';
		cir[next].style.background='#E72487';
		n=next;
		}
		for(var i=0;i<cir.length;i++){
			cir[i].index=i;
			cir[i].onclick=function(){
				if(this.index>n){
					imgs[this.index].style.left=width+'px';
					animate(imgs[n],{left:-width},600);
					animate(imgs[this.index],{left:0},600);
					cir[n].style.background='rgba(204,179,185,0.8)';
					cir[this.index].style.background='#E72487';
					n=this.index;
				}else{
					imgs[this.index].style.left=-width+'px';
					animate(imgs[n],{left:width},600);
					animate(imgs[this.index],{left:0},600);
					cir[n].style.background='rgba(204,179,185,0.8)';
					cir[this.index].style.background='#E72487';
					n=this.index;
				}
			}
		}

	var picture=$('.picture')[0];
	var boxnei=$('.jdlb')[0];
	var Width=parseInt(getStyle($('.picture2')[0],'width'));
	var Left=$('#left');
	var Right=$('#right')
	var time=setInterval(mo,1500);
	function mo(){
		animate(boxnei,{left:-Width},600,function(){
			var frist=getFirst(boxnei);
			boxnei.appendChild(frist);
			boxnei.style.left='0px';
		});
	}
	picture.onmouseover=function(){
		clearInterval(time);
	}
	picture.onmouseout=function(){
		time=setInterval(mo,1500);
	}
	Right.onclick=function(){
			mo();
		}
	Left.onclick=function(){
		var frist=getFirst(boxnei);
		var last=getLast(boxnei);
		insertBefore(last,frist);
		boxnei.style.left=-Width+'px';
		animate(boxnei,{left:0},600);
	}

	var box_a=$('.box-a');
	var hide=$('.hide_one');
	var sanjiao=$('.up');
	for(var i=0;i<box_a.length;i++){
		
			box_a[i].index=i;
		hover(box_a[i],function(){
			sanjiao[this.index].style.display='block';
			hide[this.index].style.display='block';
		},
		function(){
			sanjiao[this.index].style.display='none';
			hide[this.index].style.display='none';
		})
	}

	var guding1=$(".right-window3")[0];
	var guding2=$(".right-window4")[0];
	var guding3=$(".right-window5")[0];
	guding1.onmouseover=function(){
		animate(guding1,{right:38},300)
	}
	guding1.onmouseout=function(){
		animate(guding1,{right:-25},300)
	}
	guding2.onmouseover=function(){
		animate(guding2,{right:38},300)
	}
	guding2.onmouseout=function(){
		animate(guding2,{right:-25},300)
	}
	guding3.onmouseover=function(){
		animate(guding3,{right:38},300)
	}
	guding3.onmouseout=function(){
		animate(guding3,{right:-25},300)
	}

	var bb=$('.Hide1')[0];
	var box1=$('#box1');
		hover(bb,function(){
			bb.style.background='#fff';
			box1.style.display='block';
		},
		function(){
			bb.style.background='#F6F6F6';
			box1.style.display='none';
		})
		
	var BB=$('.Hide2')[0];
	var box2=$('#box2');
		hover(BB,function(){
			BB.style.background='#fff';
			box2.style.display='block';
		},
		function(){
			BB.style.background='#F6F6F6';
			box2.style.display='none';
		})

		var area=$(".area")[0];
       	var area_jian=$(".area-jian")[0];
       	var area_hidden=$(".area-hidden")[0];
       	var body=$("body")[0];
       	area.onclick=function(){
       		area_hidden.style.display="block"
       	}
       	body.onclick=function(e){
       		var e=e||window.event;
       		var obj=e.target||e.srcElement;
       		if(obj==area){
       			return;
       		}else{
       			area_hidden.style.display="none"  
       		}
       		     		
       	}
}
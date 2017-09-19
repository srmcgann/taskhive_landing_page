function init(){
	
	var v=[];
	v.push({});
	document.getElementById("noscript_map").remove();
	v[0].c = document.querySelector("#pointAnimation");
	v[0].c.className = "pointCanvas";
	v[0].x = v[0].c.getContext("2d");
	v[0].c.style.height="500px";
	v[0].c.width = v[0].c.clientWidth;
	v[0].c.height = v[0].c.clientHeight;
	v[0].c.style.height="500px";
	var cx=v[0].c.width/2, cy=v[0].c.height/2;
	var vx,vy;
	v[0].f=v[0].t=0;
	v[0].p=[];
	for(var i=0;i<150;++i){
		vx=-.4+rand(i+1e3)*.8;
		vy=-.4+rand(i+2e3)*.8;
		v[0].p.push({x:-80+(cx*2+160)*rand(i),y:-80+(cy*2+160)*rand(i+3e3),vx,vy})
	}

	v.push({});
	v[1].c = document.querySelector("#mapAnimation");
	v[1].c.className = "mapCanvas";
	v[1].x = v[1].c.getContext("2d");
	v[1].mapImg = new Image();
	v[1].mapImg.src = "map.png";

	
	v[1].f=v[1].t=0;
	v[1].p=[];
	v[1].p=[{x:276,y:59},{x:874,y:63},{x:397,y:71},{x:757,y:72},{x:703,y:74},{x:379,y:76},{x:715,y:79},{x:717,y:79},{x:823,y:79},{x:826,y:79},{x:841,y:79},{x:110,y:81},{x:258,y:81},{x:706,y:82},{x:175,y:83},{x:124,y:84},{x:785,y:87},{x:721,y:88},{x:724,y:91},{x:805,y:91},{x:630,y:92},{x:377,y:93},{x:68,y:96},{x:361,y:97},{x:354,y:98},{x:201,y:102},{x:783,y:105},{x:505,y:108},{x:624,y:109},{x:242,y:110},{x:579,y:110},{x:237,y:111},{x:373,y:111},{x:671,y:112},{x:606,y:115},{x:134,y:116},{x:191,y:116},{x:703,y:117},{x:128,y:118},{x:762,y:118},{x:684,y:122},{x:570,y:123},{x:591,y:126},{x:274,y:128},{x:790,y:131},{x:192,y:132},{x:182,y:134},{x:294,y:134},{x:541,y:134},{x:569,y:135},{x:766,y:135},{x:197,y:136},{x:803,y:137},{x:682,y:141},{x:220,y:142},{x:593,y:142},{x:271,y:143},{x:686,y:143},{x:640,y:145},{x:788,y:145},{x:189,y:147},{x:624,y:147},{x:450,y:148},{x:552,y:150},{x:784,y:153},{x:248,y:154},{x:545,y:154},{x:130,y:155},{x:583,y:157},{x:653,y:157},{x:765,y:157},{x:630,y:158},{x:613,y:159},{x:120,y:160},{x:571,y:161},{x:118,y:164},{x:754,y:164},{x:178,y:167},{x:472,y:167},{x:465,y:168},{x:846,y:168},{x:724,y:171},{x:173,y:172},{x:207,y:172},{x:454,y:172},{x:762,y:173},{x:773,y:173},{x:212,y:174},{x:713,y:174},{x:491,y:175},{x:236,y:176},{x:612,y:177},{x:228,y:178},{x:705,y:178},{x:201,y:181},{x:434,y:182},{x:130,y:183},{x:185,y:183},{x:719,y:186},{x:164,y:187},{x:574,y:188},{x:597,y:192},{x:783,y:196},{x:516,y:197},{x:750,y:200},{x:650,y:202},{x:461,y:213},{x:474,y:214},{x:499,y:219},{x:582,y:225},{x:745,y:231},{x:490,y:234},{x:427,y:235},{x:600,y:238},{x:567,y:241},{x:541,y:252},{x:245,y:257},{x:811,y:259},{x:325,y:261},{x:228,y:268},{x:528,y:268},{x:316,y:273},{x:340,y:277},{x:267,y:278},{x:495,y:279},{x:230,y:281},{x:853,y:284},{x:251,y:285},{x:272,y:288},{x:338,y:288},{x:266,y:293},{x:870,y:293},{x:846,y:295},{x:523,y:296},{x:847,y:298},{x:876,y:299},{x:270,y:301},{x:277,y:307},{x:884,y:311},{x:809,y:316},{x:275,y:321},{x:276,y:328},{x:276,y:329},{x:837,y:329},{x:873,y:330},{x:279,y:333}];
	
	window.addEventListener("resize", function resize(){
		v[0].c.style.height="500px";
		v[0].c.width = v[0].c.clientWidth;
		v[0].c.height = v[0].c.clientHeight;
		v[1].c.style.height="30vw";
		v[1].vx=document.getElementsByClassName("rightDiv")[0].clientWidth/951.5;;
		v[1].vy=document.getElementsByClassName("rightDiv")[0].clientHeight/567*1.42;
		v[1].c.width = v[1].c.clientWidth;
		v[1].c.height = v[1].c.clientHeight;
	}, true);
	v[1].mapImg.addEventListener("load",function(){
		v[1].vx=document.getElementsByClassName("rightDiv")[0].clientWidth/951.5;;
		v[1].vy=document.getElementsByClassName("rightDiv")[0].clientHeight/567*1.42;
		v[1].c.width = v[1].c.clientWidth;
		v[1].c.height = v[1].c.clientHeight;
	});
	function startStopAnimations(){
		for(var i=0;i<v.length;++i){
			cancelAnimationFrame(v[i].raf);
			delete v[i].raf;
			if(isScrolledIntoView(v[i].c)){
				if(i==0)v[0].raf=requestAnimationFrame(()=>{drawPointAnimation(v)});
				if(i==1)v[1].raf=requestAnimationFrame(()=>{drawMapAnimation(v)});
				
			}
		}
	}
	window.addEventListener("scroll",startStopAnimations);
	v[1].c.style.height="500px";
	v[1].c.width = v[1].c.clientWidth;
	v[1].c.height = v[1].c.clientHeight;
	v[1].vx=document.getElementsByClassName("rightDiv")[0].clientWidth/951.5;;
	v[1].vy=document.getElementsByClassName("rightDiv")[0].clientHeight/567*1.42;
	v[1].c.style.height="30vw";
	startStopAnimations();
}


function isScrolledIntoView(elem){
	
	var rect=elem.getBoundingClientRect();
	var elemTop=rect.top;
	var elemBottom=rect.bottom;
    return ((elemTop>0 && elemTop < window.innerHeight) || (elemBottom < window.innerHeight && elemBottom > 0));
}


function drawMapAnimation(v){
	
	var x = v[1].x;
	var c = v[1].c;
	c.width|=0;
	x.drawImage(v[1].mapImg,0,0,c.width,c.height);

	var cx=c.width/2, cy=c.height/2;
	
	v[1].f++;
	var d;
	for(var i=0;i<v[1].p.length;++i){
		x1=v[1].p[i].x*v[1].vx;
		y1=v[1].p[i].y*v[1].vy;
		for(var j=0;j<v[1].p.length;++j){
			if(i!=j){
				x2=v[1].p[j].x*v[1].vx;
				y2=v[1].p[j].y*v[1].vy;
				d=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
				if(d<165*v[1].vx){
					x.beginPath();
					x.moveTo(x1,y1);
					x.lineTo(x2,y2);
					x.lineWidth=1+6/(1+d/10)*v[1].vx;
					x.strokeStyle=`hsla(${v[1].f*9+j},100%,80%,${(1 - Math.pow(d / 165 * v[1].vx , .9))/ (300+Math.sin(v[1].f/75+(j+i))*299)}`;
					x.stroke();
				}
			}
		}
	}
	for(var i=0;i<v[1].p.length;++i){
		x.beginPath();
		x.arc(v[1].p[i].x*v[1].vx,v[1].p[i].y*v[1].vy,2.5*v[1].vx,0,Math.PI*2);
		x.globalAlpha=1;
		x.fillStyle="#4f6";
		x.fill();
	}
	x.lineWidth=1;
	
	
	v[1].raf=requestAnimationFrame(()=>{drawMapAnimation(v)});
}

function drawPointAnimation(v){
	
	var c=v[0].c;
	var x=v[0].x;
	x.fillStyle="#040410";
	x.fillRect(0,0,c.width,c.height);

	var cx=c.width/2, cy=c.height/2;
	var X1,Y1,X2,Y2;
	v[0].f+=.7;
	for(var i=0;i<cx*2+60;i+=15){
		x.strokeStyle=`hsla(${220},95%,60%,${i%60?.05:.10})`;
		X1=-60+i+v[0].f;
		Y1=0;
		X2=X1;
		Y2=cy*2;
		x.beginPath();
		x.moveTo(X1,Y1);
		x.lineTo(X2,Y2);
		x.stroke();
	}
	for(var i=0;i<cy*2+60;i+=15){
		x.strokeStyle=`hsla(${220},95%,60%,${.02+i%60/150})`;
		X1=0;
		Y1=-60+i;
		X2=cx*2;
		Y2=Y1;
		x.beginPath();
		x.moveTo(X1,Y1);
		x.lineTo(X2,Y2);
		x.stroke();
	}
	
	var t=0,a;
	for(var j=0;j<cx*2+60;j+=15){
		for(var i=0;i<cy*2+60;i+=15){
			a=rand(t-Math.round((cy*2+60)*4/15-cy%2+3)*v[0].t);
			if(a&&a<.045){
				x.fillStyle=`hsla(${220},95%,60%,${a*3})`;
				X1=-60+j+v[0].f;
				Y1=-60+i;
				x.fillRect(X1,Y1,15,15);
			}
			t++;
		}
	}

	var d;
	for(var i=0;i<v[0].p.length;++i){
		v[0].p[i].x+=.7;
		v[0].p[i].x+=v[0].p[i].vx;
		v[0].p[i].y+=v[0].p[i].vy;
		if(v[0].p[i].x>cx*2+80)v[0].p[i].x=-80;
		if(v[0].p[i].y>cy*2+80)v[0].p[i].y=-80;
		if(v[0].p[i].x<-80)v[0].p[i].x=cx*2+80;
		if(v[0].p[i].y<-80)v[0].p[i].y=cy*2+80;
		x1=v[0].p[i].x;
		y1=v[0].p[i].y;
		for(var j=0;j<v[0].p.length;++j){
			if(i!=j){
				x2=v[0].p[j].x;
				y2=v[0].p[j].y;
				d=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
				if(d<150){
					x.beginPath();
					x.moveTo(x1,y1);
					x.lineTo(x2,y2);
					x.lineWidth=1+10/(1+d/10);
					x.strokeStyle=`hsla(${225},100%,60%,${1 - Math.pow(d / 150, .85)})`;
					x.stroke();
				}
			}
		}
	}
	x.lineWidth=1;
	
	for(var i=0;i<v[0].p.length;++i){
		x.beginPath();
		x.arc(v[0].p[i].x,v[0].p[i].y,6,0,Math.PI*2);
		x.fillStyle="#8cf";
		x.globalAlpha=.2;
		x.fill();
		x.beginPath();
		x.arc(v[0].p[i].x,v[0].p[i].y,3,0,Math.PI*2);
		x.globalAlpha=.8;
		x.fillStyle="#fff";
		x.fill();
	}
	x.filter = 'none';
	
	if(v[0].f>60){
		v[0].f=0;
		v[0].t++;
	}
	
	v[0].raf=requestAnimationFrame(()=>{drawPointAnimation(v)});
}

function rand(s){
	return parseFloat('0.'+Math.sin(s+3e4).toString().substr(6));
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

window.onload = function(){
	init();
}
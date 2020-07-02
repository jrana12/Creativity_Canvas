$(function(){
	$("#slider").slider({
		min:3,
		max:30,
		slide:function(event,ui){
			$("#circle").height(ui.value);
			$("#circle").width(ui.value);
		}
	});
	var paint=false;
	var paint_erase = "paint";
	var canvas = document.getElementById("paint");
	var ctx = canvas.getContext("2d");
	var container = $("#container");
	var mouse = {x:0,y:0};
	ctx.lineWidth = 3;
	ctx.lineCap  = "round";
	ctx.lineJoin  = "round";
	container.mousedown(function(e){
		paint=true;
		ctx.beginPath();
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		ctx.moveTo(mouse.x,mouse.y);

	});
	container.mousemove(function(e){
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		if(paint == true){
			if(paint_erase == "paint"){
				ctx.strokeStyle = $("#paint-color").val();
			}
			else{
				ctx.strokeStyle = "white";
			}
			ctx.lineTo(mouse.x,mouse.y);
			ctx.stroke();
		}
		
	});
	container.mouseup(function(){
		paint=false;
	});
	container.mouseleave(function(){
		paint=false;
	});	
	$("#erase").click(function(){
		if(paint_erase == "paint"){
			paint_erase = "erase";
		}
		else{
			paint_erase = "paint";
		}
		$(this).toggleClass("erasemode");

	});
	$("#reset").click(function(){
		location.reload();

	});
	$("#paint-color").change(function(){
		$("#circle").css("background-color",$(this).val());
	})
	$("#slider").slider({
		min:3,
		max:30,
		slide:function(event,ui){
			$("#circle").height(ui.value);
			$("#circle").width(ui.value);
			ctx.lineWidth = ui.value;
		}
	});
});
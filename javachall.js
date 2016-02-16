var windowHeight=$(window).height();
	var menuBarHeight=$("#topBar").height();
	var codeContainerHeight=windowHeight-menuBarHeight;
	
	$(".codeContainer").height(codeContainerHeight+"px");
	$(".toggle").click(function(){
	
		$(this).toggleClass("selected");
	var activeDiv=$(this).html();
		$("#"+activeDiv+"Container").toggle();
	var showingDivs=$(".codeContainer").filter(function(){
		return($(this).css("display")!="none");
		}).length;
	var width=100/showingDivs;
		$(".codeContainer").css("width", width+"%");
	
	});
	
	$("#runButton").click(function(){
		$("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());
		//document.getElementById("codeFrame").contentWindow.eval($("#jsCode").val());
	});
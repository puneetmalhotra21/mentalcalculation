var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
var count=25;
var now = new Date().getTime();
var distance = countDownDate - now;

var app = angular.module("clcApp",[]);
		 
app.controller("drlCtlr",function($scope){
			
	$( document ).ready(function() {
		$("#scope.content").load("blog.htm");
	});
    $scope.score=0;
	$scope.num1=1;  
	$scope.num2= 9;
	
	$scope.num3=42;  
	$scope.num4= 9;
	
	$scope.num5=10;  
	$scope.num6= 99;
	
	$scope.prcntg=50;
	$scope.radius=24;

	$scope.strtCntr = function(){ 
		var conCount=count;
		console.log('hell'+document.getElementById('prgrscrcl'));
		document.getElementById('counter').style="display:block";
		var rstrt =false;
	//	if(document.getElementById("counter").innerHTML=='Time Up!'){

		if($scope.timeUp==true){
			$scope.timeUp=false;
			$scope.prcntg=50;
			count=25;
			$scope.score=0;
			conCount=count;
			document.getElementById('counter').style="display:block";
			document.getElementById('prgrscrcl').style.stroke="#68b242";
			document.getElementById('scrbrd').style="display:none";
			//document.getElementById('tymUp').style="display:none";
		//	document.getElementById('scrbrd').style.display:none;
			
		}
		
		
		if(!rstrt){
			var x = setInterval(function() {
				console.log('count#::'+count+':::'+conCount);
				$scope.prcntg= (100-(count/conCount)*100);
				//console.log('A#::'+$scope.prcntg);
				$scope.progressBar();
				
				count=count-1;
				if (distance < 0 || count<0) {
					
				   clearInterval(x);
				   $scope.timeUp=true;
				}
			}, 1000); 

		
		}
		
		
    }
	$scope.progressBar = function(){

		var x = document.getElementById("prgrscrcl");
		console.log('%::'+$scope.prcntg);
		x.style.strokeDasharray = (6.28*$scope.radius*$scope.prcntg)/100 + ' '+ 6.28*$scope.radius;
		console.log('$scope.prcntg:AA::'+$scope.prcntg);
		
		if($scope.prcntg>25&&$scope.prcntg<=50){
			document.getElementById('prgrscrcl').style.stroke="brown";
		}else if($scope.prcntg >50 && $scope.prcntg<75){
			document.getElementById('prgrscrcl').style.stroke="orange";
		}else if($scope.prcntg >75 && $scope.prcntg<100){
			document.getElementById('prgrscrcl').style.stroke="red";
          

		}else if($scope.prcntg==100){
		
		//	document.getElementById('tymUp').style="color:red;display:block";
			document.getElementById('scrbrd').style="display:block";
			document.getElementById('counter').style="display:none";
			
		}	
		
		//count=5;
	}
	
	$scope.nxtQstn = function(){
		
		$scope.num2= Math.floor(Math.random() * 10);
		$scope.num1= Math.floor(Math.random() * 10);
		$scope.ans='';
		$scope.score++;
	};
	$scope.nxtQstn1 = function(){
		$scope.num3= Math.floor(Math.random() * 100);
		$scope.num4= Math.floor(Math.random() * 10);
		$scope.ans1='';
		$scope.score++;
	};
	$scope.nxtQstn2 = function(){
		$scope.num5= Math.floor(Math.random() * 100);
		$scope.num6= Math.floor(Math.random() * 100);
		$scope.ans2='';
		$scope.score++;
	};
    $scope.callSwitch = function(){
		if($scope.playgame==true){
		document.getElementById("clcOpt").style="display:none";
		document.getElementById("clcgame").style="display:none";
		document.getElementById("artcl").style="display:block";
		}else{
			document.getElementById("clcOpt").style="display:block";
			document.getElementById("clcgame").style="display:block";
			document.getElementById("artcl").style="display:none";
		}
    };

   
});
	     // Calculation App Script Ends
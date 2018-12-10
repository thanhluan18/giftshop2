angular.module('myApp', [])
.controller('demoCtrl', function ($scope) {
	$scope.showMe = false;
  $scope.watchs = [{
    watch:'Images/xai1.jpg',
    title: "Apple Watch Sport 38mm Series 3 - Black (A.03)",
    old : 400,
   	new: 380,
	link:'watchdetail4.html'
  }, {
    watch:'Images/xai2.jpg',
    title: "Apple Watch Sport 38mm Series 2 - Gold (A.02)",
    old : 350,
   	new: 300,
	link:'watchdetail5.html'
  }, {
    watch:'Images/xai3.jpg',
    title: "Apple Watch Sport 38mm Series 1 - Grey (A.01)",
    old :300,
   	new:250,
	link:'watchdetail6.html'
  }, {
    watch:'Images/co1.jpg',
    title: "Analog Black Men's Watch Brand CURNON (W.01)",
    old : 150,
   	new: 120,
	link:'watchdetail1.html',
  }, {
    watch:'Images/co2.jpg',
     title: "Analog White Men's Watch Brand CURNON (W.02)",
    old :180,
   	new: 160,
	link:'watchdetail2.html',
  }, {
    watch:'Images/co3.jpg',
     title: "Analog Black Men's Watch Brand CURNON (W.03)",
    old :170,
   	new: 150,
  link:'watchdetail3.html',
  }]
  $scope.orginalWatchs = angular.copy($scope.watchs,$scope.orginalWatchs);
  
	$scope.resetFn = function() {
	$scope.watchs = angular.copy($scope.orginalWatchs,$scope.watchs);
	$scope.showMe = false;
	} 
  
  
   $scope.searchFn = function() {
	   $scope.showMe = true;
	   
	   if($scope.totalSelected < 2 ){
		   return;
	   }
	   $scope.tmpWatchs = [];
	   	$scope.watchs.forEach(function(el) {
			if(el.selected){
				$scope.tmpWatchs.push(el);
				
			}
    	});
        $scope.watchs = $scope.tmpWatchs;
    }
	$scope.totalSelected = 0;
	$scope.enableBtnSearch = function() {
		$scope.totalSelected = 0;
		$scope.watchs.forEach(function(el) {
			if(el.selected){
			$scope.totalSelected++;
				}
			
			
    	});
    }
	
	$scope.snows = [{
		snow:'Images/snow1.jpg',
		title: "Snowball Santa Claus Brand SNOW (S.01)",
    old : 14,
   	new: 12,
	link:'snowdetail4.html',
		},
		
		{
		snow:'Images/snow2.jpg',
		title: "Snowball with music Brand SNOW (S.02) ",
    old :12,
   	new: 10,
	link:'snowdetail5.html',
		},
		{
		snow:'Images/snow3.jpg',
		title: "Snowball Cinderella Brand SNOW (S.03) ",
    old :11,
   	new: 9,
	link:'snowdetail6.html',
		},
		{
		snow:'Images/iquatang1.jpg',
		title: "Snowball double bear with lights Brand IQuaTang (I.01)",
    old :16,
   	new:14,
	link:'snowdetail1.html',
	},
	
		{
		snow:'Images/iquatang2.jpg',
		title: "Snowball Love You Brand IQuaTang (I.02)",
    old :17,
   	new: 15,
	link:'snowdetail2.html',
		},
		{
		snow:'Images/iquatang3.jpg',
		title: "Snowball Hello Kitty Brand IQuaTang (I.03)",
    old :18,
   	new:16,
	link:'snowdetail3.html',
		}];
  

$scope.orginalSnows = angular.copy($scope.snows,$scope.orginalSnows);
  
	$scope.resetFn1 = function() {
	$scope.snows = angular.copy($scope.orginalSnows,$scope.snows);
	$scope.showMe = false;
	} 
  
  
   $scope.searchFn1 = function() {
	     $scope.showMe = true;
	   if($scope.totalSelected1 < 2){
		   return;
	   }
	   $scope.tmpSnows = [];
	   	$scope.snows.forEach(function(el1) {
			if(el1.selected){
				$scope.tmpSnows.push(el1);
			}
    	});
        $scope.snows = $scope.tmpSnows;
    }
	$scope.totalSelected1 = 0;
	$scope.enableBtnSearch1 = function() {
		$scope.totalSelected1 = 0;
	 	$scope.snows.forEach(function(el1) {
			if(el1.selected){
				$scope.totalSelected1++;
			}
    	});
    }
	
	$scope.bracelets=[{
		bracelet:'Images/vong1.jpg',
		title: "Women's Charm Bracelet Brand AAA (AAA.1)",
    old : 2000,
   	new: 1800,
	link:'braceletdetail1.html',
		},{
		bracelet:'Images/vong2.jpg',
		title: "Women's Charm Bracelet Brand AAA (AAA.2)",
    old :1900,
   	new: 1750,
	link:'braceletdetail2.html',
		},{
		bracelet:'Images/vong3.jpg',
		title: "Women's Charm Bracelet Brand AAA (AAA.3)",
    old :2100,
   	new: 2050,
	link:'braceletdetail3.html',
		},{
		bracelet:'Images/vongtay1.jpg',
		title: "Bracelet Good Feng Shui Brand FS (F.01)",
    old : 500,
   	new: 450,
	link:'braceletdetail4.html',
		},{
		bracelet:'Images/vongtay2.jpg',
		title: "Bracelet Good Feng Shui Brand FS (F.02)",
    old : 1000,
   	new: 900,
	link:'braceletdetail5.html',
		},{
		bracelet:'Images/vongtay3.jpg',
		title: "Bracelet Good Feng Shui Brand FS (F.03)",
    old : 300,
   	new: 250,
	link:'braceletdetail6.html',
		}];
		$scope.orginalBracelets = angular.copy($scope.bracelets,$scope.orginalBracelets);
  
	$scope.resetFn2 = function() {
	$scope.bracelets = angular.copy($scope.orginalBracelets,$scope.bracelets);
	  $scope.showMe = false;
	} 
  
  
   $scope.searchFn2 = function() {
	     $scope.showMe = true;
	   if($scope.totalSelected2 < 2){
		   return;
	   }
	   $scope.tmpBracelets = [];
	   	$scope.bracelets.forEach(function(el2) {
			if(el2.selected){
				$scope.tmpBracelets.push(el2);
			}
    	});
        $scope.bracelets = $scope.tmpBracelets;
    }
	$scope.totalSelected2 = 0;
	$scope.enableBtnSearch2 = function() {
		$scope.totalSelected2 = 0;
	 	$scope.bracelets.forEach(function(el2) {
			if(el2.selected){
				$scope.totalSelected2++;
			}
    	});
    }
	
   
       
    
	});		

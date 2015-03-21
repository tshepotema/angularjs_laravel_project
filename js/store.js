(function(){
		var appCricketStore = angular.module('cricketStore', ['ngRoute']);

		appCricketStore.config(['$routeProvider',
			function ($routeProvider) {
			$routeProvider
			.when('/', 
			{
				controller: 'productsController',
				templateUrl: 'views/featured.html'
			})
			.when('/products/:categoryName', 
			{
				controller: 'productsController',
				templateUrl: 'views/products.html'
			})
			.when('/about', 
			{
				controller: 'contentController',
				templateUrl: 'views/about.html'
			})
			.when('/services', 
			{
				controller: 'contentController',
				templateUrl: 'views/services.html'
			})
			.when('/contact', 
			{
				controller: 'contentController',
				templateUrl: 'views/contact.html'
			})
			.otherwise(
				{
					redirectTo: '/'
				}
			);
		}]);		

		appCricketStore.controller('contentController', ['$scope', contentController]);	
		appCricketStore.controller('globalController', ['$scope', globalController]);	
		appCricketStore.controller('productsController', ['$scope', '$routeParams', productsController]);	

		function contentController($scope) {

			var content = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel elit a ligula bibendum pretium. Phasellus id finibus odio. Sed facilisis ornare pulvinar. Donec pellentesque tempus ullamcorper. Sed nec blandit tortor, eget maximus nulla. Donec ac sem vitae tellus tempus cursus sed id justo. Pellentesque dignissim ligula vel luctus fermentum. Mauris semper nisi nec dui tempus, id finibus nunc placerat. Etiam vitae tristique elit. Praesent mollis, lacus et porta condimentum, tortor sem luctus mi, at tempor lectus erat id purus. Nullam pharetra non orci ac ullamcorper. Nunc condimentum vitae orci in feugiat. Fusce mollis et enim non gravida. Nullam rhoncus tempor tellus ut lobortis. </p>";

			$scope.about_content = "<h3>About us content</h3>" + content;
			$scope.services_content = "<h3>Services us content</h3>" + content;
			$scope.contact_content = "<h3>Contact us content</h3>" + content;
		}

		function globalController($scope) {            
            
            $scope.company_name = "Cricket Company";
            
			$scope.navbar = [{name: 'About', link: '/about'}, {name: 'Services', link: '/services'}, {name: 'Contact', link: '/contact'}];
			$scope.categories = ['Featured', 'Bats', 'Pads', 'Gloves', 'Wicketkeeping', 'Shoes', 'Luggage', 'Protection', 'Accesories'];	

			$scope.active_nav = $scope.categories[0];		

			$scope.selectCategory = function(selectedCategory){
				if (selectedCategory.length < 1) {
					selectedCategory == $scope.categories[0];
				}
				$scope.active_nav = selectedCategory;
			};

		}

		function productsController($scope, $routeParams) {
			$scope.products=[
				{id: 1, name:'Maverick 750', price:3595.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'Gray-Nicolls', stock: true},
				{id: 2, name:'Purist Original', price:6895.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'GM', stock: false},
				{id: 3, name:'Kahuna 850', price:5195.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'Kookaburra', stock: false},
				{id: 4, name:'Gladiator', price:6999.95, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'SS', stock: true},
				{id: 5, name:'Menace 900', price:3495.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'Kookaburra', stock: true},
				{id: 6, name:'Stealth', price:3295.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'Puma', stock: true},
				{id: 7, name:'Evopower 3000', price:2595.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'Puma', stock: false},
				{id: 8, name:'Hybrid I', price:5995.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'D&P', stock: true},
				{id: 9, name:'Vector Players', price:5495.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'D&P', stock: true},
				{id: 10, name:'V600 G3', price:3650.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'Slazenger', stock: true},
				{id: 11, name:'Achieve', price:3495.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'New Balance', stock: true},
				{id: 12, name:'MC Limited Edition', price:3795.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'Spartan', stock: true},
				{id: 13, name:'MC 1000', price:1895.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'Spartan', stock: true},
				{id: 14, name:'Fireblade', price:1195.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'B&S', stock: true},
				{id: 15, name:'Envy JNR', price:1195.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'County', stock: true},
				{id: 16, name:'8000 Gold', price:1795.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'CA', stock: true},
				{id: 17, name:'5000 Gold', price:1450.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'B&S', stock: true},
				{id: 18, name:'T20', price:1995.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'AS', stock: true},
				{id: 19, name:'Fireblade', price:1195.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'B&S', stock: true},
				{id: 20, name:'Launch', price:1425.00, snippet:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet', manufacture: 'New Balance', stock: true}
			];

			$scope.manufactures = [
				{'Featured': [{make:'Gray-Nicolls', total: 11}, {make:'GM', total: 25}, {make:'Kookaburra', total: 55}, {make:'SS', total: 65}, {make:'Puma', total: 50}, {make:'D&P', total: 51}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 52}, {make:'County', total: 55}, {make:'CA', total: 45}, {make:'AS', total: 15}]},
				{'Bats': [{make:'Gray-Nicolls', total: 22}, {make:'GM', total: 25}, {make:'Kookaburra', total: 55}, {make:'SS', total: 65}, {make:'Puma', total: 50}, {make:'D&P', total: 51}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 51}, {make:'County', total: 59}, {make:'CA', total: 35}, {make:'AS', total: 25}]},
				{'Pads': [{make:'Gray-Nicolls', total: 33}, {make:'GM', total: 75}, {make:'Kookaburra', total: 55}, {make:'SS', total: 5}, {make:'Puma', total: 85}, {make:'D&P', total: 5}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 5}, {make:'County', total: 5}, {make:'CA', total: 5}, {make:'AS', total: 5}]},
				{'Gloves': [{make:'Gray-Nicolls', total: 44}, {make:'GM', total: 75}, {make:'Kookaburra', total: 55}, {make:'SS', total: 5}, {make:'Puma', total: 85}, {make:'D&P', total: 5}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 5}, {make:'County', total: 5}, {make:'CA', total: 5}, {make:'AS', total: 5}]},
				{'Wicketkeeping': [{make:'Gray-Nicolls', total: 55}, {make:'GM', total: 75}, {make:'Kookaburra', total: 55}, {make:'SS', total: 5}, {make:'Puma', total: 85}, {make:'D&P', total: 5}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 5}, {make:'County', total: 5}, {make:'CA', total: 5}, {make:'AS', total: 5}]},
				{'Shoes': [{make:'Gray-Nicolls', total: 25}, {make:'GM', total: 75}, {make:'Kookaburra', total: 55}, {make:'SS', total: 5}, {make:'Puma', total: 85}, {make:'D&P', total: 5}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 5}, {make:'County', total: 5}, {make:'CA', total: 5}, {make:'AS', total: 5}]},
				{'Luggage': [{make:'Gray-Nicolls', total: 25}, {make:'GM', total: 75}, {make:'Kookaburra', total: 55}, {make:'SS', total: 5}, {make:'Puma', total: 85}, {make:'D&P', total: 5}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 5}, {make:'County', total: 5}, {make:'CA', total: 5}, {make:'AS', total: 5}]},
				{'Protection': [{make:'Gray-Nicolls', total: 25}, {make:'GM', total: 75}, {make:'Kookaburra', total: 55}, {make:'SS', total: 5}, {make:'Puma', total: 85}, {make:'D&P', total: 5}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 5}, {make:'County', total: 5}, {make:'CA', total: 5}, {make:'AS', total: 5}]},
				{'Accesories': [{make:'Gray-Nicolls', total: 5}, {make:'GM', total: 35}, {make:'Kookaburra', total: 105}, {make:'SS', total: 5}, {make:'Puma', total: 53}, {make:'D&P', total: 5}, {make:'Slazenger', total: 5}, {make:'New Balance', total: 5}, {make:'Spartan', total: 5}, {make:'B&S', total: 5}, {make:'County', total: 5}, {make:'CA', total: 5}, {make:'AS', total: 5}]}
			];

			var listCategories = ['Featured', 'Bats', 'Pads', 'Gloves', 'Wicketkeeping', 'Shoes', 'Luggage', 'Protection', 'Accesories'];

			$scope.categoryIndex = listCategories.indexOf($routeParams.categoryName);

			$scope.categoryName = $routeParams.categoryName;

			$scope.selectedManufacture = "all";

			$scope.priceFilters = [{label: 'Default', value: 0}, {label: 'Low to High', value: 1}, {label: 'High to Low', value: 2}];
			$scope.selectedPriceFilter = $scope.priceFilters[0];

		}

})(); 

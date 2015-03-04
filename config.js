(function(){
    sources = {
    "1": {
       icon: "https://d3oypxn00j2a10.cloudfront.net/0.15.4/favicon_whale.png",
       url: "http://www.google.com.br"
    },
    "2": {
       icon: "https://d3oypxn00j2a10.cloudfront.net/0.15.4/favicon_whale.png",
       url: "http://www.techtudo.com.br"
    },
    "3":{
       icon: "https://d3oypxn00j2a10.cloudfront.net/0.15.4/favicon_whale.png",
       url: "http://www.kabum.com.br"
    },
    "4":{
       icon: "https://d3oypxn00j2a10.cloudfront.net/0.15.4/favicon_whale.png",
       url: "http://www.uol.com.br"
    },
    "5":{
       icon: "https://d3oypxn00j2a10.cloudfront.net/0.15.4/favicon_whale.png",
       url: "http://www.teste.com.br"
    }};
    
    var app = angular.module("postModule", []);
     
    app.directive("configDirective", function(){

        return {
            restrict: "E",
            templateUrl: "config-directive.html",
            controller: ['$scope', function($scope){
				
				this.sources = [];
				
				this.loadSources = function(){
				    this.sources = sources;
				    this.new_source = {url: "", icon: ""};
				    this.sources["new"] = this.new_source;	
				    this.dataLoaded = true;
				    
				} ;
				
				this.limitStr = function(text, size){
			        if (!size)
                        size = 15;
				    if( text.length > size){
						
						return text.slice(0, size) + " ...";
					}					
					return text;					
				};
								
				this.saveSource = function(){
					this.new_source.icon = "http://cdn.sstatic.net/stackoverflow/img/favicon.ico?v=00a326f96f68";
					this.sources["new"] = this.new_source;
					this.new_source = {url: "", icon: ""};
					console.log(this.sources);
				};
				
				this.removeSource = function(id){
					  delete this.sources[id]					
					};
				
				this.isValid = function(source){
					
					if (source.url){
						return true;	
					}
					
					return false;
				};
				
				this.loadSources();
			}],
            controllerAs: "cfgCtrl"
        }//return
        
    });//configDirective
    
    
})();


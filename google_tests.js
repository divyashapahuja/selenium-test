var webdriver=require('selenium-webdriver'),
rl=require('readline-sync'),
test=require('selenium-webdriver/testing'),
assert=require('assert'),
mocha=require('mocha'),
chai=require('chai'),
chaiAsPromised=require('chai-as-promised'),
should=chai.should(),
expect=chai.expect;

chai.use(chaiAsPromised);

var driver=new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
var search_text=rl.question('Enter text to search: ');

Key=webdriver.Key;
By=webdriver.By;

test.describe('Google Search',function(){
	this.timeout(60000);


	test.beforeEach(function(){
		//this.timeout(3000);
                //setTimeout(function(done){

            driver.get('http://www.google.com');
         	//done();
                // },3000)
       
	});

	test.after(function(){
		//this.timeout(60000);
		//setTimeout(function(done){
			driver.close();
		//	done();
		//},60000);
		
	});

	test.it('has title',function(){
		//var promise;
                //this.timeout(5000);
                //promise=new Promise(function(resolve,reject){
        	//setTimeout(function(done){
        		driver.getTitle().then(function(title){
        			expect(title).equals('Google')
        		});
        	//  done()
        	//},5000);
		// });
		// return promise;	
	});
   
    test.it('text is the same as entered',function(){
    	//this.timeout(10000);
    	//setTimeout(function(done){
    		 var search=driver.findElement(By.id('lst-ib'))
             search.sendKeys(search_text);
             search.getAttribute('value').then(function(value){
             	assert.equal(value,search_text);
            });
	         
	// done();
    	//},10000)
    });

    test.it('languages are present',function(){
    	var promise;

         promise=new Promise(function(resolve,reject){
         	setTimeout(function(done){
                var lang=driver.findElement(By.id('SIvCob'));
    	        var langs=String(lang.getText());
                langs.should.contain('Google offered in:');
                resolve();
            },5000);
        });
        
  
    });			
});
   

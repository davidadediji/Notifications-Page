const {Builder, By} = require('selenium-webdriver');
var chai = require('chai');
const dotenv = require('dotenv')

dotenv.config();

let email = process.env.VALID_EMAIL;
let password = process.env.VALID_PASSWORD;
let wrongEmail = process.env.INVALID_EMAIL;
let invalidPassword = process.env.INVALID_PASSWORD;


describe('LinkedIn Login', ()=>{ 
    it('should login with valid credentials', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://capicollect.capitalsage.ng/login');
        await driver.findElement(By.id('email')).sendKeys(`${email}`);
        await driver.findElement(By.id('password')).sendKeys(`${password}`);
        await driver.findElement(By.xpath('/html/body/div/div[1]/div/div[2]/div/form/button')).click();
        await driver.close();
    })
    it('should throw error with wrong inputs', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://capicollect.capitalsage.ng/login');
        await driver.findElement(By.id('email')).sendKeys(`capiflex more`);
        await driver.findElement(By.id('password')).sendKeys(`capitalbank`);
        await driver.findElement(By.xpath('/html/body/div/div[1]/div/div[2]/div/form/button')).click();
        let errorText = await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[2]/div/div/div")).getText().then((value)=>value)
        chai.expect(errorText).to.eql('Whoops! Something went wrong.');

        await driver.close();
    })
    it('should throw error with valid email, invalid password', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://capicollect.capitalsage.ng/login');
        await driver.findElement(By.id('email')).sendKeys(`${email}`);
        await driver.findElement(By.id('password')).sendKeys(`${invalidPassword}`);
        await driver.findElement(By.xpath('/html/body/div/div[1]/div/div[2]/div/form/button')).click();
        let errorText = await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[2]/div/div/div")).getText().then((value)=>value)
        chai.expect(errorText).to.eql('Whoops! Something went wrong.');
    })

    it('should throw error with valid email, invalid password', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://capicollect.capitalsage.ng/login');
        await driver.findElement(By.id('email')).sendKeys(`${wrongEmail}`);
        await driver.findElement(By.id('password')).sendKeys(`${password}`);
        await driver.findElement(By.xpath('/html/body/div/div[1]/div/div[2]/div/form/button')).click();
        let errorText = await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[2]/div/div/div")).getText().then((value)=>value)
        chai.expect(errorText).to.eql('Whoops! Something went wrong.');
    })

})



    //it('udemy_exercises' , () => {
    //     cy.visit('https://skleptest.pl/')
    //     cy.get('.top-account > a').click()
    //     cy.get('.u-column2 > h2').should('have.text', 'Regisytytytter')
    //     cy.get('#reg_email').type('uuujjjjk@gmail.com')
    // Find LOCATORS
    // by tag name
    //cy.get('input')
    //by ID
    //cy.get('#inputEmail1')
    //by class name
    //cy.get('.input-full-width')
    //by attribute name
    //cy.get('[placeholder]')
    // by name and value
    //cy.get('[placeholder="Email"]')
    // by class value
    //cy.get('[class="input-full-width size-medium shape-rectangle"]')



    //cy.get('nb-card')
    //it('udemy_exercises2' , () => {cy.visit('http://localhost:4200')
    //cy.contains('Forms').click()
    //cy.contains('Form Layouts').click()
    //cy.get('[data-cy="imputEmail1"]')
    //cy.get('[data-cy="pietrek"]')
    //cy.get('[data-cy="signInButton"]').contains("Sign in")
    //})
//pole email
//<input _ngcontent-qaw-c19="" data-cy="imputEmail1" fullwidth="" 
//id="inputEmail1" nbinput="" placeholder="Email" 
//type="email" ng-reflect-full-width="" class="input-full-width size-medium shape-rectangle">







    // cy.get('#inputEmail1')
    // cy.get('[data-cy="pietrek"]')

    // by tag name
    //--- email field
    //<input _ngcontent-bbx-c19="" 
        //data-cy="imputEmail1" fullwidth="" id="inputEmail1" nbinput="" 
        //placeholder="Email" type="email" ng-reflect-full-width="" 
        //class="input-full-width size-medium shape-rectangle">
    //</input>
    //-----
    //---- password field
    /*
<input _ngcontent-bbx-c19="" fullwidth=""
 id="inputPassword2" nbinput="" placeholder="Password" 
 type="password" ng-reflect-full-width="" class="input-full-width size-medium shape-rectangle">
    */
//})

//it('sklep_rejestracja_konta', () => {
    
    //cy.visit('https://skleptest.pl/')
    //cy.contains('Account').click()
    
    //cy.get('li') ;
    //cy.get('.top-account').click()
    

    //cy.get('#reg_email').type("emailTest" + Math.random() + "@o2.pl")
    //cy.get('#reg_password').type("!QAZ2wsx3edc12")
    //cy.contains('input','Register').click()
    //cy.get('.woocommerce-MyAccount-content > :nth-child(1)').should('contain', "Hello ")
    //cy.get('[href="https://skleptest.pl/my-account/customer-logout/"]').click()
    //cy.get('.woocommerce-message >a').click()
    //cy.get('input')
    //cy.get('.woocommerce-Input').click()
//pole email
//<input type="email" class="woocommerce-Input woocommerce-Input--text input-text" 
//name="email" id="reg_email" value="">
//pole password
//<input type="password" class="woocommerce-Input woocommerce-Input--text input-text"
// name="password" id="reg_password">
//})
describe('Automation exercise',() => {
})    

it('Test Case 1: Register User', ()=>{
cy.visit('http://automationexercise.com')
cy.get('.logo').should('be.visible')
cy.contains('Signup / Login').click()
cy.get('h2').should('contain' , 'New User Signup!')
cy.get('[data-qa="signup-name"]').type('text')
cy.get('[data-qa="signup-email"]').type('emailTest' + Math.random() + '@gmail.com')
cy.get('[data-qa="signup-button"]').click()
cy.get(':nth-child(1) > b').invoke('prop', 'innerText').then($text => {
    let x = $text
    cy.log(x)
    expect(x).eq("ENTER ACCOUNT INFORMATION")
})

cy.get('#id_gender1').click()
cy.get('#password').type('!samplePassword1')
cy.get('[data-qa="days"]').select(25)
cy.get('[data-qa="months"]').select('October')
cy.get('[data-qa="years"]').select('1982')
cy.get('#newsletter').click()
cy.get('#optin').click()
cy.get('#first_name').type('Piotr')
cy.get('#last_name').type('Kuna')
cy.get('#company').type('Seagull')
cy.get('#address1').type('Apostolou Titou 13 00-250 Agios Nicolaos')
cy.get('#address1').invoke('val').then($text => {
    let x = $text
    cy.log(x)
    expect(x).eq("Apostolou Titou 13 00-250 Agios Nicolaos")
})
cy.get('#address2').type('Solidarności 18 01-031 Warszawa')
cy.get('[data-qa="country"]').select('Israel')
cy.get('#state').type('Mazovian')
cy.get('#city').type('Tel-Aviv')
cy.get('#zipcode').type('00-330')
cy.get('#mobile_number').type('123456789')
cy.get('[data-qa="create-account"]').click()
cy.get('[data-qa="account-created"]').should('have.text','Account Created!')
cy.get('[data-qa="continue-button"]').click()
cy.get(':nth-child(10) > a').should('be.visible')
cy.get('.shop-menu > .nav > :nth-child(5)').click()
cy.get('[data-qa="account-deleted"]').should('have.text','Account Deleted!')
cy.get('[data-qa="continue-button"]').click()
})
    let loginLocator = '[data-qa="login-email"]';
    let login = 'nemo@o2.pl';
    let passwordLocator = '[data-qa="login-password"]';
    let password = 'nemo12345';
    let loginButton = '[data-qa="login-button"]'
    let registerLocator = '[data-qa="signup-name"]'
    let registerName = 'nemo'
    let emailLocator = '[data-qa="signup-email"]'
    let registerEmail = 'nemo@o2.pl'
    let signUpButton = '[data-qa="signup-button"]'
it('Test Case 2: Login User with correct email and password', ()=>{
    cy.visit('http://automationexercise.com')
    cy.get('.logo').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="signup-name"]').type('nemo')
    cy.get('[data-qa="signup-email"]').type('nemo@o2.pl')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('#password').type('nemo12345')
    cy.get('[data-qa="days"]').select(25)
    cy.get('[data-qa="months"]').select('October')
    cy.get('[data-qa="years"]').select('1982')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('#first_name').type('Piotr')
    cy.get('#last_name').type('Kuna')
    cy.get('#company').type('Seagull')
    cy.get('#address1').type('Apostolou Titou 13 00-250 Agios Nicolaos')
    cy.get('#address2').type('Solidarności 18 01-031 Warszawa')
    cy.get('[data-qa="country"]').select('Israel')
    cy.get('#state').type('Mazovian')
    cy.get('#city').type('Tel-Aviv')
    cy.get('#zipcode').type('00-330')
    cy.get('#mobile_number').type('123456789')
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="account-created"]').should('have.text','Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.contains('Signup / Login').click()
    cy.get('.login-form').should('contain.text','Login to your account')
    cy.UserLog(loginLocator,login,passwordLocator,password,loginButton)
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(5)').click()
    cy.get('[data-qa="account-deleted"]').should('have.text','Account Deleted!')
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="signup-name"]').type('nemo')
    cy.get('[data-qa="signup-email"]').type('nemo@o2.pl')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('#password').type('nemo12345')
    cy.get('[data-qa="days"]').select(25)
    cy.get('[data-qa="months"]').select('October')
    cy.get('[data-qa="years"]').select('1982')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('#first_name').type('Piotr')
    cy.get('#last_name').type('Kuna')
    cy.get('#company').type('Seagull')
    cy.get('#address1').type('Apostolou Titou 13 00-250 Agios Nicolaos')
    cy.get('#address2').type('Solidarności 18 01-031 Warszawa')
    cy.get('[data-qa="country"]').select('Israel')
    cy.get('#state').type('Mazovian')
    cy.get('#city').type('Tel-Aviv')
    cy.get('#zipcode').type('00-330')
    cy.get('#mobile_number').type('123456789')
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="account-created"]').should('have.text','Account Created!')
    cy.get('[data-qa="continue-button"]').click()
})
it('Test Case 3: Login User with incorrect email and password', ()=>{
    cy.visit('http://automationexercise.com')
    cy.get('.logo').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.get('.login-form').should('contain.text','Login to your account')
    cy.get('[data-qa="login-email"]').type('nemo1@o2.pl')
    cy.get('[data-qa="login-password"]').type('nemo123456')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
})
it('Test Case 4: Logout User', ()=>{
    cy.visit('http://automationexercise.com')
    cy.get('.logo').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.get('.login-form').should('contain.text','Login to your account')
    cy.UserLog(loginLocator,login,passwordLocator,password,loginButton)
    cy.get('[data-qa="login-email"]').type('nemo@o2.pl')
    cy.get('[data-qa="login-password"]').type('nemo12345')
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > form').should('be.visible')
})
it('Test Case 5: Register User with existing email', ()=>{
    cy.visit('http://automationexercise.com')
    cy.get('.logo').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.get('h2').should('contain' , 'New User Signup!')
    cy.userRegister(registerLocator,registerName,emailLocator,registerEmail,signUpButton)
    cy.get('.signup-form > form > p').should('be.visible').should('have.text' , 'Email Address already exist!')
})    
it.only('Test Case 6: Contact Us Form', ()=>{
    cy.visit('http://automationexercise.com')
    cy.get('.logo').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
    cy.get('.title').should('be.visible').should('contain','Get In Touch')
    cy.get('[data-qa="name"]').type('John')
    cy.get('[data-qa="email"]').type('nemo@o2.pl')
    cy.get('[data-qa="subject"]').type('sampleTest')
    cy.get('[data-qa="message"]').type('Hello World!!!')
    cy.xpath('//input[text()="Wybierz plik"]').click(
      
    )
})     
      
it('eBay-tc1', ()=>{
    cy.visit('https://www.ebay.pl/')
    cy.get('#gdpr-banner-accept').click()
    cy.get('#gh-logo').should('be.visible')
    cy.get('.gh-tb').type('iphone')
    cy.get('#gh-btn').click()
    cy.get('[class="textbox x-textrange__input x-textrange__input--from"]')
      .type('100')
    cy.get('[class="textbox x-textrange__input x-textrange__input--to"]')
      .type('1000')
    cy.get('.btn--states').should('be.visible').click()  
    cy.get('.remove-filter-link').should('be.visible')
    cy.get('.s-item__wrapper')
      .parents('ul')
      .find('.s-item__price')
      .then((prices) =>{
       let expectPrices = (Array.from(prices).map((price) => parseFloat(price.innerText)))
       expect(expectPrices.every((price)=> price >=100 && price <=1000)).to.be.true
      })

   // cy.get('.s-item__wrapper')
     // .parents('ul')
      //.find('.s-item__title')
     // .each((el)=>{
   // cy.wrap(el)
      //.invoke('text')
     // .then((text) => {
      // expect(text.toLowerCase()).to.contain('iphone');
      })
      //cy.get('.s-item__wrapper')
       //.parents('ul')
       //.find('.s-item__price')
       //.each((el)=>{
       // cy.wrap(el).should('not.be.empty')
      // })
      
       
       //})
    
   //cy.xpath('//span[text()="60"]').then((text)=>{
       //let expectedNumberOfResults = text.text()
       //let number1 = parseInt(expectedNumberOfResults)
   //cy.log(number1)
   //cy.get('.s-item__wrapper')
     //.parents('ul')
     //.find('.s-item__info')
     //.should('have.length',number1)
   //cy.get('#srp-ipp-menu').click()
   //cy.xpath('//span[text()="120"]').click().then((text)=>{
       //let expectedNumberOfResults = text.text()
       //let number1 = parseInt(expectedNumberOfResults)
   //cy.log(number1)
   //cy.get('.s-item__wrapper')
     //.parents('ul')
     //.find('.s-item__info')
       //.should('have.length',number1)
    //})
   // cy.get('#srp-ipp-menu').click()
   // cy.xpath('//span[text()="240"]').click().then((text)=>{
      //  let expectedNumberOfResults = text.text()
      //  let number1 = parseInt(expectedNumberOfResults)
    //cy.log(number1)
  //  cy.get('.s-item__wrapper')
    //  .parents('ul')
     // .find('.s-item__info')
     // .should('have.length',number1)
   //})
    //}) 
   
//cy.get('#srp-ipp-menu').click()
      //cy.get('[href="https://www.ebay.pl/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_ipg=240"]')
        //.click()
        //.invoke('text').then((text)=>{
            //const substring = text.substring(38)
           // let expectedNumberOfResults2 = substring
           // let number1 = parseInt(expectedNumberOfResults)
        
        //cy.log(number1)
      //  cy.get('.s-item__wrapper')
         // .parents('ul')
          //.find('.s-item__info')
          //.should('have.length',number1)
    //})
    
    
//})
  
  it('specTest' , ()=>{
    cy.visit('http://localhost:4200/pages')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.get('[data-cy="signInButton"]')
    cy.contains('Sign in')
    cy.contains('[status="warning"]','Sign in')
    cy.get('#inputEmail3')

  })

     // cy.get('.s-item__wrapper').parents('ul').find('.s-item__info').eq()
        
    //cy.get('').its('length')
//})
//cy.get('#liczba-wynikow-input').invoke('val').then((value) => {
    // Tutaj możesz wykonać odpowiednie działania na pobranej wartości
  //  cy.log('Liczba wyników na stronę:', value);
   //cy.get(substring).eq('.s-item__info')
//cy.get('#srp-ipp-menu')
      //.parents('div')
      //.find('div')
      //.invoke('text').then((text)=>{
       //const substring = text.substring(38)

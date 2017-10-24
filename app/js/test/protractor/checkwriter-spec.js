  describe('CheckWriter App', function() {

      var inputBox = element(by.css('.form-control'));
      var confirmButton = element(by.id('confirmButton'));
      var clearButton = element(by.id('clearButton'));
      var result = element(by.id('resultsId'));

      beforeEach(function() {
          browser.get('http://127.0.0.1:51084/app/index.html');
      });

      it('should have a title', function() {
          expect(browser.getTitle()).toEqual('Cheque Writer Application');
      });

      it('should have a Convert Button', function() {
          expect(confirmButton.getText()).toBe('Currency Value');
      });

      it('should have a Inout Box', function() {
          expect(inputBox.isPresent()).toBeTruthy();
      });

      it('should convert number to words', function() {
          inputBox.sendKeys(12);
          confirmButton.click();
          expect(result.getText()).toEqual('Twelve dollars only');
      });

      it('should validate Negative Numbers', function() {
          inputBox.sendKeys(-12);
          confirmButton.click();
          expect(result.getText()).toEqual('Please enter positive digits dollars only');
      });

      it('should validate very Large Numbers', function() {
          inputBox.sendKeys(7398721371927392187);
          confirmButton.click();
          expect(result.getText()).toEqual('Please enter smaller digit dollars only');
      });

      it('clear button should reset input box and displayed results', function() {
          inputBox.sendKeys(7398721371927392187);
          confirmButton.click();
          expect(result.getText()).toEqual('Please enter smaller digit dollars only');
          clearButton.click();
          expect(result.getText()).toEqual('');
          expect(inputBox.getText()).toEqual('');

      });
      
      it('should validate alphanumeric characters', function() {
          inputBox.sendKeys('@@@77%%%#$#');
          confirmButton.click();
          expect(result.getText()).toEqual('Invalid entry. Please enter a number to continue');
      });
      
       it('should validate when no input is provided', function() {
          inputBox.sendKeys('');
          confirmButton.click();
          expect(result.getText()).toEqual('Invalid entry. Please enter a number to continue');
      });
      
       it('should display round off to two decimal places and display fraction when decimal no is provided', function() {
          inputBox.sendKeys(12.86563253);
          confirmButton.click();
          expect(result.getText()).toEqual('Twelve dollars and 87/100 cents.');
      });
      
      it('should display number and append word "only" if there is zero after decimal points ', function() {
          inputBox.sendKeys(12.00);
          confirmButton.click();
          expect(result.getText()).toEqual('Twelve dollars only');
      });
  });
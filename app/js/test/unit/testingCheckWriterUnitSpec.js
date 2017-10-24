describe('Testing CheckWriter Application Suite', function() {
    describe('Testing CheckWriter Application Controller', function() {

        beforeEach(module('chequeWriterApplication'));

        var scope, ctrl;
        var checkSerivce;
        var concatanateService;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('chequeController', {
                $scope: scope
            });
        }));


        beforeEach(function() {
            inject(function($injector) {
                checkSerivce = $injector.get('ChequeWriterFactory');
            });
        });

        beforeEach(function() {
            inject(function($injector) {
                concatanateService = $injector.get('ConcatenationFactory');
            });
        });

        it('it should initialize title in scope', function() {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("ChequeWiterApplication");

        });

        it('should should not accept negative numbers', function() {
            var result = checkSerivce.convertCheck(-1);
            expect(result).toBe('Please enter positive digit');
        });

        it('should add convert number to words', function() {
            var result = checkSerivce.convertCheck(0);
            expect(result).toBe('Zero');
        });

        it('should add convert number to words', function() {
            var result = checkSerivce.convertCheck(1000);
            expect(result).toBe('one thousand ');
        });

        it('should add convert number to words', function() {
            var result = checkSerivce.convertCheck(732987932);
            expect(result).toBe('seven hundred thirty two million nine hundred eighty seven thousand nine hundred thirty two');
        });

        it('should not accept very large numbers', function() {
            var result = checkSerivce.convertCheck(7373819379092182781);
            expect(result).toBe('Please Enter smaller Digit');
        });

      
        it('should concatanateNumbers', function() {
            var result = concatanateService.concatanate('Two hundred', 15);
            expect(result).toBe('Two hundred dollars and 15/100 cents.');
        });

        it('should concatanateNumbers', function() {
            var result = concatanateService.concatanate('Two hundred', 00);
            expect(result).toBe('Two hundred dollars only');
        });


    });

});
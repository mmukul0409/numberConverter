describe('Testing Ang TEst Suite', function() {
    describe('Testing Ang Controller', function() {

        beforeEach(module('testingAngularApp'));

        var scope, ctrl;
        var checkSerivce;
        var concatanateService;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('checkController', {
                $scope: scope
            });
        }));



        beforeEach(function() {
            inject(function($injector) {
                checkSerivce = $injector.get('EnglishCheckWriter');
            });
        });

        beforeEach(function() {
            inject(function($injector) {
                concatanateService = $injector.get('ConcatenationService');
            });
        });

        it('it should initialize title in scope', function() {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("CheckWiterApplication");

        });

        it('should should not accept negative numbers', function() {
            var result = checkSerivce.convertCheck(-1);
            expect(result).toBe('Please enter Positive Digits');
        });

        it('should add convert number to words', function() {
            var result = checkSerivce.convertCheck(0);
            expect(result).toBe('Zero');
        });

        it('should add convert number to words', function() {
            var result = checkSerivce.convertCheck(1000);
            expect(result).toBe('One Thousand ');
        });

        it('should add convert number to words', function() {
            var result = checkSerivce.convertCheck(732987932);
            expect(result).toBe('Seven Hundred Thirty Two Million Nine Hundred Eighty Seven Thousand Nine Hundred Thirty Two');
        });

        it('should not accept very large numbers', function() {
            var result = checkSerivce.convertCheck(7373819379092182781);
            expect(result).toBe('Please Enter a smaller Digit');
        });

        it('should concatanateNumbers', function() {
            var result = concatanateService.concatanate('Two hundred', 15);
            expect(result).toBe('Two hundred and 15/100');
        });

        it('should concatanateNumbers', function() {
            var result = concatanateService.concatanate('Two hundred', 00);
            expect(result).toBe('Two hundred only');
        });

    });

});
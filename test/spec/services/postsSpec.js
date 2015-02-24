describe('Posts Service', function() {
    var mockPostResource, $httpBackend;

	beforeEach(module('yoBootstrapApp'));

	beforeEach(inject(function ($rootScope, _$controller_, _$httpBackend_, posts) {
	    $scope = $rootScope.$new();
	    $controller = _$controller_;
	    $httpBackend = _$httpBackend_;
	    service = posts;
	}));

	it('all() should send GET', function() {
        $httpBackend.expectGET('http://54.72.3.96:3000/posts')
            .respond([{
            _id: '1'
        }]);

        var result = service.all();

        $httpBackend.flush();
	});
});
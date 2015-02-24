describe('BlogPost directive', function() {
    var element, scope;

    beforeEach(module('yoBootstrapApp'));
    beforeEach(module('ngMockE2E'));
    // beforeEach(module("my.templates"));


    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_, $injector) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
      $httpBackend = _$httpBackend_;
      var str = '<article>'
            +'<div>'
              +'<a ng-href="#/post/{{article._id}}"><img ng-src="{{article.image}}"></a> '
             +'<h4><a ng-href="#/post/{{article._id}}">{{article.title}}</a></h4> '
             +'<div class="info"> '
             +'<span>{{article.date | date}}</span> '
             +'<a href="#">by {{article.author}}</a> '
             +'<div class="social"> '
             +'<ul> '
             +'<li class="facebook"> '
             +' <span class="logo"></span> '
             +'<span class="number">16</span> '
             +'</li> '
             +'<li class="google"> '
             +'<span class="logo"></span> '
             +'<span class="number">7</span> '
             +'</li> '
             +'<li class="twitter"> '
             +'<span class="logo"></span> '
             +'<span class="number">15</span> '
             +'</li> '
             +'<li class="vk"> '
             +'<span class="logo"></span> '
             +'<span class="number">16</span> '
             +'</li> '
             +'<li class="yandex"> '
             +'<span class="logo"></span> '
             +'<span class="number">0</span> '
             +'</li> '
             +'</ul> '
             +'</div> '
             +'</div> '
             +'<p>{{article.text | preview}}</p> '
             +'<button class="btn btn-default" type="button" ng-click="removePost(article)">Remove</button> '
             +'</div> '
             +'</article>';
      element = angular.element(str);


      // $httpBackend.whenGET('views/blog-post.html').passThrough();
    }));

    it("should render the header and text as passed in by $scope",
        inject(function() {

          // $httpBackend.expectGET('views/blog-post.html')
          //     .respond(
                // );

          // $compile the template, and pass in the $scope.
          // This will find your directive and run everything
          var template = $compile(element)($scope);

          $scope.article = {
            date: new Date('2015-01-18T11:58:31.789Z'),
            smth: 'smth',
            author: 'arti',
            _id: '2'
          };

          // Now run a $digest cycle to update your template with new data
          $scope.$digest();

          // Render the template as a string
          var templateAsHtml = template.html();
          console.log(template);
          console.log(templateAsHtml);

          // Verify that the $scope variables are in the template
          expect(templateAsHtml).toContain($scope.article.author);

        }));
});
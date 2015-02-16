angular.module('yoBootstrapApp')
    .service('arrayService', function() {
        this.get = function() {
            return [{
                title: 'Home',
                text: 'my homey'
            }, {
                title: 'About',
                text: 'about me'
            }, {
                title: 'Contact',
                text: 'my contacts'
            }, {
                title: 'Contact2',
                text: 'my contacts2'
            }, {
                title: 'Contact3',
                text: 'my contacts3'
            }];
        };
    })

.service('indexService', function() {
    var index = 0;
    this.get = function() {
        return index;
    }
    this.set = function(newIndex) {
        index = newIndex;
    }
});
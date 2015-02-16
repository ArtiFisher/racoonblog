angular.module('yoBootstrapApp')
    .service('array', function() {
        this.get = (function() {
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
        });
    })

.service('index', function() {
    this.index = 0;
    this.get() {
        console.log('getIndex() = ' + this.index);
        return this.index;
    }
    this.set(newIndex) {
        this.index = newIndex;
        console.log('setIndex(' + newIndex + ')');
    }
});

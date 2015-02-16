angular.module('yoBootstrapApp')
    .provider('arrayProvider', function() {
        return {
            $get: function() {
                return{
                    get : function() {
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
                    }
                }
            }
        }
    })

.provider('indexProvider', function() {
    var index = 0;
    return {
        $get: function() {
            return{
                get : function() {
                    return index;
                },
                set : function(newIndex) {
                    index = newIndex;
                }
            }
        }
    }
});
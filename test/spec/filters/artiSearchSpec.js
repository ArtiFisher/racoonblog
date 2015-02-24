'use strict';

describe('ArtiSearch', function() {
    beforeEach(module('yoBootstrapApp'));

    var artiSearch, input, result;
    input = [{
        date: new Date('2015-02-18T11:58:31.789Z'),
        smth: 'smth',
        author: 'arti',
        _id: '1'
    }, {
        date: new Date('2015-01-18T11:58:31.789Z'),
        smth: 'smth',
        author: '',
        _id: '2'
    }, {
        date: new Date('2014-02-18T11:58:31.789Z'),
        smth: 'smth',
        author: 'notarti'
    }, {
        date: new Date('2015-02-18T10:58:31.789Z'),
        _id: '4',
        author: 'arti'
    }];
    result = [{
        date: new Date('2015-02-18T11:58:31.789Z'),
        smth: 'smth',
        author: 'arti',
        _id: '1'
    }, {
        date: new Date('2015-02-18T10:58:31.789Z'),
        _id: '4',
        author: 'arti'
    }];
    beforeEach(inject(function($filter) {
        artiSearch = $filter('artiSearch');
    }));

    it('should work fine', function() {
            expect(artiSearch(input)).toEqual(result);
    });
});

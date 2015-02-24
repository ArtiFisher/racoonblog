'use strict';

describe('DateSorting', function() {
    beforeEach(module('yoBootstrapApp'));

    var dateSort, input, result;
    input = [{
        date: new Date('2015-02-18T11:58:31.789Z'),
        smth: 'smth',
        _id: '1'
    }, {
        date: new Date('2015-01-18T11:58:31.789Z'),
        smth: 'smth',
        _id: '2'
    }, {
        date: new Date('2014-02-18T11:58:31.789Z'),
        smth: 'smth',
    }, {
        date: new Date('2015-02-18T10:58:31.789Z'),
        _id: '4'
    }];
    result = [{
        date: new Date('2014-02-18T11:58:31.789Z'),
        smth: 'smth',
    }, {
        date: new Date('2015-01-18T11:58:31.789Z'),
        smth: 'smth',
        _id: '2'
    }, {
        date: new Date('2015-02-18T10:58:31.789Z'),
        _id: '4'
    }, {
        date: new Date('2015-02-18T11:58:31.789Z'),
        smth: 'smth',
        _id: '1'
    }];
    beforeEach(inject(function($filter) {
        dateSort = $filter('dateSort');
    }));

    it('should work fine', function() {
            expect(dateSort(input)).toEqual(result.reverse());
    });
});

describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('getDescendingNumbers function', function () {
        it('should return array of numbers from a to b (include) desc', function () {
            expect(app.getDescendingNumbers(10, 5)).toEqual("10 9 8 7 6 5");
            expect(app.getDescendingNumbers(10, 7)).toEqual("10 9 8 7");
        });
    });
    describe('areaOfTrapezoid function', function () {
        it('should return area of trapezoid', function () {
            expect(app.areaOfTrapezoid(1,1,2)).toEqual(2);
            expect(app.areaOfTrapezoid(1,4,2)).toEqual(5);
        });
    });
    describe('maxArray function', function () {
        it('should return max number from array', function () {
            expect(app.maxArray([1,1,2])).toEqual(2);
            expect(app.maxArray([1,5,7])).toEqual(7);
            expect(app.maxArray(["assd",5,2])).toEqual(false);
            expect(app.maxArray([1,true,2])).toBe(false);
            expect(app.maxArray([2,7,'z',2])).toBe(false);
            expect(app.maxArray([2,7, ,2])).toBe(false);
        });
        it
    });
    describe('squareOdd function', function(){
        it('should return array of numbers',function() {
            expect(app.squareOdd([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 9, 4, 25, 6]);
            expect(app.squareOdd([2,4,31])).toEqual([2,4,961]);
        });
        it('should return false',function(){
            expect(app.squareOdd([1,"dsa", ,5,6])).toBe(false);
            expect(app.squareOdd([false,"dsa", ,' ',6])).toBe(false);
        });
    })
});

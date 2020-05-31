describe('Dot', () => {
    const dot = require('../dist/lib/dot');

    describe('Dot function', () => {
        it('should perfor dot product on a vector A and a vector of vectors B', () => {
            expect(dot.default([[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]], [[4], [0], [2]])).toEqual([[2], [6], [6], [2]]);
        });

        it('should perfor dot product on a vector A and a vector B', () => {
            expect(dot.default([[0, 1, 1, 0], [0, 1, 0, 1], [1, 1, 1, 1]], [[1], [2], [3], [4]])).toEqual([[5], [6], [10]]);
        });
    });

    describe('Errores', () => {
        it('should raise vector shape exception', () => {
            expect(() => dot.default([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [7, 8])).toThrowError(Error);
        });
    });
});
describe('Array.prototype.T', () => {
    require('../dist/lib/transpose');

    describe('transpose', () => {
        it('should transpose nested array', () => {
            expect([[0, 1, 1, 0]].T()).toEqual([[0], [1], [1], [0]]);
        });

        it('should transpose vector of vectors', () => {
            expect([[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]].T()).toEqual([[0, 1, 1, 0], [0, 1, 0, 1], [1, 1, 1, 1]]);
        });
    });

    describe('Errores', () => {
        it('should raise an Error as T() is only available for array type', () => {
            expect(() => "abcdefghi".T()).toThrowError(TypeError);
        });
    });
});
describe('random', () => {
    const random = require('../dist/lib/random');

    describe('class functions', () => {
        it('should the random algorithm seed to 1', () => {
            random.default.seed(1);
            expect(random.default._seed).toEqual(1);
        });

        it('should generate a deterministic sequence', () => {
            let rand_num = random.default.random();
            let esperado = (typeof rand_num === 'number' && rand_num > 0 && rand_num < 1);
            expect(esperado).toBe(true);
        });

        it('should generate a deterministic array', () => {
            let rand_arr = random.default.random([3, 2]);
            let esperado = (Array.isArray(rand_arr) && rand_arr[2][1]);
            expect(esperado).toBeTruthy();
        });
    });

    describe('Errores', () => {
        it('should raise a dimension error', () => {
            expect(() => random.default.random([3, 2, 7])).toThrowError(Error);
        });
    });
});
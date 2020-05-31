describe('VectorOps', () => {
    const VectorOps = require('../dist/lib/array');

    describe('ScalarOpScalar', () => {
        it('should sum 5 and 7.74', () => {
            expect(VectorOps.default.ScalarOpScalar(5, '+', 7.74)).toEqual(12.74);
        });
    
        it('should sub 3.1 from 7', () => {
            expect(VectorOps.default.ScalarOpScalar(7, '-', 3.1)).toEqual(3.9);
        });
    
        it('should mul 6 times 3.1416', () => {
            expect(VectorOps.default.ScalarOpScalar(6, '*', 3.1416)).toEqual(18.8496);
        });
    
        it('should div 18.56 by 4', () => {
            expect(VectorOps.default.ScalarOpScalar(18.56, '/', 4)).toEqual(4.64);
        });
    
        it('should rise 11 to the power of 4', () => {
            expect(VectorOps.default.ScalarOpScalar(11, '^', 4)).toEqual(14641);
        });
    });

    describe('ScalarOpVector', () => {
        // ========== [ S U M ] ==========
        it('should sum 5 to every element in vector [2, 6, 9]', () => {
            expect(VectorOps.default.ScalarOpVector(5, '+', [2, 6, 9])).toEqual([7, 11, 14]);
        });

        it('should sum 3 to every element in vector [[1, 4, 8]]', () => {
            expect(VectorOps.default.ScalarOpVector(3, '+', [[1, 4, 8]])).toEqual([[4, 7, 11]]);
        });

        it('should sum 2 to every element in vector [[7, 5, 13, 10], [15, 2, 9, 4]]', () => {
            expect(VectorOps.default.ScalarOpVector(2, '+', [[7, 5, 13, 10], [15, 2, 9, 4]])).toEqual([[9, 7, 15, 12], [17, 4, 11, 6]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        it('should sub every element in vector [10, 8, 9] from 3', () => {
            expect(VectorOps.default.ScalarOpVector(3, '-', [10, 8, 9])).toEqual([-7, -5, -6]);
        });

        it('should sub every element in vector [[2, 4, 7]] from 6', () => {
            expect(VectorOps.default.ScalarOpVector(6, '-', [[2, 4, 7]])).toEqual([[4, 2, -1]]);
        });

        it('should sub every element in vector [[4, 9, 2, 11], [7, 12, 3, 1]] from 9', () => {
            expect(VectorOps.default.ScalarOpVector(9, '-', [[4, 9, 2, 11], [7, 12, 3, 1]])).toEqual([[5, 0, 7, -2], [2, -3, 6, 8]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        it('should mul 7 times every element in vector [3, 6, 9]', () => {
            expect(VectorOps.default.ScalarOpVector(7, '*', [3, 6, 9])).toEqual([21, 42, 63]);
        });

        it('should mul 5 times every element in vector [[5, 2, 7]]', () => {
            expect(VectorOps.default.ScalarOpVector(5, '*', [[5, 2, 7]])).toEqual([[25, 10, 35]]);
        });

        it('should mul 4 times every element in vector [[9, 7, 2, 11], [0, 8, 4, 12]]', () => {
            expect(VectorOps.default.ScalarOpVector(4, '*', [[9, 7, 2, 11], [0, 8, 4, 12]])).toEqual([[36, 28, 8, 44], [0, 32, 16, 48]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        it('should div 8 by every element in vector [2, 4, 8]', () => {
            expect(VectorOps.default.ScalarOpVector(8, '/', [2, 4, 8])).toEqual([4, 2, 1]);
        });

        it('should div 15 by every element in vector [[3, 5, 10]]', () => {
            expect(VectorOps.default.ScalarOpVector(15, '/', [[3, 5, 10]])).toEqual([[5, 3, 1.5]]);
        });

        it('should div 3 by every element in vector [[2, 4, 6, 8], [1, 2, 3, 4]]', () => {
            expect(VectorOps.default.ScalarOpVector(3, '/', [[2, 4, 6, 8], [1, 2, 3, 4]])).toEqual([[1.5, 0.75, 0.5, 0.375], [3, 1.5, 1, 0.75]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        it('should rise 2 to the power of every element in vector [2, 0, 8]', () => {
            expect(VectorOps.default.ScalarOpVector(2, '^', [2, 0, 8])).toEqual([4, 1, 256]);
        });

        it('should rise 8 to the power of every element in vector [[5, 2, 6]]', () => {
            expect(VectorOps.default.ScalarOpVector(8, '^', [[5, 2, 6]])).toEqual([[32768, 64, 262144]]);
        });

        it('should rise 10 to the power of every element in vector [[1, -8, 3, 5], [0, 3, 4, 9]]', () => {
            expect(VectorOps.default.ScalarOpVector(10, '^', [[1, -8, 3, 5], [0, 3, 4, 9]])).toEqual([[10, 0.00000001, 1000, 100000], [1, 1000, 10000, 1000000000]]);
        });
        // ========== [ / P O W ] ==========
    });

    describe('VectorOpScalar', () => {
        // ========== [ S U M ] ==========
        it('should sum every element in [1, 3, 5] to 7', () => {
            expect(VectorOps.default.VectorOpScalar([1, 3, 5], '+', 7)).toEqual([8, 10, 12]);
        });

        it('should sum every element in [[7, 14, 21]] to 3', () => {
            expect(VectorOps.default.VectorOpScalar([[7, 14, 21]], '+', 3)).toEqual([[10, 17, 24]]);
        });

        it('should sum every element in [[10, 2, 14, 7], [1, 8, 4, 0]] to 2', () => {
            expect(VectorOps.default.VectorOpScalar([[10, 2, 14, 7], [1, 8, 4, 0]], '+', 2)).toEqual([[12, 4, 16, 9], [3, 10, 6, 2]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        it('should sub 3 from every element in [10, 4, 8]', () => {
            expect(VectorOps.default.VectorOpScalar([10, 4, 8], '-', 3)).toEqual([7, 1, 5]);
        });

        it('should sub 7 from every element in [[9, 14, 1]]', () => {
            expect(VectorOps.default.VectorOpScalar([[9, 14, 1]], '-', 7)).toEqual([[2, 7, -6]]);
        });

        it('should sub 11 from every element in [[9, 5, 3, 10], [15, 2, 6, 8]]', () => {
            expect(VectorOps.default.VectorOpScalar([[9, 5, 3, 10], [15, 2, 6, 8]], '-', 11)).toEqual([[-2, -6, -8, -1], [4, -9, -5, -3]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        it('should mul every element in [2, 4, 6] times 4', () => {
            expect(VectorOps.default.VectorOpScalar([2, 4, 6], '*', 4)).toEqual([8, 16, 24]);
        });

        it('should mul every element in [[2, 4, 6]] times 6', () => {
            expect(VectorOps.default.VectorOpScalar([[2, 4, 6]], '*', 6)).toEqual([[12, 24, 36]]);
        });

        it('should mul every element in [[2, 4, 6, 8], [1, 3, 5, 7]] times 9', () => {
            expect(VectorOps.default.VectorOpScalar([[2, 4, 6, 8], [1, 3, 5, 7]], '*', 9)).toEqual([[18, 36, 54, 72], [9, 27, 45, 63]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        it('should div every element in [2, 4, 8, 16] by 8', () => {
            expect(VectorOps.default.VectorOpScalar([2, 4, 8, 16], '/', 8)).toEqual([0.25, 0.5, 1, 2]);
        });

        it('should div every element in [[12, 3, 4.5, 9]] by 3', () => {
            expect(VectorOps.default.VectorOpScalar([[12, 3, 4.5, 9]], '/', 3)).toEqual([[4, 1, 1.5, 3]]);
        });

        it('should div every element in [[12, 2, 15, 24, 10], [2, 0, 7, 4, 115]] by 10', () => {
            expect(VectorOps.default.VectorOpScalar([[12, 2, 15, 24, 10], [2, 0, 7, 4, 115]], '/', 10)).toEqual([[1.2, 0.2, 1.5, 2.4, 1], [0.2, 0, 0.7, 0.4, 11.5]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        it('should rise every element in [5, 2, 3, 7] to the power of 4', () => {
            expect(VectorOps.default.VectorOpScalar([5, 2, 3, 7], '^', 4)).toEqual([625, 16, 81, 2401]);
        });

        it('should rise every element in [[7, 9, 11, 2]] to the power of 3', () => {
            expect(VectorOps.default.VectorOpScalar([[7, 9, 11, 2]], '^', 3)).toEqual([[343, 729, 1331, 8]]);
        });

        it('should rise every element in [[2, 9, 0, 5], [1, 7, 2, 11]] to the power of 5', () => {
            expect(VectorOps.default.VectorOpScalar([[2, 9, 0, 5], [1, 7, 2, 11]], '^', 5)).toEqual([[32, 59049, 0, 3125], [1, 16807, 32, 161051]]);
        });
        // ========== [ / P O W ] ==========
    });

    describe('VectorOpVectorDeVectores', () => {
        // ========== [ S U M ] ==========
        it('should sum every element in [1, 3, 5] to the element in the same index of every vector inside [[2, 4, 6], [7, 5, 3], [1, 4, 9]]', () => {
            expect(VectorOps.default.VectorOpVectorDeVectores([1, 3, 5], '+', [[2, 4, 6], [7, 5, 3], [1, 4, 9]])).toEqual([[3, 7, 11], [8, 8, 8], [2, 7, 14]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        it('should sub every element of every vector inside [[2, 4, 8], [3, 7, 9], [0, 5, 8]] from every element in the same index in [10, 15, 20]', () => {
            expect(VectorOps.default.VectorOpVectorDeVectores([10, 15, 20], '-', [[2, 4, 8], [3, 7, 9], [0, 5, 8]])).toEqual([[8, 11, 12], [7, 8, 11], [10, 10, 12]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        it('should mul every element in [3, 6, 9] times the element in the same index of every vector inside [[11, 2, 3], [8, 11, 24], [0, 1, 5]]', () => {
            expect(VectorOps.default.VectorOpVectorDeVectores([3, 6, 9], '*', [[11, 2, 3], [8, 11, 24], [0, 1, 5]])).toEqual([[33, 12, 27], [24, 66, 216], [0, 6, 45]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        it('should div every element in [360, 15, 12] by the element in the same index of every vector inside [[5, 2, 4], [1, 5, 6], [120, 10, 12]]', () => {
            expect(VectorOps.default.VectorOpVectorDeVectores([360, 15, 12], '/', [[5, 2, 4], [1, 5, 6], [120, 10, 12]])).toEqual([[72, 7.5, 3], [360, 3, 2], [3, 1.5, 1]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        it('should rise every element in [3, 5, 7] to the power of the element in the same index of every vector inside [[0, 1, 2], [3, 4, 5], [6, 7, 8]]', () => {
            expect(VectorOps.default.VectorOpVectorDeVectores([3, 5, 7], '^', [[0, 1, 2], [3, 4, 5], [6, 7, 8]])).toEqual([[1, 5, 49], [27, 625, 16807], [729, 78125, 5764801]]);
        });
        // ========== [ / P O W ] ==========
    });

    describe('VectorDeVectoresOpVector', () => {
        // ========== [ S U M ] ==========
        it('should sum every element of every vector inside [[5, 7], [20, 11], [0, -8]] to the element in the same index in [5, 10]', () => {
            expect(VectorOps.default.VectorDeVectoresOpVector([[5, 7], [20, 11], [0, -8]], '+', [5, 10])).toEqual([[10, 17], [25, 21], [5, 2]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        it('should sub every element in [5, 9] from every element in the same index of every vector inside [[2, 8], [11, 12], [10, 6]]', () => {
            expect(VectorOps.default.VectorDeVectoresOpVector([[2, 8], [11, 12], [10, 6]], '-', [5, 9])).toEqual([[-3, -1], [6, 3], [5, -3]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        it('should mul every element in every vector inside [[1, 2], [3, 4], [5, 6]] times the element in the same index of [7, 8]', () => {
            expect(VectorOps.default.VectorDeVectoresOpVector([[1, 2], [3, 4], [5, 6]], '*', [7, 8])).toEqual([[7, 16], [21, 32], [35, 48]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        it('should div every element of every vector inside [[10, 15], [-10, -15], [12, 3]] by the element in the same index in [10, -10]', () => {
            expect(VectorOps.default.VectorDeVectoresOpVector([[10, 15], [-10, -15], [12, 3]], '/', [10, -10])).toEqual([[1, -1.5], [-1, 1.5], [1.2, -0.3]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        it('should rise every element of every vector inside [[1, 2], [-1, -2], [3, 4]] to the power of the element in the same index in [5, 6]', () => {
            expect(VectorOps.default.VectorDeVectoresOpVector([[1, 2], [-1, -2], [3, 4]], '^', [5, 6])).toEqual([[1, 64], [-1, 64], [243, 4096]]);
        });
        // ========== [ / P O W ] ==========
    });

    describe('VectorOpVector', () => {
        // ========== [ S U M ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should sum single vector A and single vector B', () => {
            expect(VectorOps.default.VectorOpVector([15, 20, 25], '+', [7, 9, 10])).toEqual([22, 29, 35]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should sum nested vector A and single vector B', () => {
            expect(VectorOps.default.VectorOpVector([[2, 4, 6]], '+', [1, 2, 3])).toEqual([[3, 6, 9]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should sum vector of vectors A and single vector B', () => {
            expect(VectorOps.default.VectorOpVector([[5, 6, 7], [8, 9, 10]], '+', [4, 8, 12])).toEqual([[9, 14, 19], [12, 17, 22]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should sum single vector A and nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([2, 4, 6], '+', [[7, 8, 9]])).toEqual([[9, 12, 15]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should sum nested vector A and nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([[-1, 0, 1]], '+', [[-2, 2, 10]])).toEqual([[-3, 2, 11]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should sum vector of vectors A and nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([[7, 8, 9], [1, 2, 3]], '+', [[4, 5, 6]])).toEqual([[11, 13, 15], [5, 7, 9]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should sum single vector A and vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([3, 6, 9], '+', [[10, 20, 30], [7, 8, 9]])).toEqual([[13, 26, 39], [10, 14, 18]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should sum nested vector A and vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([[5, 10, 15]], '+', [[8, 12, 16], [4, 3, 2]])).toEqual([[13, 22, 31], [9, 13, 17]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should sum vector of vectors A and vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([[2, 2], [5, 8]], '+', [[7, 6], [1, 5]])).toEqual([[9, 8], [6, 13]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should sub single vector B from single vector A', () => {
            expect(VectorOps.default.VectorOpVector([6, 7], '-', [3, 4])).toEqual([3, 3]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should sub single vector B from nested vector A', () => {
            expect(VectorOps.default.VectorOpVector([[2, 4]], '-', [1, 2])).toEqual([[1, 2]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should sub single vector B from vector of vectors A', () => {
            expect(VectorOps.default.VectorOpVector([[5, 6], [8, 9]], '-', [4, 8])).toEqual([[1, -2], [4, 1]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should sub nested vector B from single vector A', () => {
            expect(VectorOps.default.VectorOpVector([2, 4], '-', [[7, 8]])).toEqual([[-5, -4]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should sub nested vector B from nested vector A', () => {
            expect(VectorOps.default.VectorOpVector([[-1, 0]], '-', [[-2, 2]])).toEqual([[1, -2]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should sub nested vector B from vector of vectors A', () => {
            expect(VectorOps.default.VectorOpVector([[7, 8], [1, 2]], '-', [[4, 5]])).toEqual([[3, 3], [-3, -3]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should sub vector of vectors B from single vector A', () => {
            expect(VectorOps.default.VectorOpVector([3, 6], '-', [[10, 20], [7, 8]])).toEqual([[-7, -14], [-4, -2]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should sub vector of vectors B nested vector A', () => {
            expect(VectorOps.default.VectorOpVector([[5, 10]], '-', [[8, 12], [4, 3]])).toEqual([[-3, -2], [1, 7]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should sub vector of vectors B from vector of vectors A', () => {
            expect(VectorOps.default.VectorOpVector([[2, 2], [5, 8]], '-', [[7, 6], [1, 5]])).toEqual([[-5, -4], [4, 3]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should mul single vector A times single vector B', () => {
            expect(VectorOps.default.VectorOpVector([15, 20, 25], '*', [7, 9, 10])).toEqual([105, 180, 250]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should mul nested vector A times single vector B', () => {
            expect(VectorOps.default.VectorOpVector([[2, 4, 6]], '*', [1, 2, 3])).toEqual([[2, 8, 18]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should mul vector of vectors A times single vector B', () => {
            expect(VectorOps.default.VectorOpVector([[5, 6, 7], [8, 9, 10]], '*', [4, 8, 12])).toEqual([[20, 48, 84], [32, 72, 120]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should mul single vector A times nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([2, 4, 6], '*', [[7, 8, 9]])).toEqual([[14, 32, 54]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should mul nested vector A times nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([[-1, 0, 1]], '*', [[-2, 2, 10]])).toEqual([[2, 0, 10]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should mul vector of vectors A times nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([[7, 8, 9], [1, 2, 3]], '*', [[4, 5, 6]])).toEqual([[28, 40, 54], [4, 10, 18]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should mul single vector A times vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([3, 6, 9], '*', [[10, 20, 30], [7, 8, 9]])).toEqual([[30, 120, 270], [21, 48, 81]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should mul nested vector A times vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([[5, 10, 15]], '*', [[8, 12, 16], [4, 3, 2]])).toEqual([[40, 120, 240], [20, 30, 30]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should mul vector of vectors A times vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([[2, 2], [5, 8]], '*', [[7, 6], [1, 5]])).toEqual([[14, 12], [5, 40]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should div single vector A by single vector B', () => {
            expect(VectorOps.default.VectorOpVector([15, 20], '/', [-2, 5])).toEqual([-7.5, 4]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should div nested vector A by single vector B', () => {
            expect(VectorOps.default.VectorOpVector([[2, 4]], '/', [1, 2])).toEqual([[2, 2]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should div vector of vectors A by single vector B', () => {
            expect(VectorOps.default.VectorOpVector([[8, 6], [16, 10]], '/', [4, 8])).toEqual([[2, 0.75], [4, 1.25]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should div single vector A by nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([3, 4], '/', [[6, 5]])).toEqual([[0.5, 0.8]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should div nested vector A by nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([[-1, 0]], '/', [[-2, 2]])).toEqual([[0.5, 0]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should div vector of vectors A by nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([[150, 200], [60, 10]], '/', [[15, 5]])).toEqual([[10, 40], [4, 2]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should div single vector A by vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([3, 6, 9], '/', [[1, 2, 3], [2, 4, 8]])).toEqual([[3, 3, 3], [1.5, 1.5, 1.125]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should div nested vector A by vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([[5, 10]], '/', [[8, 2], [5, 10]])).toEqual([[0.625, 5], [1, 1]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should div vector of vectors A by vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([[2, 2], [5, 8]], '/', [[-1, 0], [2, 4]])).toEqual([[-2, Infinity], [2.5, 2]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should rise single vector A to the power of single vector B', () => {
            expect(VectorOps.default.VectorOpVector([15, 20], '^', [3, 5])).toEqual([3375, 3200000]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should rise nested vector A to the power of single vector B', () => {
            expect(VectorOps.default.VectorOpVector([[2, 4]], '^', [1, 2])).toEqual([[2, 16]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should rise vector of vectors A to the power of single vector B', () => {
            expect(VectorOps.default.VectorOpVector([[8, 6], [16, 10]], '^', [4, 8])).toEqual([[4096, 1679616], [65536, 100000000]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should rise single vector A to the power of nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([3, 4], '^', [[6, 5]])).toEqual([[729, 1024]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should rise nested vector A to the power of nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([[-1, 0]], '^', [[-2, 2]])).toEqual([[1, 0]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should rise vector of vectors A to the power of nested vector B', () => {
            expect(VectorOps.default.VectorOpVector([[5, 3], [2, 4]], '^', [[3, 6]])).toEqual([[125, 729], [8, 4096]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should rise single vector A to the power of vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([3, 6], '^', [[1, 2], [4, 5]])).toEqual([[3, 36], [81, 7776]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should rise nested vector A to the power of vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([[10, 8]], '^', [[0, -1], [2, 4]])).toEqual([[1, 0.125], [100, 4096]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should rise vector of vectors A to the power of vector of vectors B', () => {
            expect(VectorOps.default.VectorOpVector([[-2, 2], [10, -10]], '^', [[-1, 1], [2, -2]])).toEqual([[-0.5, 2], [100, 0.01]]);
        });
        // ========== [ / P O W ] ==========
    });

    describe('Operate', () => {
        it('should sum 5 and 7.74', () => {
            expect(VectorOps.default.Operate(5, '+', 7.74)).toEqual(12.74);
        });
    
        it('should sub 3.1 from 7', () => {
            expect(VectorOps.default.Operate(7, '-', 3.1)).toEqual(3.9);
        });
    
        it('should mul 6 times 3.1416', () => {
            expect(VectorOps.default.Operate(6, '*', 3.1416)).toEqual(18.8496);
        });
    
        it('should div 18.56 by 4', () => {
            expect(VectorOps.default.Operate(18.56, '/', 4)).toEqual(4.64);
        });
    
        it('should rise 11 to the power of 4', () => {
            expect(VectorOps.default.Operate(11, '^', 4)).toEqual(14641);
        });

        // ========== [ S U M ] ==========
        it('should sum 5 to every element in vector [2, 6, 9]', () => {
            expect(VectorOps.default.Operate(5, '+', [2, 6, 9])).toEqual([7, 11, 14]);
        });

        it('should sum 3 to every element in vector [[1, 4, 8]]', () => {
            expect(VectorOps.default.Operate(3, '+', [[1, 4, 8]])).toEqual([[4, 7, 11]]);
        });

        it('should sum 2 to every element in vector [[7, 5, 13, 10], [15, 2, 9, 4]]', () => {
            expect(VectorOps.default.Operate(2, '+', [[7, 5, 13, 10], [15, 2, 9, 4]])).toEqual([[9, 7, 15, 12], [17, 4, 11, 6]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        it('should sub every element in vector [10, 8, 9] from 3', () => {
            expect(VectorOps.default.Operate(3, '-', [10, 8, 9])).toEqual([-7, -5, -6]);
        });

        it('should sub every element in vector [[2, 4, 7]] from 6', () => {
            expect(VectorOps.default.Operate(6, '-', [[2, 4, 7]])).toEqual([[4, 2, -1]]);
        });

        it('should sub every element in vector [[4, 9, 2, 11], [7, 12, 3, 1]] from 9', () => {
            expect(VectorOps.default.Operate(9, '-', [[4, 9, 2, 11], [7, 12, 3, 1]])).toEqual([[5, 0, 7, -2], [2, -3, 6, 8]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        it('should mul 7 times every element in vector [3, 6, 9]', () => {
            expect(VectorOps.default.Operate(7, '*', [3, 6, 9])).toEqual([21, 42, 63]);
        });

        it('should mul 5 times every element in vector [[5, 2, 7]]', () => {
            expect(VectorOps.default.Operate(5, '*', [[5, 2, 7]])).toEqual([[25, 10, 35]]);
        });

        it('should mul 4 times every element in vector [[9, 7, 2, 11], [0, 8, 4, 12]]', () => {
            expect(VectorOps.default.Operate(4, '*', [[9, 7, 2, 11], [0, 8, 4, 12]])).toEqual([[36, 28, 8, 44], [0, 32, 16, 48]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        it('should div 8 by every element in vector [2, 4, 8]', () => {
            expect(VectorOps.default.Operate(8, '/', [2, 4, 8])).toEqual([4, 2, 1]);
        });

        it('should div 15 by every element in vector [[3, 5, 10]]', () => {
            expect(VectorOps.default.Operate(15, '/', [[3, 5, 10]])).toEqual([[5, 3, 1.5]]);
        });

        it('should div 3 by every element in vector [[2, 4, 6, 8], [1, 2, 3, 4]]', () => {
            expect(VectorOps.default.Operate(3, '/', [[2, 4, 6, 8], [1, 2, 3, 4]])).toEqual([[1.5, 0.75, 0.5, 0.375], [3, 1.5, 1, 0.75]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        it('should rise 2 to the power of every element in vector [2, 0, 8]', () => {
            expect(VectorOps.default.Operate(2, '^', [2, 0, 8])).toEqual([4, 1, 256]);
        });

        it('should rise 8 to the power of every element in vector [[5, 2, 6]]', () => {
            expect(VectorOps.default.Operate(8, '^', [[5, 2, 6]])).toEqual([[32768, 64, 262144]]);
        });

        it('should rise 10 to the power of every element in vector [[1, -8, 3, 5], [0, 3, 4, 9]]', () => {
            expect(VectorOps.default.Operate(10, '^', [[1, -8, 3, 5], [0, 3, 4, 9]])).toEqual([[10, 0.00000001, 1000, 100000], [1, 1000, 10000, 1000000000]]);
        });
        // ========== [ / P O W ] ==========

        // ========== [ S U M ] ==========
        it('should sum every element in [1, 3, 5] to 7', () => {
            expect(VectorOps.default.Operate([1, 3, 5], '+', 7)).toEqual([8, 10, 12]);
        });

        it('should sum every element in [[7, 14, 21]] to 3', () => {
            expect(VectorOps.default.Operate([[7, 14, 21]], '+', 3)).toEqual([[10, 17, 24]]);
        });

        it('should sum every element in [[10, 2, 14, 7], [1, 8, 4, 0]] to 2', () => {
            expect(VectorOps.default.Operate([[10, 2, 14, 7], [1, 8, 4, 0]], '+', 2)).toEqual([[12, 4, 16, 9], [3, 10, 6, 2]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        it('should sub 3 from every element in [10, 4, 8]', () => {
            expect(VectorOps.default.Operate([10, 4, 8], '-', 3)).toEqual([7, 1, 5]);
        });

        it('should sub 7 from every element in [[9, 14, 1]]', () => {
            expect(VectorOps.default.Operate([[9, 14, 1]], '-', 7)).toEqual([[2, 7, -6]]);
        });

        it('should sub 11 from every element in [[9, 5, 3, 10], [15, 2, 6, 8]]', () => {
            expect(VectorOps.default.Operate([[9, 5, 3, 10], [15, 2, 6, 8]], '-', 11)).toEqual([[-2, -6, -8, -1], [4, -9, -5, -3]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        it('should mul every element in [2, 4, 6] times 4', () => {
            expect(VectorOps.default.Operate([2, 4, 6], '*', 4)).toEqual([8, 16, 24]);
        });

        it('should mul every element in [[2, 4, 6]] times 6', () => {
            expect(VectorOps.default.Operate([[2, 4, 6]], '*', 6)).toEqual([[12, 24, 36]]);
        });

        it('should mul every element in [[2, 4, 6, 8], [1, 3, 5, 7]] times 9', () => {
            expect(VectorOps.default.Operate([[2, 4, 6, 8], [1, 3, 5, 7]], '*', 9)).toEqual([[18, 36, 54, 72], [9, 27, 45, 63]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        it('should div every element in [2, 4, 8, 16] by 8', () => {
            expect(VectorOps.default.Operate([2, 4, 8, 16], '/', 8)).toEqual([0.25, 0.5, 1, 2]);
        });

        it('should div every element in [[12, 3, 4.5, 9]] by 3', () => {
            expect(VectorOps.default.Operate([[12, 3, 4.5, 9]], '/', 3)).toEqual([[4, 1, 1.5, 3]]);
        });

        it('should div every element in [[12, 2, 15, 24, 10], [2, 0, 7, 4, 115]] by 10', () => {
            expect(VectorOps.default.Operate([[12, 2, 15, 24, 10], [2, 0, 7, 4, 115]], '/', 10)).toEqual([[1.2, 0.2, 1.5, 2.4, 1], [0.2, 0, 0.7, 0.4, 11.5]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        it('should rise every element in [5, 2, 3, 7] to the power of 4', () => {
            expect(VectorOps.default.Operate([5, 2, 3, 7], '^', 4)).toEqual([625, 16, 81, 2401]);
        });

        it('should rise every element in [[7, 9, 11, 2]] to the power of 3', () => {
            expect(VectorOps.default.Operate([[7, 9, 11, 2]], '^', 3)).toEqual([[343, 729, 1331, 8]]);
        });

        it('should rise every element in [[2, 9, 0, 5], [1, 7, 2, 11]] to the power of 5', () => {
            expect(VectorOps.default.Operate([[2, 9, 0, 5], [1, 7, 2, 11]], '^', 5)).toEqual([[32, 59049, 0, 3125], [1, 16807, 32, 161051]]);
        });
        // ========== [ / P O W ] ==========

        // ========== [ S U M ] ==========
        it('should sum every element in [1, 3, 5] to the element in the same index of every vector inside [[2, 4, 6], [7, 5, 3], [1, 4, 9]]', () => {
            expect(VectorOps.default.Operate([1, 3, 5], '+', [[2, 4, 6], [7, 5, 3], [1, 4, 9]])).toEqual([[3, 7, 11], [8, 8, 8], [2, 7, 14]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        it('should sub every element of every vector inside [[2, 4, 8], [3, 7, 9], [0, 5, 8]] from every element in the same index in [10, 15, 20]', () => {
            expect(VectorOps.default.Operate([10, 15, 20], '-', [[2, 4, 8], [3, 7, 9], [0, 5, 8]])).toEqual([[8, 11, 12], [7, 8, 11], [10, 10, 12]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        it('should mul every element in [3, 6, 9] times the element in the same index of every vector inside [[11, 2, 3], [8, 11, 24], [0, 1, 5]]', () => {
            expect(VectorOps.default.Operate([3, 6, 9], '*', [[11, 2, 3], [8, 11, 24], [0, 1, 5]])).toEqual([[33, 12, 27], [24, 66, 216], [0, 6, 45]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        it('should div every element in [360, 15, 12] by the element in the same index of every vector inside [[5, 2, 4], [1, 5, 6], [120, 10, 12]]', () => {
            expect(VectorOps.default.Operate([360, 15, 12], '/', [[5, 2, 4], [1, 5, 6], [120, 10, 12]])).toEqual([[72, 7.5, 3], [360, 3, 2], [3, 1.5, 1]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        it('should rise every element in [3, 5, 7] to the power of the element in the same index of every vector inside [[0, 1, 2], [3, 4, 5], [6, 7, 8]]', () => {
            expect(VectorOps.default.Operate([3, 5, 7], '^', [[0, 1, 2], [3, 4, 5], [6, 7, 8]])).toEqual([[1, 5, 49], [27, 625, 16807], [729, 78125, 5764801]]);
        });
        // ========== [ / P O W ] ==========

        // ========== [ S U M ] ==========
        it('should sum every element of every vector inside [[5, 7], [20, 11], [0, -8]] to the element in the same index in [5, 10]', () => {
            expect(VectorOps.default.Operate([[5, 7], [20, 11], [0, -8]], '+', [5, 10])).toEqual([[10, 17], [25, 21], [5, 2]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        it('should sub every element in [5, 9] from every element in the same index of every vector inside [[2, 8], [11, 12], [10, 6]]', () => {
            expect(VectorOps.default.Operate([[2, 8], [11, 12], [10, 6]], '-', [5, 9])).toEqual([[-3, -1], [6, 3], [5, -3]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        it('should mul every element in every vector inside [[1, 2], [3, 4], [5, 6]] times the element in the same index of [7, 8]', () => {
            expect(VectorOps.default.Operate([[1, 2], [3, 4], [5, 6]], '*', [7, 8])).toEqual([[7, 16], [21, 32], [35, 48]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        it('should div every element of every vector inside [[10, 15], [-10, -15], [12, 3]] by the element in the same index in [10, -10]', () => {
            expect(VectorOps.default.Operate([[10, 15], [-10, -15], [12, 3]], '/', [10, -10])).toEqual([[1, -1.5], [-1, 1.5], [1.2, -0.3]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        it('should rise every element of every vector inside [[1, 2], [-1, -2], [3, 4]] to the power of the element in the same index in [5, 6]', () => {
            expect(VectorOps.default.Operate([[1, 2], [-1, -2], [3, 4]], '^', [5, 6])).toEqual([[1, 64], [-1, 64], [243, 4096]]);
        });
        // ========== [ / P O W ] ==========

        // ========== [ S U M ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should sum single vector A and single vector B', () => {
            expect(VectorOps.default.Operate([15, 20, 25], '+', [7, 9, 10])).toEqual([22, 29, 35]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should sum nested vector A and single vector B', () => {
            expect(VectorOps.default.Operate([[2, 4, 6]], '+', [1, 2, 3])).toEqual([[3, 6, 9]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should sum vector of vectors A and single vector B', () => {
            expect(VectorOps.default.Operate([[5, 6, 7], [8, 9, 10]], '+', [4, 8, 12])).toEqual([[9, 14, 19], [12, 17, 22]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should sum single vector A and nested vector B', () => {
            expect(VectorOps.default.Operate([2, 4, 6], '+', [[7, 8, 9]])).toEqual([[9, 12, 15]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should sum nested vector A and nested vector B', () => {
            expect(VectorOps.default.Operate([[-1, 0, 1]], '+', [[-2, 2, 10]])).toEqual([[-3, 2, 11]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should sum vector of vectors A and nested vector B', () => {
            expect(VectorOps.default.Operate([[7, 8, 9], [1, 2, 3]], '+', [[4, 5, 6]])).toEqual([[11, 13, 15], [5, 7, 9]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should sum single vector A and vector of vectors B', () => {
            expect(VectorOps.default.Operate([3, 6, 9], '+', [[10, 20, 30], [7, 8, 9]])).toEqual([[13, 26, 39], [10, 14, 18]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should sum nested vector A and vector of vectors B', () => {
            expect(VectorOps.default.Operate([[5, 10, 15]], '+', [[8, 12, 16], [4, 3, 2]])).toEqual([[13, 22, 31], [9, 13, 17]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should sum vector of vectors A and vector of vectors B', () => {
            expect(VectorOps.default.Operate([[2, 2], [5, 8]], '+', [[7, 6], [1, 5]])).toEqual([[9, 8], [6, 13]]);
        });
        // ========== [ / S U M ] ==========

        // ========== [ S U B ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should sub single vector B from single vector A', () => {
            expect(VectorOps.default.Operate([6, 7], '-', [3, 4])).toEqual([3, 3]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should sub single vector B from nested vector A', () => {
            expect(VectorOps.default.Operate([[2, 4]], '-', [1, 2])).toEqual([[1, 2]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should sub single vector B from vector of vectors A', () => {
            expect(VectorOps.default.Operate([[5, 6], [8, 9]], '-', [4, 8])).toEqual([[1, -2], [4, 1]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should sub nested vector B from single vector A', () => {
            expect(VectorOps.default.Operate([2, 4], '-', [[7, 8]])).toEqual([[-5, -4]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should sub nested vector B from nested vector A', () => {
            expect(VectorOps.default.Operate([[-1, 0]], '-', [[-2, 2]])).toEqual([[1, -2]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should sub nested vector B from vector of vectors A', () => {
            expect(VectorOps.default.Operate([[7, 8], [1, 2]], '-', [[4, 5]])).toEqual([[3, 3], [-3, -3]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should sub vector of vectors B from single vector A', () => {
            expect(VectorOps.default.Operate([3, 6], '-', [[10, 20], [7, 8]])).toEqual([[-7, -14], [-4, -2]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should sub vector of vectors B nested vector A', () => {
            expect(VectorOps.default.Operate([[5, 10]], '-', [[8, 12], [4, 3]])).toEqual([[-3, -2], [1, 7]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should sub vector of vectors B from vector of vectors A', () => {
            expect(VectorOps.default.Operate([[2, 2], [5, 8]], '-', [[7, 6], [1, 5]])).toEqual([[-5, -4], [4, 3]]);
        });
        // ========== [ / S U B ] ==========

        // ========== [ M U L ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should mul single vector A times single vector B', () => {
            expect(VectorOps.default.Operate([15, 20, 25], '*', [7, 9, 10])).toEqual([105, 180, 250]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should mul nested vector A times single vector B', () => {
            expect(VectorOps.default.Operate([[2, 4, 6]], '*', [1, 2, 3])).toEqual([[2, 8, 18]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should mul vector of vectors A times single vector B', () => {
            expect(VectorOps.default.Operate([[5, 6, 7], [8, 9, 10]], '*', [4, 8, 12])).toEqual([[20, 48, 84], [32, 72, 120]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should mul single vector A times nested vector B', () => {
            expect(VectorOps.default.Operate([2, 4, 6], '*', [[7, 8, 9]])).toEqual([[14, 32, 54]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should mul nested vector A times nested vector B', () => {
            expect(VectorOps.default.Operate([[-1, 0, 1]], '*', [[-2, 2, 10]])).toEqual([[2, 0, 10]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should mul vector of vectors A times nested vector B', () => {
            expect(VectorOps.default.Operate([[7, 8, 9], [1, 2, 3]], '*', [[4, 5, 6]])).toEqual([[28, 40, 54], [4, 10, 18]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should mul single vector A times vector of vectors B', () => {
            expect(VectorOps.default.Operate([3, 6, 9], '*', [[10, 20, 30], [7, 8, 9]])).toEqual([[30, 120, 270], [21, 48, 81]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should mul nested vector A times vector of vectors B', () => {
            expect(VectorOps.default.Operate([[5, 10, 15]], '*', [[8, 12, 16], [4, 3, 2]])).toEqual([[40, 120, 240], [20, 30, 30]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should mul vector of vectors A times vector of vectors B', () => {
            expect(VectorOps.default.Operate([[2, 2], [5, 8]], '*', [[7, 6], [1, 5]])).toEqual([[14, 12], [5, 40]]);
        });
        // ========== [ / M U L ] ==========

        // ========== [ D I V ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should div single vector A by single vector B', () => {
            expect(VectorOps.default.Operate([15, 20], '/', [-2, 5])).toEqual([-7.5, 4]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should div nested vector A by single vector B', () => {
            expect(VectorOps.default.Operate([[2, 4]], '/', [1, 2])).toEqual([[2, 2]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should div vector of vectors A by single vector B', () => {
            expect(VectorOps.default.Operate([[8, 6], [16, 10]], '/', [4, 8])).toEqual([[2, 0.75], [4, 1.25]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should div single vector A by nested vector B', () => {
            expect(VectorOps.default.Operate([3, 4], '/', [[6, 5]])).toEqual([[0.5, 0.8]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should div nested vector A by nested vector B', () => {
            expect(VectorOps.default.Operate([[-1, 0]], '/', [[-2, 2]])).toEqual([[0.5, 0]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should div vector of vectors A by nested vector B', () => {
            expect(VectorOps.default.Operate([[150, 200], [60, 10]], '/', [[15, 5]])).toEqual([[10, 40], [4, 2]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should div single vector A by vector of vectors B', () => {
            expect(VectorOps.default.Operate([3, 6, 9], '/', [[1, 2, 3], [2, 4, 8]])).toEqual([[3, 3, 3], [1.5, 1.5, 1.125]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should div nested vector A by vector of vectors B', () => {
            expect(VectorOps.default.Operate([[5, 10]], '/', [[8, 2], [5, 10]])).toEqual([[0.625, 5], [1, 1]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should div vector of vectors A by vector of vectors B', () => {
            expect(VectorOps.default.Operate([[2, 2], [5, 8]], '/', [[-1, 0], [2, 4]])).toEqual([[-2, Infinity], [2.5, 2]]);
        });
        // ========== [ / D I V ] ==========

        // ========== [ P O W ] ==========
        // -- Vector sencillo A, vector sencillo B
        it('should rise single vector A to the power of single vector B', () => {
            expect(VectorOps.default.Operate([15, 20], '^', [3, 5])).toEqual([3375, 3200000]);
        });
        // -- Vector anidado A, vector sencillo B
        it('should rise nested vector A to the power of single vector B', () => {
            expect(VectorOps.default.Operate([[2, 4]], '^', [1, 2])).toEqual([[2, 16]]);
        });
        // -- Vector de vectores A, vector sencillo B
        it('should rise vector of vectors A to the power of single vector B', () => {
            expect(VectorOps.default.Operate([[8, 6], [16, 10]], '^', [4, 8])).toEqual([[4096, 1679616], [65536, 100000000]]);
        });
        // -- Vector sencillo A, vector anidado B
        it('should rise single vector A to the power of nested vector B', () => {
            expect(VectorOps.default.Operate([3, 4], '^', [[6, 5]])).toEqual([[729, 1024]]);
        });
        // -- Vector anidado A, vector anidado B
        it('should rise nested vector A to the power of nested vector B', () => {
            expect(VectorOps.default.Operate([[-1, 0]], '^', [[-2, 2]])).toEqual([[1, 0]]);
        });
        // -- Vector de vectores A, vector anidado B
        it('should rise vector of vectors A to the power of nested vector B', () => {
            expect(VectorOps.default.Operate([[5, 3], [2, 4]], '^', [[3, 6]])).toEqual([[125, 729], [8, 4096]]);
        });
        // -- Vector sencillo A, vector de vectores B
        it('should rise single vector A to the power of vector of vectors B', () => {
            expect(VectorOps.default.Operate([3, 6], '^', [[1, 2], [4, 5]])).toEqual([[3, 36], [81, 7776]]);
        });
        // -- Vector anidado A, vector de vectores B
        it('should rise nested vector A to the power of vector of vectors B', () => {
            expect(VectorOps.default.Operate([[10, 8]], '^', [[0, -1], [2, 4]])).toEqual([[1, 0.125], [100, 4096]]);
        });
        // -- Vector de vectores A, vector de vectores B
        it('should rise vector of vectors A to the power of vector of vectors B', () => {
            expect(VectorOps.default.Operate([[-2, 2], [10, -10]], '^', [[-1, 1], [2, -2]])).toEqual([[-0.5, 2], [100, 0.01]]);
        });
        // ========== [ / P O W ] ==========
    });

    describe('Errores', () => {
        // ========== [ S c a l a r O p S c a l a r ] ==========
        it('should raise operator exception', () => {
            expect(() => VectorOps.default.ScalarOpScalar(5, '&', 7.74)).toThrowError(Error);
        });
        // ========== [ / S c a l a r O p S c a l a r ] ==========

        // ========== [ S c a l a r O p V e c t o r ] ==========
        it('should raise elemnt type exception', () => {
            expect(() => VectorOps.default.ScalarOpVector(5, '+', ['a', 2, 3])).toThrowError(TypeError);
        });
        // ========== [ / S c a l a r O p V e c t o r ] ==========

        // ========== [ V e c t o r O p S c a l a r ] ==========
        it('should raise elemnt type exception', () => {
            expect(() => VectorOps.default.VectorOpScalar(['a', 2, 3], '+', 4)).toThrowError(TypeError);
        });
        // ========== [ / V e c t o r O p S c a l a r ] ==========

        // ========== [ V e c t o r O p V e c t o r D e V e c t o r e s ] ==========
        it('should raise vector shape exception', () => {
            expect(() => VectorOps.default.VectorOpVectorDeVectores([3, 4], '+', [[1, 2, 3], [4, 5, 6]])).toThrowError(Error);
        });
        // ========== [ / V e c t o r O p V e c t o r D e V e c t o r e s ] ==========

        // ========== [ V e c t o r D e V e c t o r e s O p V e c t o r ] ==========
        it('should raise vector shape exception', () => {
            expect(() => VectorOps.default.VectorDeVectoresOpVector([[1, 2, 3], [4, 5, 6]], '+', [3, 4])).toThrowError(Error);
        });
        // ========== [ / V e c t o r D e V e c t o r e s O p V e c t o r ] ==========

        // ========== [ V e c t o r O p V e c t o r ] ==========
        it('should raise operand type exception', () => {
            expect(() => VectorOps.default.VectorOpVector('b', '+', [3, 4])).toThrowError(TypeError);
        });
        it('should raise different shape exception', () => {
            expect(() => VectorOps.default.VectorOpVector([1, 2, 3], '+', [4, 5])).toThrowError(Error);
        });
        it('should raise element type exception', () => {
            expect(() => VectorOps.default.VectorOpVector([1, 2, 3], '+', ['a', 'b', 'c'])).toThrowError(TypeError);
        });
        it('should raise different shape exception', () => {
            expect(() => VectorOps.default.VectorOpVector([1, 2, 3], '+', [[1, 2, 3, 4], [1, 2, 3, 4, 5]])).toThrowError(Error);
        });
        it('should raise element type exception', () => {
            expect(() => VectorOps.default.VectorOpVector([[1, 2, 3], [4, 5, 6]], '+', ['a', 'b', 'c'])).toThrowError(TypeError);
        });
        it('should raise element type exception', () => {
            expect(() => VectorOps.default.VectorOpVector(['a', 'b', 'c'], '+', [1, 2, 3])).toThrowError(TypeError);
        });
        // ========== [ / V e c t o r O p V e c t o r ] ==========

        // ========== [ O p e r a t e ] ==========
        it('should raise element type exception', () => {
            expect(() => VectorOps.default.Operate(5, '+', 'a')).toThrowError(TypeError);
        });
        it('should raise element type exception', () => {
            expect(() => VectorOps.default.Operate([1, 2, 3], '+', 'a')).toThrowError(TypeError);
        });
        it('should raise element type exception', () => {
            expect(() => VectorOps.default.Operate('a', '+', 5)).toThrowError(TypeError);
        });
        // ========== [ / O p e r a t e ] ==========
    });
});
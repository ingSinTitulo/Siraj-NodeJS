describe('Neural network', () => {
    const NeuralNetwork = require('../dist/lib/NeuralNetwork');

    describe('public class functions', () => {
        let neural_network = new NeuralNetwork.default();

        it('should read the random generated synaptic weights', () => {
            let esperado = (
                Array.isArray(neural_network.synaptic_weights) &&
                Array.isArray(neural_network.synaptic_weights[0]) &&
                typeof neural_network.synaptic_weights[0][0] === 'number'
            );
            expect(esperado).toBe(true);
        });

        it('should train the network and generate new synaptic weights', () => {
            neural_network.train([[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]], [[0], [1], [1], [0]], 10);
            let esperado = (
                Array.isArray(neural_network.synaptic_weights) &&
                Array.isArray(neural_network.synaptic_weights[0]) &&
                typeof neural_network.synaptic_weights[0][0] === 'number'
            );
            expect(esperado).toBe(true);
        });

        it('should return an array with a single value with the result of a new case into the network', () => {
            let new_result = neural_network.think([1, 0, 0]);
            let esperado = ( Array.isArray(new_result) && typeof new_result[0] === 'number' )
            expect(esperado).toBe(true);
        });

        // think
    });
});
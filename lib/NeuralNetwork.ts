import VectorOps from './array';
import random from './random';
import './transpose';
import dot from './dot'; 

export default class NeuralNetwork
{
    public synaptic_weights: number[][];

    public constructor ()
    {
        random.seed(1);
        this.synaptic_weights = VectorOps.Operate(VectorOps.Operate(2, '*', random.random([3, 1])), '-', 1);
    }

    private __sigmoid(x: any[])
    {
        return VectorOps.Operate( 1, '/', ( VectorOps.Operate(1, '+', VectorOps.Operate(Math.E, '^', VectorOps.Operate(x, '-', VectorOps.Operate(2, '*', x)) )) ) );
    }
    
    private __sigmoid_derivative(x: number | number[][])
    {
        return VectorOps.Operate(x, '*', (VectorOps.Operate(1, '-', x)));
    }

    public train(training_set_inputs: number[][], training_set_outputs: number[][], number_of_training_iterations: number)
    {
        for (let r = 0; r < number_of_training_iterations; r++)
        {
            let output = this.think(training_set_inputs);
            let error = VectorOps.Operate(training_set_outputs, '-', output);
            let adjustment = dot(training_set_inputs.T(), VectorOps.Operate(error, '*', this.__sigmoid_derivative(output)))
            this.synaptic_weights = VectorOps.Operate(this.synaptic_weights, '+', adjustment);
        }
    }

    public think(inputs: any[])
    {
        return this.__sigmoid(dot(inputs, this.synaptic_weights));
    }
}
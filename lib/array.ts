export default class VectorOps
{
    static ScalarOpScalar(scalarA: number, op: string, scalarB: number) : number {
        switch (op) {
            case '+': return scalarA + scalarB;
            case '-': return scalarA - scalarB;
            case '*': return scalarA * scalarB;
            case '/': return scalarA / scalarB;
            case '^': return Math.pow(scalarA, scalarB);
            default: throw new Error('Operador no soportado');
        }
    }

    static ScalarOpVector(scalar: number, op: string, vector: any[]) : any[] {
        let resultado = vector.map((v: any[]) => {
            if (typeof v == 'number') return this.ScalarOpScalar(scalar, op, v);
            else if (Array.isArray(v)) return this.ScalarOpVector(scalar, op, v);
            else throw new TypeError(`Tipo de dato del elemento '${v}' no esta admitido`);
        });
        return resultado;
    }

    static VectorOpScalar(vector: any[], op: string, scalar: number) : any[]{
        let resultado = vector.map((v: any[]) => {
            if (typeof v == 'number') return this.ScalarOpScalar(v, op, scalar);
            else if (Array.isArray(v)) return this.VectorOpScalar(v, op, scalar);
            else throw new TypeError(`Tipo de dato del elemento '${v}' no esta admitido`);
        });
        return resultado;
    }

    static VectorOpVectorDeVectores(vector: any[], op: string, vectordevectores: any[]) : any[] {
        if (vector.length === vectordevectores[0].length)
        {
            let salida = [];
            for (let x = 0; x < vectordevectores.length; x++)
            {
                let parcial = vectordevectores[x].map((v: number, i: number) => this.ScalarOpScalar(vector[i], op, v));
                salida.push(parcial);
            }
            return salida;
        }
        else throw new Error('Los vectores dentro del vector B deben ser de la misma forma que el vector A');
    }

    static VectorDeVectoresOpVector(vectordevectores: any[], op: string, vector: any[]) : any[] {
        if (vector.length === vectordevectores[0].length)
        {
            let salida = [];
            for (let x = 0; x < vectordevectores.length; x++)
            {
                let parcial = vectordevectores[x].map((v: number, i: number) => this.ScalarOpScalar(v, op, vector[i]));
                salida.push(parcial);
            }
            return salida;
        }
        else throw new Error('Los vectores dentro del vector A deben ser de la misma forma que el vector B');
    }

    static VectorOpVector(vectorA: any[], op: string, vectorB: any[]) : any[] {
        if (!Array.isArray(vectorA) || !Array.isArray(vectorB)) throw new TypeError('Los operandos deben ser vectores');
        if (typeof vectorA[0] == 'number')
        {
            if (typeof vectorB[0] == 'number')
            {
                if (vectorA.length === vectorB.length) return vectorA.map((v, i) => this.ScalarOpScalar(v, op, vectorB[i]));
                else throw new Error('Los vectores deben ser de la misma forma');
            }
            else if (Array.isArray(vectorB[0])) return this.VectorOpVectorDeVectores(vectorA, op, vectorB);
            else throw new TypeError('Tipo de dato para el vector B invalido');
        }
        else if (Array.isArray(vectorA[0]))
        {
            if (typeof vectorB[0] == 'number') return this.VectorDeVectoresOpVector(vectorA, op, vectorB);
            else if (Array.isArray(vectorB[0]))
            {
                if (vectorA.length === vectorB.length)
                    return vectorA.map((v, i) => v.map((va: number, j: number) => this.ScalarOpScalar(va, op, vectorB[i][j])));
                else if (vectorA.length === 1)
                {
                    return vectorB.map(v => v.map((vx: number, i: number) => this.ScalarOpScalar(vectorA[0][i], op, vx)));
                }
                else if (vectorB.length === 1)
                {
                    return vectorA.map(v => v.map((vx: number, i: number) => this.ScalarOpScalar(vx, op, vectorB[0][i])));
                }
                else throw new Error('Los vectores deben ser de la misma forma');
            }
            else throw new TypeError('Tipo de dato para el vector B invalido');
        }
        else throw new TypeError('Tipo de dato para el vector A invalido');
    }

    static Operate(operandoIzquierdo: any, operador: string, operandoDerecho: any) : any | any[] {
        if (typeof operandoIzquierdo === 'number')
        {
            if (typeof operandoDerecho === 'number') return this.ScalarOpScalar(operandoIzquierdo, operador, operandoDerecho);
            else if (Array.isArray(operandoDerecho)) return this.ScalarOpVector(operandoIzquierdo, operador, operandoDerecho);
            else throw new TypeError('Tipo de dato del operando derecho no admitido');
        }
        else if (Array.isArray(operandoIzquierdo))
        {
            if (typeof operandoDerecho === 'number') return this.VectorOpScalar(operandoIzquierdo, operador, operandoDerecho);
            else if (Array.isArray(operandoDerecho)) return this.VectorOpVector(operandoIzquierdo, operador, operandoDerecho);
            else throw new TypeError('Tipo de dato del operando derecho no admitido');
        }
        else throw new TypeError('Tipo de dato del operando izquierdo no admitido');
    }
}
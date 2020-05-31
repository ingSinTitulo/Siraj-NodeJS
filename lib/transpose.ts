interface Array<T> {
    T(): Array<T>;
}

Array.prototype.T = function()
{
    let salida = new Array(this[0].length);
    this.map(v => {
        v.map((w: number, y: number) => {
            if (salida[y] === undefined) salida[y] = [];
            salida[y].push(w);
        });
    });
    return salida;
};
export default class random
{
    static _seed = 0x2F6E2B1;

    static _rand() : number {
        this._seed = ((this._seed + 0x7ED55D16) + (this._seed << 12))  & 0xFFFFFFFF;
		this._seed = ((this._seed ^ 0xC761C23C) ^ (this._seed >>> 19)) & 0xFFFFFFFF;
		this._seed = ((this._seed + 0x165667B1) + (this._seed << 5))   & 0xFFFFFFFF;
		this._seed = ((this._seed + 0xD3A2646C) ^ (this._seed << 9))   & 0xFFFFFFFF;
		this._seed = ((this._seed + 0xFD7046C5) + (this._seed << 3))   & 0xFFFFFFFF;
		this._seed = ((this._seed ^ 0xB55A4F09) ^ (this._seed >>> 16)) & 0xFFFFFFFF;
		return (this._seed & 0xFFFFFFF) / 0x10000000;
    }

    static seed(x: number) {
        this._seed = x;
    }

    static random(size: number[] | undefined) : number | number[][] {
        if (size == null) return this._rand();
        else
        {
            if (Array.isArray(size) && size.length == 2)
            {
                let pack: number[][] = [];
                let y = size[0];
                let cantidadElementos = size[1];
                for (let x = 0; x < y; x++)
                {
                    pack[x] = [];
                    for (let elementos = 0; elementos < cantidadElementos; elementos++)
                    {
                        pack[x][elementos] = this._rand();
                    }
                }
                return pack;
            }
            else throw new Error('Solo de dos dimensiones por ahora');
        }
    }
}
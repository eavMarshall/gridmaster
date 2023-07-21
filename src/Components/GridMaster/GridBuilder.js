export default class GridBuilder {
    #width;
    $height;
    #grid;

    constructor(width, height) {
        this.#width = width;
        this.$height = height;
    }

    build = () => {
        this.#grid = '';
        for (let x = 0; x < this.$height; x++) {
            let row = '    "';
            for (let y = 0; y < this.#width; y++) {
                row += 'x' + x + 'y' + y + ' '
            }
            this.#grid += row.slice(0, -1) + '"' + '\n';
        }
        return this;
    };

    getGrid = () => {
        return "grid-template-areas:\n" + this.#grid;
    }
}

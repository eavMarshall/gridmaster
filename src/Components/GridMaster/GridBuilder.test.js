import {expect, test} from '@jest/globals';
import GridBuilder from './GridBuilder';

test('Test grid css is correct', () => {
    let gridBuilder = new GridBuilder(3, 3).build();

    expect(gridBuilder.getGrid()).toBe(
        'grid-template-areas:\n' +
        '    "x0y0 x0y1 x0y2"\n' +
        '    "x1y0 x1y1 x1y2"\n' +
        '    "x2y0 x2y1 x2y2"\n'
    );
})

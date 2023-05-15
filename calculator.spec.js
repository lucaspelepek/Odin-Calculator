const calculator = require('./calculator')

describe('operate', () => {
    it('should return 4 when passed 12 + 7 - 5 * 3', () => {
        const result = calculator.operate('12 + 7 - 5 * 3');
        expect(result).toBe('4');
    })
})

describe('sum', () => {
    it('should return 3 when passed 1 and 2', () => {
        const result = calculator.sumAndSubtract(['1', '+', '2']);
        expect(result[0]).toBe('3');
    });

    it('should return 0 when passed 0 and 0', () => {
        const result = calculator.sumAndSubtract(['0', '+', '0']);
        expect(result[0]).toBe('0');
    });

    it('should return -3 when passed -1 and -2', () => {
        const result = calculator.sumAndSubtract(['-1', '+', '-2']);
        expect(result[0]).toBe('-3');
    });
});

describe('subtract', () => {
    it('should return -1 when passed 1 and 2', () => {
        const result = calculator.sumAndSubtract(['1', '-', '2']);
        expect(result[0]).toBe('-1');
    });

    it('should return 0 when passed 0 and 0', () => {
        const result = calculator.sumAndSubtract(['0', '-', '0']);
        expect(result[0]).toBe('0');
    });

    it('should return 1 when passed -1 and -2', () => {
        const result = calculator.sumAndSubtract(['-1', '-', '-2']);
        expect(result[0]).toBe('1');
    });
});

describe('multiply', () => {
    it('should return 2 when passed 1 and 2', () => {
        const result = calculator.multiplyAndDivision(['1', '*', '2']);
        expect(result[0]).toBe('2');
    });

    it('should return 0 when passed 0 and 0', () => {
        const result = calculator.multiplyAndDivision(['0', '*', '0']);
        expect(result[0]).toBe('0');
    });

    it('should return 2 when passed -1 and -2', () => {
        const result = calculator.multiplyAndDivision(['-1', '*', '-2']);
        expect(result[0]).toBe('2');
    });
});

describe('divide', () => {
    it('should return 0.5 when passed 1 and 2', () => {
        const result = calculator.multiplyAndDivision(['1', '/', '2']);
        expect(result[0]).toBe('0.5');
    });

    it('should return 0.5 when passed -1 and -2', () => {
        const result = calculator.multiplyAndDivision(['-1','/', '-2']);
        expect(result[0]).toBe('0.5');
    });
});

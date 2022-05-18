import '@testing-library/jest-dom/extend-expect';
import { toKebabCase } from '../string';

describe('String test in util', () => {
    it('testing string literals', () => {
        expect(toKebabCase('123teste')).toBe('123-teste');
        expect(toKebabCase('123')).toBe('123');
        expect(toKebabCase('123teste123teste')).toBe('123-teste123-teste');
    });
});

const formatVolumeIconPath = require('../assets/scripts/main');

describe('Update the format Volume Icon Path', () => {

    test('Volume Icon with value greater than 66', () => {
        expect(formatVolumeIconPath(67)).toContain('level-3');
    });

    test('Volume Icon with value greater than 33 and less than 67', () => {
        expect(formatVolumeIconPath(66)).toContain('level-2');
    });

    test('Volume Icon with value greater than 33 and less than 67', () => {
        expect(formatVolumeIconPath(35)).toContain('level-2');
    });

    test('Volume Icon with value greater than 0 and less than 34', () => {
        expect(formatVolumeIconPath(33)).toContain('level-1');
    });

    test('Volume Icon with value greater than 0', () => {
        expect(formatVolumeIconPath(25)).toContain('level-1');
    });

    test('Volume Icon with value equal to 0', () => {
        expect(formatVolumeIconPath(0)).toContain('level-0');
    });

    test('Volume Icon with value less than 0', () => {
        expect(formatVolumeIconPath(-1)).toContain('level-0');
    });
})
// Import the js file to test
import { isValidUrl } from '../urlChecker';

describe('Testing the URL validation functionality', () => {
    test('Testing isValidUrl() with a valid URL', () => {
        expect(isValidUrl('http://example.com')).toBe(true);
    });

    test('Testing isValidUrl() with an invalid URL', () => {
        expect(isValidUrl('invalid-url')).toBe(false);
    });
});

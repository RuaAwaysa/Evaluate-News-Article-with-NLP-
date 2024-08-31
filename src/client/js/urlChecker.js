// Function to check URL validity 
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}
export { isValidUrl };

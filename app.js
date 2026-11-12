function getGreeting() {
    return "Привет, мир! ";
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getGreeting };
}

if (typeof window !== 'undefined') {
    window.getGreeting = getGreeting;
}
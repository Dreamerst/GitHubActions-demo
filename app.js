function getGreeting() {
    return "Hello, world! ";
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getGreeting };
}

if (typeof window !== 'undefined') {
    window.getGreeting = getGreeting;
}
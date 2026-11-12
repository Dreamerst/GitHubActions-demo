function getGreeting() {
    return "Привет, мир! Это приложение прошло через CI/CD пайплайн.";
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getGreeting };
}

if (typeof window !== 'undefined') {
    window.getGreeting = getGreeting;
}
document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('langSwitcher');

    langSwitcher.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    function setLanguage(lang) {
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
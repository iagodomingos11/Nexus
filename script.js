// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Animação simples para a seção de Soluções
    const solutionsSection = document.getElementById('solucoes');

    const observerSolutions = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                solutionsSection.querySelectorAll('.feature-item').forEach((item, index) => {
                    item.style.opacity = 0;
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                        item.style.opacity = 1;
                        item.style.transform = 'translateY(0)';
                    }, index * 150);
                });
                observerSolutions.unobserve(solutionsSection);
            }
        });
    }, { threshold: 0.2 });

    if (solutionsSection) {
        observerSolutions.observe(solutionsSection);
    }

    // Você pode adicionar mais animações ou funcionalidades aqui.
});

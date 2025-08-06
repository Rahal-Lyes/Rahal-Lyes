
        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Check for saved theme preference or default to 'light'
        const currentTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', currentTheme);
        
        // Update toggle button icon based on current theme
        function updateToggleIcon(theme) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
        
        updateToggleIcon(currentTheme);
        
        // Theme toggle event listener
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateToggleIcon(newTheme);
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.1s';
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe all elements that should fade in
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
        
        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = body.getAttribute('data-theme') === 'dark' 
                    ? 'rgba(17, 24, 39, 0.98)' 
                    : 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = body.getAttribute('data-theme') === 'dark' 
                    ? 'rgba(17, 24, 39, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)';
            }
        });
    
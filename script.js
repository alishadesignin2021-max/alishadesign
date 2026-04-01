document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link, .nav-cta');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // height of sticky header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Gallery Dynamic Loading
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        galleryGrid.innerHTML = ''; // clear current items if any
        
        const galleryImages = [
            "WhatsApp Image 2026-03-31 at 19.41.23.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.24.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.26.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.27.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.33.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.34 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.34 (2).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.34.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.35 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.35.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.36 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.36 (2).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.36.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.37 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.37 (2).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.37.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.39.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.40 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.40 (2).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.40 (3).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.40.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.42 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.42.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.43 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.43.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.44 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.44.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.46 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.46.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.47 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.47 (2).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.47.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.48 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.48 (2).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.48.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.49.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.52.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.53.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.54 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.54.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.55 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.55.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.56 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.56.jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.57 (1).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.57 (2).jpeg",
            "WhatsApp Image 2026-03-31 at 19.41.57.jpeg"
        ];
        
        galleryImages.forEach((image, index) => {
            const delay = (index % 5) * 100;
            const itemHtml = `
                <div class="gallery-item reveal" style="transition-delay: ${delay}ms;">
                    <img src="gallery/${image}" alt="Alisha Design Project" loading="lazy">
                    <div class="gallery-overlay"></div>
                </div>
            `;
            galleryGrid.insertAdjacentHTML('beforeend', itemHtml);
        });
    }

    // 5. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 5. Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            const whatsappNumber = "918766591211";

            const text = `Hello Alisha Design,%0A%0AI would like to discuss a project. My details are:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`;

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

            window.open(whatsappUrl, '_blank');

            contactForm.reset();
        });
    }
});

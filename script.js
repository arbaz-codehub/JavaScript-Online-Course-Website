document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            });
        });
    }

    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const offsetTop = document.querySelector(href).offsetTop;

                scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            });
        });
    }

    const videoModal = () => {
        const courseCards = document.querySelectorAll('.course-card');
        const modal = document.querySelector('.video-modal');
        const closeModal = document.querySelector('.close-modal');
        const iframe = modal.querySelector('iframe');

        courseCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoId = card.getAttribute('data-video-id');
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            iframe.src = '';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                iframe.src = '';
            }
        });
    }

    const showMoreVideos = () => {
        const showMoreBtn = document.getElementById('show-more');
        const hiddenCards = document.querySelectorAll('.course-card.hidden');

        showMoreBtn.addEventListener('click', () => {
            hiddenCards.forEach(card => {
                card.classList.remove('hidden');
            });
            showMoreBtn.style.display = 'none';
        });
    }

    navSlide();
    smoothScroll();
    videoModal();
    showMoreVideos();
});
$(document).ready(function() {
    // ===== Preloader =====
    $(window).on('load', function() {
        setTimeout(function() {
            $('.preloader').addClass('hidden');
        }, 1000);
    });

    // ===== Mobile Menu Toggle =====
    $('#hamburger').click(function() {
        $(this).toggleClass('active');
        $('#navMenu').toggleClass('active');
    });

    // Close menu when clicking on a link
    $('.nav-menu a').click(function() {
        $('#hamburger').removeClass('active');
        $('#navMenu').removeClass('active');
    });

    // ===== Typing Effect =====
    const roles = [
        'Backend Developer',
        'Cloud Enthusiast',
        'AI/ML Explorer',
        'Problem Solver',
        'Full-Stack Developer'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typedTextElement = $('.typed-text');

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedTextElement.text(currentRole.substring(0, charIndex - 1));
            charIndex--;
        } else {
            typedTextElement.text(currentRole.substring(0, charIndex + 1));
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (typedTextElement.length) {
        typeEffect();
    }

    // ===== Scroll Animations =====
    function revealOnScroll() {
        const elements = $('.resume-section, .project-card, .stat-item, .skill-category');
        
        elements.each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    // Initial styling for animation
    $('.resume-section, .project-card, .stat-item, .skill-category').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease'
    });

    $(window).scroll(revealOnScroll);
    revealOnScroll(); // Initial check

    // ===== Smooth Scrolling =====
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    // ===== Form Submission =====
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // ===== Navbar Background on Scroll =====
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background', 'rgba(8, 27, 41, 0.98)');
        } else {
            $('.navbar').css('background', 'rgba(8, 27, 41, 0.95)');
        }
    });

    // ===== Download Resume Button =====
    $('.download-btn').click(function(e) {
        e.preventDefault();
        alert('Resume download feature will be implemented with your actual PDF file.');
    });
});

// Portfolio JavaScript

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with slide-up class
document.addEventListener('DOMContentLoaded', function() {
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Stagger animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Smooth hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons/links on click
    const interactiveElements = document.querySelectorAll('.project-link, .skill-tag');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Handle profile image loading
document.addEventListener('DOMContentLoaded', function() {
    const profileImages = document.querySelectorAll('img[src*="profile.jpg"]');
    profileImages.forEach(img => {
        img.onerror = function() {
            console.warn('Profile image not found at:', this.src);
            // Optionally hide broken images or show placeholder
            this.style.display = 'none';
        };
        img.onload = function() {
            console.log('Profile image loaded successfully');
        };
    });
});

// Enhanced resume download functionality with syringe animation
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-resume-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add downloading class for animation
            this.classList.add('downloading');
            
            // Remove downloading class after animation completes
            setTimeout(() => {
                this.classList.remove('downloading');
            }, 2000);
            
            // Check if browser supports download attribute
            if (this.hasAttribute('download')) {
                // Let browser handle download, but add visual feedback
                return;
            }
            
            // Fallback: Open in new tab if download attribute not supported
            e.preventDefault();
            const resumeUrl = this.getAttribute('href');
            window.open(resumeUrl, '_blank');
            
            // Remove downloading class after opening
            setTimeout(() => {
                this.classList.remove('downloading');
            }, 1500);
        });
        
        // Add hover effect for syringe pull animation
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('downloading')) {
                // Animation handled by CSS
            }
        });
    });
});

// Future: Load resume data from JSON file and populate sections
// fetch('data/resume.json')
//     .then(response => response.json())
//     .then(data => {
//         // Populate sections with resume data
//         updateResume(data);
//         updateSkills(data);
//         updateExperience(data);
//         updateEducation(data);
//         updateProjects(data);
//     })
//     .catch(error => console.error('Error loading resume data:', error));


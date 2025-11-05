// Interactive Skills with Tooltips and Hover Effects

document.addEventListener('DOMContentLoaded', function() {
    const skillWrappers = document.querySelectorAll('.skill-icon-wrapper');
    
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    document.body.appendChild(tooltip);
    
    skillWrappers.forEach(wrapper => {
        const skillName = wrapper.getAttribute('data-skill');
        
        // Hover effect
        wrapper.addEventListener('mouseenter', function(e) {
            this.style.transform = 'translateY(-8px) scale(1.1)';
            this.style.transition = 'all 0.3s ease';
            
            // Show tooltip
            tooltip.textContent = skillName;
            tooltip.style.display = 'block';
            updateTooltipPosition(e, tooltip);
        });
        
        wrapper.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            tooltip.style.display = 'none';
        });
        
        wrapper.addEventListener('mousemove', function(e) {
            updateTooltipPosition(e, tooltip);
        });
        
        // Click effect
        wrapper.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1.1)';
            }, 150);
        });
    });
    
    function updateTooltipPosition(e, tooltip) {
        const x = e.clientX + 15;
        const y = e.clientY - 10;
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }
    
    // Add ripple effect on click
    skillWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('skill-ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});



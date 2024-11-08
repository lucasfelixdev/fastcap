document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.question-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-toggle');
        const target = document.getElementById(targetId);
        const svgIcon = this.querySelector('svg');
        const isExpanded = target.style.display === 'block';
  
        if (isExpanded) {
          target.style.display = 'none';
          svgIcon.classList.remove('rotate-180');
        } else {
          target.style.display = 'block';
          svgIcon.classList.add('rotate-180');
        }
      });
    });
  });
  
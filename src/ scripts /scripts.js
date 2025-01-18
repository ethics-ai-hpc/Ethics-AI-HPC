document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            sections.forEach(section => {
                section.style.display = 'none';
            });
            links.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(this.getAttribute('href')).style.display = 'block';
            this.classList.add('active');
        });
    });
});

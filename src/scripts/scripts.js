document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav .navbar-nav a'); // Select all anchor tags inside the navbar
    const sections = document.querySelectorAll('section'); // Select all sections

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none'; // Hide each section
        });
    }

    // Function to add click event to each link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior
            const targetId = this.getAttribute('href').substring(1); // Get the href attribute and remove the #
            hideAllSections(); // Hide all sections
            document.getElementById(targetId).style.display = 'block'; // Display the clicked section

            // 如果点击的是 "Home"，滚动到页面顶部
            if (targetId === 'home') {
                window.scrollTo(0, 0);  // 页面滚动到顶部
            }
        });
    });

    // Initially display the home section and hide others
    hideAllSections();
    document.getElementById('home').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href')); // 确保获取正确的目标区块

            // 隐藏所有section
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // 移除所有链接的active类
            links.forEach(link => {
                link.classList.remove('active');
            });

            // 显示点击的链接对应的section并添加active类
            targetSection.style.display = 'block';
            this.classList.add('active');
        });
    });
});

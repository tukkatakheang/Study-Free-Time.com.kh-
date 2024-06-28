document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('nav ul li a');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            const target = this.getAttribute('href').substring(1);
            const tabContent = document.getElementById(target);

            document.querySelectorAll('.tab-content').forEach(item => {
                item.classList.remove('active');
            });

            tabContent.classList.add('active');

            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});

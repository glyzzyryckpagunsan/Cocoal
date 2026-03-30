document.addEventListener('DOMContentLoaded', () => {

    // --- ACCORDION LOGIC ---
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(acc => {
        acc.addEventListener("click", function() {
            // Toggle active state on button
            this.classList.toggle("active");
            
            // Toggle panel height
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // --- SCROLLSPY LOGIC (HIGHLIGHT ACTIVE NAV LINK) ---
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Options for Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Adjust offsets to trigger mid-screen
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get ID of the intersecting section
                const currentId = entry.target.getAttribute('id');

                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Add active class to the link corresponding to the section
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
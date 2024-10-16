
    document.addEventListener("DOMContentLoaded", function() {
        const projectSection = document.getElementById("project");

        // Function to check if the element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Listen to the scroll event
        window.addEventListener("scroll", function() {
            if (isInViewport(projectSection)) {
                projectSection.classList.add("show"); // Add the class when in view
            }
        });
    });


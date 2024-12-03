(function() {
    const createParticleContainer = () => {
        // Create a full-screen container for the particles
        const container = document.createElement("div");
        container.id = "particle-background";
        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.zIndex = "9999"; // Below interactive elements, above normal content
        container.style.pointerEvents = "none"; // Don't block user interaction
        container.style.overflow = "hidden"; // Ensure particles stay within bounds
        document.body.appendChild(container);
        return container;
    };

    const container = createParticleContainer();

    const createParticle = () => {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.background = "white"; // White particles
        particle.style.width = particle.style.height = Math.random() * 4 + 2 + "px"; // 2px to 6px particles
        particle.style.borderRadius = "50%";
        particle.style.top = "-10px"; // Start above the container
        particle.style.left = Math.random() * 100 + "%"; // Random X position (0% to 100%)
        particle.style.opacity = Math.random() * 0.5 + 0.5; // Semi-transparent
        particle.style.transition = "transform 7s linear, opacity 7s"; // Smooth fall
        container.appendChild(particle);

        // Animate the particle to fall
        setTimeout(() => {
            particle.style.transform = `translateY(${container.clientHeight + 50}px)`; // Fall beyond the bottom
            particle.style.opacity = "0"; // Fade out
            setTimeout(() => particle.remove(), 7000); // Remove after animation ends
        }, 100);
    };

    const initParticles = () => {
        setInterval(createParticle, 200); // Add particles at regular intervals
    };

    const overlayIframe = () => {
        const style = document.createElement("style");
        style.innerHTML = `
            iframe {
                pointer-events: none !important; /* Ensure particles are visible over iframes */
            }
        `;
        document.head.appendChild(style);
    };

    overlayIframe();
    initParticles();
})();

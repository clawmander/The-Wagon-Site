(function() {
    const particles = [];

    const createParticle = () => {
        const particle = document.createElement("div");
        particle.style.position = "fixed";
        particle.style.zIndex = "999999"; // Ensures particles appear on top of everything
        particle.style.background = "white"; // All particles are white
        particle.style.width = particle.style.height = Math.random() * 4 + 2 + "px"; // Small circles (2px to 6px)
        particle.style.borderRadius = "50%";
        particle.style.top = "-10px"; // Start above the screen
        particle.style.left = Math.random() * window.innerWidth + "px"; // Random X position
        particle.style.pointerEvents = "none";
        particle.style.opacity = Math.random() * 0.5 + 0.5; // Semi-transparent
        particle.style.transition = "transform 7s linear, opacity 7s"; // Slow fall effect
        document.body.appendChild(particle);
        particles.push(particle);

        // Move the particle downward
        setTimeout(() => {
            particle.style.transform = `translateY(${window.innerHeight + 50}px)`; // Fall below the screen
            particle.style.opacity = "0"; // Gradual fade-out
            setTimeout(() => {
                particle.remove(); // Clean up particles after animation ends
                particles.splice(particles.indexOf(particle), 1);
            }, 7000);
        }, 100);
    };

    const initParticles = () => {
        // Continuously generate particles
        setInterval(createParticle, 200); // Slower spawn rate for less density
    };

    // Ensure particles overlay even over iframes
    const overlayIframe = () => {
        const style = document.createElement("style");
        style.innerHTML = `
            iframe {
                pointer-events: none !important; /* Prevent iframe from blocking particle clicks */
            }
        `;
        document.head.appendChild(style);
    };

    overlayIframe();
    initParticles();
})();

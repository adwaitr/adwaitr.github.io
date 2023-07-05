particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Adjust the number of particles
      density: {
        enable: true,
        value_area: 800 // Adjust the density of particles
      }
    },
    color: {
      value: "#ffffff" // Adjust the color of particles
    },
    shape: {
      type: "circle" // Adjust the shape of particles (circle, edge, triangle, polygon, star, image, or an array of custom shapes)
    },
    opacity: {
      value: 0.5, // Adjust the opacity of particles
      random: true
    },
    size: {
      value: 3, // Adjust the size of particles
      random: true
    },
    move: {
      enable: true,
      speed: 2 // Adjust the speed of particles
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // Adjust the interaction mode on hover (grab, bubble, repulse, or an array of modes)
      }
    }
  }
});

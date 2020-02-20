const particlesData = {
  fps_limit: 60,
  interactivity: {
    detect_on: 'canvas',
    events: {
      onclick: {
        enable: true,
        mode: 'push'
      },
      onhover: {
        enable: true,
        mode: 'grab',
        parallax: {
          enable: false,
          force: 2,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 0.4,
        opacity: 1,
        size: 80
      },
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#fff'
    },
    line_linked: {
      color: '#fff',
      distance: 100,
      enable: true,
      opacity: 1,
      width: 1
    },
    move: {
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 400
    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 0,
        speed: 2,
        sync: false
      },
      random: false,
      value: 1
    },
    shape: {
      character: {
        fill: false,
        font: 'Verdana',
        style: '',
        value: '*',
        weight: '400'
      },
      image: {
        height: 100,
        replace_color: true,
        src: '',
        width: 100
      },
      polygon: {
        nb_sides: 5
      },
      stroke: {
        color: '#ff0000',
        width: 0
      },
      type: 'circle'
    },
    size: {
      anim: {
        enable: false,
        size_min: 0,
        speed: 20,
        sync: false
      },
      random: false,
      value: 20
    }
  },
  retina_detect: false,
  config_demo: {
    hide_card: false,
    background_color: '#b61924',
    background_image: '',
    background_position: '50% 50%',
    background_repeat: 'no-repeat',
    background_size: 'cover'
  }
}

export {
    particlesData
}

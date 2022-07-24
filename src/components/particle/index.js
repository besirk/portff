import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import './index.css'

const particle = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
  
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
  
  "fullScreen": {
    "enable" : false
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "bubble"
      },
      
      "onHover": {
        "enable": true,
        "mode": "bubble",
        
      }
    },
    
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": {
        "value": "#000"
      },
      "distance": 150,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 100
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.2
      }
    },
    "rotate": {
      "random": {
        "enable": true
      },
      "animation": {
        "enable": true,
        "speed": 5
      },
      "direction": "random"
    },
    "shape": {
      "options": {
        
       
        "image": [
          {
            
            "src": "https://img.icons8.com/office/16/000000/react.png",
           
          },
          {
            "src": "https://img.icons8.com/color/48/000000/html-5--v1.png",
          },
          {
            "src": "https://img.icons8.com/color/48/000000/css3.png",
          },
          {
            "src": "https://img.icons8.com/color/48/000000/javascript--v1.png",
          },
          
        ],
        
      },
      "type": "image",
      
    },
    "size": {
      "value": 12,
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    },
    
  }
}}
    />
  );
};
export default particle
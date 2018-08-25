import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-secciones-carousel',
  templateUrl: './secciones-carousel.component.html',
  styleUrls: ['./secciones-carousel.component.css']
})
export class SeccionesCarouselComponent implements OnInit {

  constructor(private ref:ChangeDetectorRef,private router:Router) { }
  public carouselOne: NguCarousel;
  imagenesCarousel:string[]=['https://johnlewis.scene7.com/is/image/JohnLewis/microsoft-camaign-block-030418?','https://johnlewis.scene7.com/is/image/JohnLewis/microsoft-camaign-block-030418?'];

  myStyle: object = {};
    myParams: object = {};
    width: number = 100;
  
  @Input() objetos:any;

  arrayImagenesCarousel:any[];
  imagenesDerechaSuperior:any={
    imagenSuperior:{},
    imagenInferior:{}
  }

  url="https://johnlewis.scene7.com/is/image/JohnLewis/microsoft-camaign-block-030418?";
  
  ngOnInit() {

    setTimeout(() => {
      this.arrayImagenesCarousel=this.objetos.objetosCarousel;
      this.imagenesDerechaSuperior=this.objetos.imagenesDerechaSuperior;
    }, 300);
   
    setInterval(()=>{
      this.ref.markForCheck();
    },300)

    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
    }

    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index':2,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

   this.myParams = {
  
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#FFFFFF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 29,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

 };

 navegar(url){
   this.router.navigate([url]);
 }


}





import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  cards = [
    {
      title: 'Hourly Care',
      img: 'assets/feature1.svg',
      description: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },
    {
      title: 'Personal Care',
      img: 'assets/feature2.svg',
      description: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },{
      title: 'Private Nursing Care',
      img: 'assets/feature3.svg',
      description: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },{
      title: 'Respite Care',
      img: 'assets/feature4.svg',
      description: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },{
      title: 'Life-in Aid',
      img: 'assets/feature5.svg',
      description: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },{
      title: 'Memory Care',
      img: 'assets/feature6.svg',
      description: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },{
      title: 'Memory Care',
      img: 'assets/feature6.svg',
      description: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },
    
  ];
  
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);

    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }




}

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerreview',
  templateUrl: './customerreview.component.html',
  styleUrls: ['./customerreview.component.css']
})
export class CustomerreviewComponent implements OnInit {
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  constructor() { 
    
  }

  cards = [
    {
      title: 'Alvin Stanely',

      description: 'Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help. ',
      
      
    },
    {
      title: 'Alvin Stanely',
      description: 'Great company to work for! This organization cares for its team of caregivers, office employees, and clients.',
      
      
    },
    {
      title: 'Alvin Stanely',
      description: 'Awesome!',
      
      
    },
    {
      title: 'Alvin Stanely',

      description: 'Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help. ',
      
      
    },
    {
      title: 'Alvin Stanely',
      description: 'Great company to work for! This organization cares for its team of caregivers, office employees, and clients.',
      
      
    },
    {
      title: 'Alvin Stanely',
      description: 'Awesome!',
      
      
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


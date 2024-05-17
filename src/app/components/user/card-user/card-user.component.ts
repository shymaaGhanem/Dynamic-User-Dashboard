import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class CardUserComponent {

@Input() allUsers:any[]=[];
@Input() term:string='';
cards!: HTMLElement[];

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.cards = this.elementRef.nativeElement.querySelectorAll('.user-card');
    this.observeCards();
  }

  observeCards() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { rootMargin: '0px', threshold: 0.2 });

    this.cards.forEach(card => {
      observer.observe(card);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.cards.forEach(card => {
      if (this.isElementInViewport(card) && !card.classList.contains('visible')) {
        card.classList.add('visible');
      }
    });
  }

  isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
}


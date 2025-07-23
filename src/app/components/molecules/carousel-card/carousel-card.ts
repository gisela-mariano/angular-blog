import { Component, input, ViewEncapsulation } from '@angular/core';
import { Button } from '@components/atoms/button/button';

@Component({
  selector: 'app-carousel-card',
  imports: [Button],
  templateUrl: './carousel-card.html',
  styleUrl: './carousel-card.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CarouselCard {
  images = input.required<string[]>();

  currentIndex = 0;
  countdown = 30;
  intervalId: number | null = null;

  ngOnInit(): void {
    this.resetCountdown();
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId!);
  }

  resetCountdown(): void {
    this.countdown = 30;
  }

  startTimer(): void {
    this.resetCountdown();

    this.intervalId = setInterval(() => {
      this.countdown--;

      if (this.countdown === 0) {
        this.nextImage();
      }
    }, 1000);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images().length;

    clearInterval(this.intervalId!);

    this.startTimer();
  }
}

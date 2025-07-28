import { Component, signal, ViewEncapsulation } from '@angular/core';
import { Button } from '@components/atoms/button/button';

@Component({
  selector: 'app-join-form',
  imports: [Button],
  templateUrl: './join-form.html',
  styleUrl: './join-form.scss',
  encapsulation: ViewEncapsulation.None,
})
export class JoinForm {
  price = signal(43.95);
}

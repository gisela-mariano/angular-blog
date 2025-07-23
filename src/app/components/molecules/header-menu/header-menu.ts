import { MenuItem } from '@/types';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
} from '@angular/core';
import { Button } from '@components/atoms/button/button';

@Component({
  selector: 'app-header-menu',
  imports: [Button],
  templateUrl: './header-menu.html',
  styleUrl: './header-menu.scss',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderMenu {
  menuItems: MenuItem[] = [
    {
      label: 'Articles',
      href: '',
    },
    {
      label: 'About',
      href: '',
    },
    {
      label: 'Join now',
      href: '',
    },
  ];
}

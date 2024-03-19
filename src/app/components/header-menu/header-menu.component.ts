import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [SearchInputComponent, CategoryListComponent, RouterLink, RouterLinkActive],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {

}

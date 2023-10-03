import { MenuService } from './service/menu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GC_CMS';

  navMenu?: MenuJson[];

  constructor(
    private menuService: MenuService
  ) {
    this.getMenu();
  }


  getMenu() {
    this.menuService.getMenu().subscribe(
      data => {
        this.navMenu = data;
      }
    )
  }
}

export interface MenuJson {
  title: string
  menuList: [{
    name: string,
    path: string
  }
  ]
}

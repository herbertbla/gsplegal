import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: false
})
export class AppComponent {
  title = 'gsplegal';
  germanSelected = false;

  changeLanguage = function (key) {
    this.germanSelected = (key === 'de');
    this.translate.use(key);
  };

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }
  openTodo = function() {
    window.open('http://jupiter.bplaced.net/todo.htm');
  }
}

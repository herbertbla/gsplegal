import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'gsplegalAngular7';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }
}

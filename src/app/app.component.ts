import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './services/scroll.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: false
})
export class AppComponent {
  title = 'gsplegal';
  germanSelected = false;

  changeLanguage = (key: string): void => {
    this.germanSelected = (key === 'de');
    this.translate.use(key);
  };

  constructor(
    private translate: TranslateService,
    private scrollService: ScrollService
  ) {
    // Enable auto-scrolling to top on route changes
    this.scrollService.enableAutoScrollToTop();
  }
}

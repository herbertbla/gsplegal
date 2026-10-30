import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-kontakt',
    templateUrl: './kontakt.component.html',
    styleUrls: ['./kontakt.component.less'],
    standalone: false
})
export class KontaktComponent implements OnInit {
  currentLang = 'de';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.currentLang = this.translate.getCurrentLang() || 'de';
    this.translate.onLangChange.subscribe(event => this.currentLang = event.lang);
  }

}

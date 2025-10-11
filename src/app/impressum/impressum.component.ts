import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.less'],
  standalone: false
})
export class ImpressumComponent implements OnInit {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'de';
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }
}

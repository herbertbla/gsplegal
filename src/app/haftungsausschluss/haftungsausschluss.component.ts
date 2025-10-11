import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-haftungsausschluss',
  templateUrl: './haftungsausschluss.component.html',
  styleUrls: ['./haftungsausschluss.component.less'],
  standalone: false
})
export class HaftungsausschlussComponent implements OnInit {
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

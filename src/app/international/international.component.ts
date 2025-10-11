import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.less'],
  standalone: false
})
export class InternationalComponent implements OnInit {
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

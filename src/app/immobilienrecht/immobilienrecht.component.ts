import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-immobilienrecht',
  templateUrl: './immobilienrecht.component.html',
  styleUrls: ['./immobilienrecht.component.less'],
  standalone: false,
})
export class ImmobilienrechtComponent implements OnInit {
  currentLang: string;

  constructor(
    private translate: TranslateService,
    private location: Location
  ) {
    this.currentLang = this.translate.currentLang || 'de';
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  goBack(): void {
    this.location.back();
  }
}

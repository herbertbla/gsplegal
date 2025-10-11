import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gesellschaftsrecht',
  templateUrl: './gesellschaftsrecht.component.html',
  styleUrls: ['./gesellschaftsrecht.component.less'],
  standalone: false
})
export class GesellschaftsrechtComponent implements OnInit {
  currentLang: string = 'de';

  constructor(
    private translate: TranslateService,
    private location: Location
  ) {}

  ngOnInit() {
    this.currentLang = this.translate.currentLang || 'de';
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  goBack(): void {
    this.location.back();
  }
}

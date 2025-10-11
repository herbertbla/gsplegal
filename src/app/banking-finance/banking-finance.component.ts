import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banking-finance',
  templateUrl: './banking-finance.component.html',
  styleUrls: ['./banking-finance.component.less'],
  standalone: false
})
export class BankingFinanceComponent implements OnInit {
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

  goBack(): void {
    this.location.back();
  }
}

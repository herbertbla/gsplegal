import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.less'],
    standalone: false
})
export class TeamComponent implements OnInit {

  currentLang = 'de';

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.currentLang = this.translate.getCurrentLang() || 'de';
    this.translate.onLangChange.subscribe(event => this.currentLang = event.lang);
  }

}

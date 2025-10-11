import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMemberService } from '../../shared/services/team-member.service';
import { TeamMember } from '../../shared/models/team-member.model';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-roupec',
  templateUrl: './roupec.component.html',
  styleUrls: ['./roupec.component.less'],
  standalone: false
})
export class RoupecComponent implements OnInit {
  teamMember$: Observable<TeamMember | undefined>;
  currentLang: string = 'de';

  constructor(
    private router: Router,
    private teamMemberService: TeamMemberService,
    private translate: TranslateService
  ) {
    this.teamMember$ = this.teamMemberService.getTeamMemberById('anita-roupec');
    this.currentLang = this.translate.currentLang || 'de';
  }

  ngOnInit(): void {
    // Set initial language
    this.currentLang = this.translate.currentLang || 'de';

    // Subscribe to language changes
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
      // Force change detection to update the view
      this.teamMember$ = this.teamMemberService.getTeamMemberById('anita-roupec');
    });
  }

  // Helper method to get the correct array based on current language
  getLocalizedArray(items: string[] = [], itemsEn: string[] = []): string[] {
    return (this.currentLang === 'en' && itemsEn.length > 0) ? itemsEn : items;
  }

  goBack(): void {
    this.router.navigate(['/team']);
  }
}

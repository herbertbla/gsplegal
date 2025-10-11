import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMemberService } from '../../shared/services/team-member.service';
import { TeamMember } from '../../shared/models/team-member.model';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reiter',
  templateUrl: './reiter.component.html',
  styleUrls: ['./reiter.component.less'],
  standalone: false
})
export class ReiterComponent implements OnInit {
  teamMember$: Observable<TeamMember | undefined>;
  currentLang: string = 'de';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamMemberService: TeamMemberService,
    private translate: TranslateService
  ) {
    this.teamMember$ = this.teamMemberService.getTeamMemberById('daniel-reiter');
    this.currentLang = this.translate.currentLang || 'de';
  }

  ngOnInit(): void {
    // Set initial language
    this.currentLang = this.translate.currentLang || 'de';
    
    // Subscribe to language changes
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
      // Force change detection to update the view
      this.teamMember$ = this.teamMemberService.getTeamMemberById('daniel-reiter');
    });
  }

  // Helper method to get the correct array based on current language
  getLocalizedArray(items: any[] | undefined, itemsEn: any[] | undefined): any[] {
    return (this.currentLang === 'en' && itemsEn) ? itemsEn : (items || []);
  }

  goBack(): void {
    this.router.navigate(['/team']);
  }
}

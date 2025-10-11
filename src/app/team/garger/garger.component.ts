import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMemberService } from '../../shared/services/team-member.service';
import { TeamMember } from '../../shared/models/team-member.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-garger',
  templateUrl: './garger.component.html',
  styleUrls: ['./garger.component.less'],
  standalone: false
})
export class GargerComponent implements OnInit {
  teamMember$: Observable<TeamMember | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamMemberService: TeamMemberService
  ) {
    this.teamMember$ = this.teamMemberService.getTeamMemberById('bernhard-garger');
  }

  ngOnInit(): void {
    // You can add any initialization logic here
  }

  goBack(): void {
    this.router.navigate(['/team']);
  }
}

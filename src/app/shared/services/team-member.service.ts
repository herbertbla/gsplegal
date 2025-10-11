import { Injectable } from '@angular/core';
import { TeamMember } from '../models/team-member.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
  private teamMembers: TeamMember[] = [
    {
      id: 'bernhard-garger',
      title: 'MMag. Dr.',
      firstName: 'BERNHARD',
      lastName: 'GARGER',
      position: 'Rechtsanwalt, Partner',
      imageUrl: 'assets/images/bgarger.jpg',
      email: 'bgarger@gsplegal.at',
      phone: '+43 1 319 94 70',
      fax: '+43 1 319 94 70-70',
      expertise: [
        'Unternehmens- und Gesellschaftsrecht',
        'Umgründungen und Umstrukturierungen',
        'Merger & Acquisitions',
        'Versicherungsrecht',
        'Stiftungsrecht',
        'Arbeitsrecht'
      ],
      languages: [
        'Deutsch',
        'Englisch'
      ],
      education: [
        'Studium der Rechtswissenschaften, Universität Wien (Mag. iur. 1990, Dr. iur. 1995)',
        'Studium der Betriebswirtschaftslehre, Wirtschaftsuniversität Wien (Mag. rer. soc. oec. 1998)',
        'Studium an der Hochschule St. Gallen (1991-1992)'
      ],
      experience: [
        'Partner bei GARGER SPALLINGER Rechsanwälte GmbH seit 2010',
        'Eingetragener Rechtsanwalt seit 2005',
        'Rechtsanwalt bei renommierten Wirtschaftskanzleien',
        'Tax Manager in einer renommierten internationalen Wirtschaftsprüfungs- und Steuerberatungsgesellschaft'
      ]
    },
    {
      id: 'stefan-pallinger',
      title: 'MMag.',
      firstName: 'Stefan',
      lastName: 'Pallinger',
      position: 'Rechtsanwalt | Partner',
      imageUrl: 'assets/images/spallinger.jpg',
      description: 'Detailed description about Stefan Pallinger...',
      email: 'pallinger@gsplegal.at',
      phone: '+43 1 123 4567',
      languages: ['Deutsch', 'Englisch', 'Französisch'],
      education: [
        'Magister der Rechtswissenschaften'
      ],
      experience: [
        'Langjährige Erfahrung im Arbeitsrecht',
        'Schwerpunkt auf internationalen Rechtsfällen'
      ]
    }
    // Add more team members as needed
  ];

  constructor() { }

  getAllTeamMembers(): Observable<TeamMember[]> {
    return of(this.teamMembers);
  }

  getTeamMemberById(id: string): Observable<TeamMember | undefined> {
    const member = this.teamMembers.find(m => m.id === id);
    return of(member);
  }
}

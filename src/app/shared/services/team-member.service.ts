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
      positionEn: 'Attorney-at-Law, Partner',
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
      expertiseEn: [
        'Corporate and Commercial Law',
        'Reorganizations and Restructurings',
        'Merger & Acquisitions',
        'Insurance Law',
        'Foundation Law',
        'Labor Law'
      ],
      languages: ['Deutsch', 'Englisch'],
      languagesEn: ['German', 'English'],
      education: [
        'Studium der Rechtswissenschaften, Universität Wien (Mag. iur. 1990, Dr. iur. 1995)',
        'Studium der Betriebswirtschaftslehre, Wirtschaftsuniversität Wien (Mag. rer. soc. oec. 1998)',
        'Studium an der Hochschule St. Gallen (1991-1992)'
      ],
      educationEn: [
        'University degree in Law, University of Vienna (Mag. iur. 1990, Dr. iur. 1995)',
        'University degree in Business Administration, Vienna Business University (Mag. rer. soc. oec. 1998)',
        'Studies at the University of St. Gallen (1991-1992)'
      ],
      experience: [
        'Partner bei GARGER SPALLINGER Rechsanwälte GmbH seit 2010',
        'Eingetragener Rechtsanwalt seit 2005',
        'Rechtsanwalt bei renommierten Wirtschaftskanzleien',
        'Tax Manager in einer renommierten internationalen Wirtschaftsprüfungs- und Steuerberatungsgesellschaft'
      ],
      experienceEn: [
        'Partner with GARGER SPALLINGER Rechsanwälte GmbH since 2010',
        'Admitted as Attorney-at-Law (Rechtsanwalt) in Austria since 2005',
        'Associate with renowned commercial law firms',
        'Tax Manager in a renowned international auditing and tax consulting firm'
      ]
    },
    {
      id: 'stefan-spallinger',
      title: 'MMag.',
      firstName: 'STEFAN',
      lastName: 'SPALLINGER',
      position: 'Rechtsanwalt, Partner',
      positionEn: 'Attorney-at-Law, Partner',
      imageUrl: 'assets/images/spallinger.jpg',
      email: 'spallinger@gsplegal.at',
      phone: '+43 1 319 94 70',
      fax: '+43 1 319 94 70-70',
      expertise: [
        'Unternehmens- und Gesellschaftsrecht',
        'Umgründungen und Umstrukturierungen',
        'Merger & Acquisitions',
        'Grenzüberschreitende Transaktionen',
        'Vertragsrecht (national und international)',
        'Zivilrecht'
      ],
      expertiseEn: [
        'Corporate and Commercial Law',
        'Reorganizations and Restructurings',
        'Merger & Acquisitions',
        'Cross-border Transactions',
        'Contract Law (national and international)',
        'Civil Law'
      ],
      languages: ['Deutsch', 'Englisch', 'Spanisch'],
      languagesEn: ['German', 'English', 'Spanish'],
      education: [
        'Studium der Rechtswissenschaften, Universität Wien (Mag. iur. 2000)',
        'Studium der Internationalen Betriebswirtschaftslehre, Universität Wien (Mag. rer. soc. oec 2001)',
        'LL.M.-Studium an der Columbia University School of Law, New York, USA (2002/2003)'
      ],
      educationEn: [
        'University degree in Law, University of Vienna (Mag. iur. 2000)',
        'University degree in International Business Administration, University of Vienna (Mag. rer. soc. oec 2001)',
        'LL.M. at Columbia University School of Law, New York, USA (2002/2003)'
      ],
      experience: [
        'Partner bei GARGER SPALLINGER Rechsanwälte GmbH seit 2010',
        'Eingetragener Rechtsanwalt seit 2008',
        'Eingetragen als Attorney-at-Law in New York seit 2005',
        'Rechtsanwalt/-anwärter in renommierten Wirtschaftskanzleien',
        'Österreichisches Außenministerium'
      ],
      experienceEn: [
        'Partner with GARGER SPALLINGER Attorneys-at-Law GmbH since 2010',
        'Admitted as Attorney-at-Law in Austria since 2008',
        'Admitted as Attorney-at-Law in New York since 2005',
        'Attorney/Associate with renowned commercial law firms',
        'Austrian Federal Ministry for European and International Affairs'
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

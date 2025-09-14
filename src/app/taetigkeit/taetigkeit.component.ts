import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-taetigkeit',
    templateUrl: './taetigkeit.component.html',
    styleUrls: ['./taetigkeit.component.less'],
    standalone: false
})
export class TaetigkeitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('TaetigkeitComponente');
  }

}

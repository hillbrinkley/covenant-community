import { Component } from '@angular/core'

@Component({
  selector: 'app-copyright',
  templateUrl: 'copyright.component.html',
  styleUrls: ['copyright.component.css'],
})
export class Copyright {
  currentYear: number;


  constructor() {

    this.currentYear = new Date().getFullYear();
  }
}

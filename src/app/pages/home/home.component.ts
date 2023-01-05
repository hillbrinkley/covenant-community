import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawvapm: string = ' ';
  rawjd4y: string = ' ';
  rawxctf: string = ' ';
  rawxcxw: string = ' ';
  rawev7g: string = ' ';
  rawjrjx: string = ' ';

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Covenant Community Church | Snow Creek');
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Covenant Community Church | Snow Creek',
      },
    ]);
  }
}

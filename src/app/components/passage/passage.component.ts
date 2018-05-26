import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passage',
  templateUrl: './passage.component.html',
  styleUrls: ['./passage.component.css']
})
export class PassageComponent implements OnInit {


  passage: number;
  typePassager: string;
  totalPassage: number;

  constructor() { }

  ngOnInit() {
  }

  calculatePassage() {
    if (this.isValid())
      if (this.typePassager === 'M') this.totalPassage = this.passage - (this.passage * 0.25);
      else if (this.typePassager === 'A') this.totalPassage = this.passage;
      else if (this.typePassager === 'J') this.totalPassage = this.passage - (this.passage * 0.50);
  }

  isValid() {
    return (this.passage != null && this.typePassager != null) && (this.passage !== undefined && this.typePassager !== undefined)
      && (this.passage !== 0 && this.typePassager !== '');
  }

  getPassager() {
    if (this.typePassager === 'M') return { typePassager: 'Menor', desc: '25%'};
      else if (this.typePassager === 'A') return { typePassager: 'Adulto', desc: '0%'};
      else if (this.typePassager === 'J') return { typePassager: 'Jubilado', desc: '50%'};
  }

}

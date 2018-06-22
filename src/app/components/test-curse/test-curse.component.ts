import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-curse',
  templateUrl: './test-curse.component.html',
  styles: []
})
export class TestCurseComponent implements OnInit {

  formTest = new FormGroup({
    mail: new FormControl(),
    point: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}

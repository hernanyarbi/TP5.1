import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-text',
  templateUrl: './send-text.component.html',
  styleUrls: ['./send-text.component.css']
})
export class SendTextComponent implements OnInit {

  statusMessage = {
    receiver: '',
    transmitter: '',
    message: '',
    time: ''
  };

  formMessage = new FormGroup({
    receiver: new FormControl(null, Validators.required),
    transmitter: new FormControl(null, Validators.required),
    message: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.isValid())
      this.statusMessage = {
        receiver: this.formMessage.get('receiver').value,
        transmitter: this.formMessage.get('transmitter').value,
        message: this.formMessage.get('message').value,
        time: this.dateToString(new Date())
      };

  }

  isValid() {
    return this.formMessage.valid;
  }

  dateToString(date: Date) {
    return `${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}/
    ${date.getMonth() + 1 <= 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/
    ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

}

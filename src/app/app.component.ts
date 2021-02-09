import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  submitted: Boolean = false;
  @ViewChild('f') form: NgForm;

  user!: {
    username: '',
    email: '',
    question: ''
  };

  onSubmit() {
    this.submitted = true;
    this.user = this.form.value;
  }

}


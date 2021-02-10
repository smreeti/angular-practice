import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(
        '',
        [Validators.required, Validators.email],
        [this.forbiddenEmails.bind]
      ),
      'gender': new FormControl('female'),
    });
  }

  forbiddenEmails = (control: FormControl): Promise<any> | Observable<any> => {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          reject(null);

        }
      }, 1500);
    });
    return promise;
  };

  onSubmit() {
    console.log(this.signupForm);
  }
}


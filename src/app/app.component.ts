import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'hello-sm';

  records = [
    {
      name: 'Smriti',
      online: true
    },
    {
      name: 'ABC',
      online: false
    }
  ];

  // tslint:disable-next-line:typedef
  updateValue({e}: { e: any }) {
    this.title = e.target.value;
    console.log(e.target.value);
  }


}


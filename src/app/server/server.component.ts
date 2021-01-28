import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  serverId = 10;
  allowNewServer = false;
  serverCreateStatus = 'No Server was created';
  serverName = '';
  username = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreateStatus = 'Server was created';
  }

  onUsernameReset() {
    this.username = '';
  }
}

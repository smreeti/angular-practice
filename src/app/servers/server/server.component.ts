import {Component, Input, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {Server} from '../../shared/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() {
  }

  ngOnInit = () => {

  };


}

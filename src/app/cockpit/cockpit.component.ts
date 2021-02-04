import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', {static: false}) serverContentInput!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer = (nameInput: HTMLInputElement) => {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input('srvElement') element!: { type: string; name: string; content: string; };

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges = (changes: SimpleChanges) => {
    console.log('ngOnChanges::::', changes);
    console.log('ngOnChanges called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck = () => {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit = () => {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked = () => {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit = () => {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked = () => {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy = () => {
    console.log('ngOnDestroy called');
  }
}

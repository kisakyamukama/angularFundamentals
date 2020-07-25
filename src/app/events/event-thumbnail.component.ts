import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl:'./event-thumbnail.component.html',
        styles: [`
          .bold { font-weight;}
          .pad-left { margin-left: 10px;}
          .well div { color: #bbb;}
          `
        ]



})

export class EventThumbnailComponent {
  @Input() event: any; // event will be passed in from another component.
  // someProperty = "Some Property";
  // @Output() eventClick =new EventEmitter();
  // handleClickMe() {
  //   this.eventClick.emit(this.event.name);
  // }

  // logFoo() {
  //   console.log('foo');
  // }

  getStartTimeStyle() :any{
  //  const isEarlyStart = this.event && this.event.time === '8:00 am';
  //  return {green: isEarlyStart, bold: isEarlyStart}
  if( this.event && this.event.time === '8:00 am')
     return {color:'#003300', 'font-weight': 'bold'}
   return {}
 }



}

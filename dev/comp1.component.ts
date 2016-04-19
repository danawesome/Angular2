import {Component} from 'angular2/core';
import {LoggingSerive} from './services/logging.service.ts';


@Component({
    selector: 'comp1',
    template: `
          <input type="text" #message>
    <button (click)="onLog(message.vale)"></button>
    `,
    //directives:[]
})
export class Comp1Component {
constructor(private _loggingService: _LoggingService){}
    
onLog(message:string){
    this._loggingService.log(message);
    }
}
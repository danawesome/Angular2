import {Component} from 'angular2/core';

@Component({
    selector:'header-nav',
    template: `
          <div style="float:left;">
            <a class="btn btn-lg btn-primary" href="#">
            <i class="fa fa-user-md"></i>
            Provider Lookup</a>
            <br>&nbsp;
            <br>&nbsp;
        </div>
        <div style="float:left;">
            <a class="btn btn-lg btn-success" data-ng-click="editItem($index)">
            <i class="fa fa-users"></i>
            Open Tracker</a>
        </div>
  
    `
})
export class HeaderNavComponent{
    
}
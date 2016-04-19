import {Component} from 'angular2/core';

@Component({
    selector:'header',
    template: `
        <h1>
            <span class="fa fa-stethoscope fa-2x"></span> Provider Demographic Tracking App
        </h1>
        <h4>Current User: {{login}}</h4>
    `
})
export class HeaderComponent{
    login = 'Dan';
}
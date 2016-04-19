import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {HeaderNavComponent} from './header-nav.component';

import {HomeComponent} from './home.component';
import {ProviderComponent} from './providerlookup.component';

@Component({
    selector: 'app',
    template: `
    <comp1></comp1>
    `,
    //directives:[HomeComponent, HeaderComponent, HeaderNavComponent, ProviderComponent]
})
export class AppComponent {

}

import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {HeaderNavComponent} from './header-nav.component';

import {HomeComponent} from './home.component';
import {ProviderComponent} from './providerlookup.component';

@Component({
    selector: 'pdt-app',
    template: `
          <div class="container-fluid">

    <div class="row">

      <div class="col-xs-12">

        <header></header>
        <header-nav></header-nav>

      </div>

    </div>

    <div class="row">

      <div class="col-xs-12">
<providers></providers>
        <provider></provider>
        <home></home>
        

      </div>

    </div>

  </div>
    `,
    directives:[HomeComponent, HeaderComponent, HeaderNavComponent, ProviderComponent]
})
export class AppComponent {

}

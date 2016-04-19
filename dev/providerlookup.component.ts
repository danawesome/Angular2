import {Component} from 'angular2/core';
import {ProviderService} from './providerlookup.service'

@Component({
    selector: 'provider',
    templateUrl: "templates/providerlookup.html",
    //providers:[ProviderService]
    directives:[ProviderComponent]
})
export class ProviderComponent {
    /*title = "provider";
    provider;
    
    constructor(providerService: ProviderService){
        this.provider = providerService.getProvider();
    }//*/

}
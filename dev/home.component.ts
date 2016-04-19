import {Component} from 'angular2/core';
import {HomeService} from './home.service';

@Component({
    selector:'home',
    /*template:`
        <h2>This is the home area</h2>
    `,*/
    templateUrl:'templates/home.html',
    providers:[HomeService],
    //directives:[]
})
export class HomeComponent {
    title = "Home";
    home;
    
    constructor(homeService: HomeService){
        this.home = homeService.getHome();
    }
}
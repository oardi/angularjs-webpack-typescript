import { HomeService } from './home.service';

class HomeCtrl {
    constructor(private homeService: HomeService) {
        this.test = "some binding";
    }

    test: string;

    $onInit() {
        console.log("homeCtr.oninit");
        console.log(this.homeService.getTest());
    }
}

HomeCtrl.$inject = ["homeService"];

export default {
    bindings: {},
    templateUrl: require("./home.html"),
    controller: HomeCtrl
}
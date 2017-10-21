class SubComponentCtrl {
    constructor() {
    }
}

SubComponentCtrl.$inject = [];

export default {
    bindings: { title: "=" },
    template: `<div>Subcomponent: {{$ctrl.title}}</div>`,
    controller: SubComponentCtrl
}
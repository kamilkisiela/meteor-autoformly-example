const {
  SetModule, bootstrap, options, Component, Inject
} = angular2now;

options({
  controllerAs: 'vm'
});

SetModule('example', [
  'autoFormly',
  'formlyMaterial'
]);

@Component({
  selector: 'example',
  // we could use autoFormly component but work is still in progress
  template: `
    <form ng-submit="vm.submit()" name="vm.form">
    <formly-form fields="vm.fields" model="vm.model" form="vm.form">
      <md-button type="submit">Submit</md-button>
    </formly-form>
    </form>
  `
})
@Inject('autoFormly')
class Example {
  constructor(autoFormly) {
    this.fields = autoFormly.schema(User);
    this.model = {};
  }

  submit() {
    if (this.form.$valid) {
      alert('valid!');
    } else {
      alert('invalid!');
    }
  }
}

bootstrap(Example);

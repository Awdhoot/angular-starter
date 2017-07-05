import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <h1>Hello from TEST </h1>
    <span>
      <a [routerLink]=" ['./test-detail'] ">
        TEST Detail
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class TestComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `TEST` component');
  }

}

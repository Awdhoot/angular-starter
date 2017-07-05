import { DetailComponent } from './detail.component';
import { TestComponent } from './test.component';

export const routes = [
  { path: '', children: [
    { path: '', component: TestComponent },
    { path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
  ]},
];

import {Routes} from '@angular/router';
import {ColorVariableBadWayComponent} from "./color/color-variable-bad-way/color-variable-bad-way.component";
import {ColorVariableGoodWayComponent} from "./color/color-variable-good-way/color-variable-good-way.component";
import {ColorVariableBetterWayComponent} from "./color/color-variable-better-way/color-variable-better-way.component";
import {FormComponent} from "./form/form.component";

export const routes: Routes = [
  {path: 'ex-1', component: ColorVariableBadWayComponent},
  {path: 'ex-1-good', component: ColorVariableGoodWayComponent},
  {path: 'ex-1-better', component: ColorVariableBetterWayComponent},
  {path: 'form', component: FormComponent},
];

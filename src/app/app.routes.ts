import { Routes } from '@angular/router';
import {ColorVariableBadWayComponent} from "./color/color-variable-bad-way/color-variable-bad-way.component";
import {ColorVariableGoodWayComponent} from "./color/color-variable-good-way/color-variable-good-way.component";

export const routes: Routes = [
    {path: 'ex-1', component: ColorVariableBadWayComponent},
    {path: 'ex-1-better', component: ColorVariableGoodWayComponent},
];

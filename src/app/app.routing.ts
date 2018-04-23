import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CalcComponent } from './calc/calc/calc.component';
import { FirstComponent } from './myapp/first/first.component';

export const AppRoutes: Routes = [
    {path: '', component:FirstComponent },
    {path: 'calc', component:CalcComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
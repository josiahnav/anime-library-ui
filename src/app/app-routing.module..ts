import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: 'library', loadChildren: () => import('./pages/library-page/library-page.module').then(m => m.LibraryPageModule) }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
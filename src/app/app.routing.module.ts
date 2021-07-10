import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {UserdetailComponent} from './components/userdetail/userdetail.component';
import {StructureComponent} from "./components/structure/structure.component";
import {PostComponent} from "./components/post/post.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {NavbarComponent} from "./components/navbar/navbar.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: "dash", component:NavbarComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate : [AuthGuard]},
  {path: 'structure', component: StructureComponent, canActivate : [AuthGuard]},
  {path: 'post', component: PostComponent, canActivate : [AuthGuard]},
  {path: 'userbyid/:id', component: UserdetailComponent, canActivate : [AuthGuard]}
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

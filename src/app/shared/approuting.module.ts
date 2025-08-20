import { NgModule } from "@angular/core";
import { Route, Router, RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./components/posts/posts.component";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const route : Routes = [
    {
        path : '',
        component : PostsComponent,
    },
    {
        path : 'posts',
        component : PostsComponent,
        title : 'Posts'
    },
    {
        path : 'posts/adduser',
        component : PostFormComponent,
        title : 'PostForm'
    },
    {
        path : 'posts/:id',
        component : PostDetailsComponent,
        title : 'PostDetail'
    },
    {
        path : 'posts/:id/edit',
        component : PostFormComponent,
        title : 'PostForm'
    },
    {
        path : 'pageNotFound',
        component : PageNotFoundComponent
    },
    {
        path : '***',
        redirectTo : 'pageNotFound',
    }
]

@NgModule({
    imports : [
        RouterModule.forRoot(route)
    ],
    exports : [RouterModule],
    declarations: [

  ]
})
export class AppRoutingModule{

}
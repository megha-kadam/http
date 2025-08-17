import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Ipost } from "../models/post.interface";


@Injectable({
    providedIn : 'root'
})
export class PostService{
    baseURL : string = `${environment.postURL}`;

    postURL : string = `${this.baseURL}/posts.json`;

    constructor(private http : HttpClient){}

    fetchAllPost() : Observable<any>{
        return this.http.get<any>(this.postURL)
    }

    fetchPostDetail(id : string) :Observable<Ipost>{
        let posturl = `${this.baseURL}/posts/${id}.json`;
        return this.http.get<Ipost>(posturl);
    }

    createPost(post : Ipost) : Observable<any>{
        return this.http.post<any>(this.postURL, post)
    }

    updatePost(post : Ipost) : Observable<any>{
        let updateURL = `${this.baseURL}/posts/${post.id}.json`;
        return this.http.patch<any>(updateURL, post);
    }

    removePost(id : string):Observable<any>{
        let removeURL = `${this.baseURL}/posts/${id}.json`;
        return this.http.delete(removeURL);
    }
}
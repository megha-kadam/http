import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../models/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postArr : Array<Ipost> = [];

  constructor(private postService : PostService) { }

  getAllPost(){
    this.postService.fetchAllPost()
    .subscribe({
      next : data => {
        console.log(data);
        let arr : Array<Ipost> = [];      
        for (const key in data) {
          arr.push({...data[key], id : key});
        }
        console.log(arr);
        this.postArr = arr
      },
      error : err => console.log(err)
    })
    
  }

  ngOnInit(): void {
    this.getAllPost();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../models/post.interface';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  isInEditMode : boolean = false;
  editId !: string;
  editObj !: Ipost;
  postForm !: FormGroup;

  userIdArr = [1,2,3,4,5,6,7,8,9,10];

  constructor(
      private route : ActivatedRoute,
      private postService : PostService,
      private snackbar : SnackbarService,
      private router : Router
  ) { }

  createForm(){
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required]),
      content : new FormControl(null, [Validators.required]),
      userId : new FormControl(null, [Validators.required]),
    })
  }

  onAddPost(){
    if(this.postForm.valid){
      let postObj = this.postForm.value;
      console.log(postObj);
      this.postService.createPost(postObj)
      .subscribe({
        next : data => {
          console.log(data);
          this.router.navigate(['posts'])
          this.snackbar.openSnackbar(`New post ${postObj.title} created successfully`)
        },
        error : err => this.snackbar.openSnackbar('err')
      })
    }
  }

  onUpdatePost(){
    if(this.postForm.valid){
      let updatedObj : Ipost = {...this.postForm.value, id : this.editId};
      console.log(updatedObj);
      this.postService.updatePost(updatedObj)
      .subscribe({
        next : data => {
          console.log(data);
          //this.postForm.patchValue(data)
          this.router.navigate(['posts']);
          this.snackbar.openSnackbar(`Post ${updatedObj.title} updated successfully`)
        }
      })      
    }
  }

  getPost(){
    this.editId = this.route.snapshot.paramMap.get('id')!;
    console.log(this.editId);
    

    if(this.editId){
      this.isInEditMode = true;
      this.postService.fetchPostDetail(this.editId)
      .subscribe({
        next : data => {
          this.editObj = data;
          console.log(this.editObj);
          this.postForm.patchValue(data)
        },
        error : err => console.log(err)
      })
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.getPost()
  }

}

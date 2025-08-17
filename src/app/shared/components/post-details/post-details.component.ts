import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../models/post.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId !: string;
  postObj !: Ipost

  constructor(
    private route : ActivatedRoute,
    private postService : PostService,
    private router : Router,
    private dialog : MatDialog,
    private snackbar : SnackbarService
  ) { }

  onRemovePost(){
    let matconfig : MatDialogConfig = new MatDialogConfig();
    matconfig.width = '400px';
    matconfig.data = `Are you sure, you want to remove this post`;

    let matdialog = this.dialog.open(GetconfirmComponent, matconfig);
    matdialog.afterClosed()
    .subscribe(res => {
      if(res){
        this.postService.removePost(this.postId)
        .subscribe({
          next : res => {
            console.log(res);
            
            this.router.navigate(['posts']);
            this.snackbar.openSnackbar(`Post ${this.postId} removed successfully`)
          },
          error: err => this.snackbar.openSnackbar(err)
           
        })
      }
    })
  }

  getPostDetail(){
     this.postId = this.route.snapshot.params['id'];
  console.log(this.postId);
  
  if(this.postId){
    
     this.postService.fetchPostDetail(this.postId)
   .subscribe({
    next : data => {
      console.log(data);
      this.postObj = data;
      console.log(this.postObj);
    },
    error : err => this.snackbar.openSnackbar(err)
   })
  }
  }

  ngOnInit(): void {
 this.getPostDetail()
  }

}

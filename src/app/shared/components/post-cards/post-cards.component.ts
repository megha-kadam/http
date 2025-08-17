import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../models/post.interface';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss']
})
export class PostCardsComponent implements OnInit {
  @Input() postObj !: Ipost

  constructor() { }

  ngOnInit(): void {
  }

}

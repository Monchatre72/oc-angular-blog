import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
@Input() postItem: Post;


  constructor() { }

  ngOnInit() {
  }

  increaseLoveIts(){
    this.postItem.loveIts++;
  }

  decreaseLoveIts(){
    this.postItem.loveIts--;
  }


}

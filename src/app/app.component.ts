import { Component } from '@angular/core';
import { CommentInterface, comments } from './comment-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments: CommentInterface[] = [];

  ngOnInit() {
    this.comments = comments;
  }

  onCommentDelete(comment) {
    const index = this.comments.indexOf(comment);
    this.comments.splice(index, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { Post, PostResponse } from '@app/shared/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { PostService } from '@core/services/post/post.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})

export class UserPostsComponent implements OnInit {

  posts: Post[];
  scroll = true;

  constructor(private modal: ModalController,
              private postService: PostService) { }

  ngOnInit() {
    this.postService.resetPage();
    this.getPostByUser();
  }

  private getPostByUser(event?: any): void {
    this.postService.getPostByUser()
      .subscribe((res: PostResponse) => {
        if (res.ok) {
          if (!this.posts) { this.posts = []; }
          this.posts.push(...res.posts);
          if (event) { event.target.complete(); }
          if (event && res.posts.length === 0) {
            this.scroll = false;
          }
        }
    });
  }

  removePost(id: string): void {
    this.posts = this.posts.filter(x => x._id !== id);
    this.postService.deleteStream.next(id);
  }

  close(): void {
    this.modal.dismiss();
  }

  onScroll(event: any): void {
    this.getPostByUser(event);
  }

}

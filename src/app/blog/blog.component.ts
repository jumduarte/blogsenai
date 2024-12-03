import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../cards/model/service/post.service';
import { Ipost } from '../cards/model/service/ipost';
import { DataFormaPipe } from '../data-forma.pipe';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DataFormaPipe],
  providers: [PostService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit{
  posts: Ipost[] = [];
  constructor(private postService: PostService){ }

  ngOnInit(): void {
      this.postService.getPosts().subscribe((post) => {
        this.posts = post;
      });
  }

}

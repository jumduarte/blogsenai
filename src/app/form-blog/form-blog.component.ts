import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../cards/model/service/post.service';
import { Ipost } from '../cards/model/service/ipost';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers:[PostService],
  templateUrl: './form-blog.component.html',
  styleUrl: './form-blog.component.scss'
})
export class FormBlogComponent {
  post: Ipost = {
    title: '',
    author: '',
    date: new Date(),
    content: 0,
    description: '',
    imageUrl:''
  };
  constructor(private postService: PostService, private router: Router)
{}

onSubmit(): void{
  this.postService.addPost(this.post).subscribe(
    (response) => {
      Swal.fire({
        title: "Item Cadastrado!",
        text: "",
        icon: "success",
      }).then((result) =>{
        if (result.isConfirmed){
          this.router.navigate(['/']);
        }
      });
    },
    (error) => {
      console.error('Erro ao adicionar o produto: ', error);
    }
  );
}
}

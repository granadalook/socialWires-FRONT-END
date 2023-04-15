import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { PostsService } from 'src/app/core/services/post/posts.service';
import { SesionService } from 'src/app/core/services/sesion.storage/sesion.service';
import { InewPost } from 'src/app/models/newPost.model';
import { Ipost } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  post: Array<Ipost> = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private postService: PostsService,
    private sesionService: SesionService
  ) {}

  formularioPost: UntypedFormGroup = this.formBuilder.group({
    titulo: ['', [Validators.required]],
    texto: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.getPostByUserName();
  }
  getPostByUserName() {
    this.postService
      .getPostByUserName(this.sesionService.getUserName())
      .subscribe((user) => {
        if (user) {
          this.post.unshift(user.posts);
        }
      });
  }

  getAllPost() {
    this.postService.getAllPost().subscribe((respuesta) => {
      this.post = respuesta;
    });
  }

  createPost(titulo: string, texto: string) {
    const newPost: InewPost = {
      texto: texto,
      title: titulo,
      userName: this.sesionService.getUserName(),
    };
    this.postService.createPost(newPost).subscribe((respuesta) => {
      this.post.unshift(respuesta);
      this.formularioPost.reset();
    });
  }
}

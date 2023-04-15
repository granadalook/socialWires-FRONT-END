import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { PostsService } from 'src/app/core/services/post/posts.service';
import { Ipost } from 'src/app/models/post.model';
import { UsersService } from '../../../../core/services/users/users.service';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.scss'],
})
export class AllpostComponent {
  post: Array<Ipost> = [];

  formularioDate: UntypedFormGroup = this.formBuilder.group({
    frontDate: [Date, [Validators.required]],
    toDate: [Date, [Validators.required]],
  });
  formularioText: UntypedFormGroup = this.formBuilder.group({
    text: ['', [Validators.required]],
  });

  constructor(
    private postService: PostsService,
    private UsersService: UsersService,
    private formBuilder: UntypedFormBuilder
  ) {}
  getAllPost() {
    this.postService.getAllPost().subscribe((respuesta) => {
      this.post = respuesta;
      console.log('this.post', this.post);
    });
  }

  filterByDate(frontDate: Date, toDate: Date) {
    this.postService.filterByDate(frontDate, toDate).subscribe((response) => {
      console.log('response', response);
    });
  }

  filterByText(text: string) {
    console.log('text', text);
    this.UsersService.FilterByText(text).subscribe((response) => {
      console.log('response', response);
    });
  }
}

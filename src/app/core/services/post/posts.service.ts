import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/models/User.model';
import { InewPost } from 'src/app/models/newPost.model';
import { Ipost } from 'src/app/models/post.model';
import { environment } from 'src/environments/envitonmetns';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPostByUserName(userName: string | null) {
    return this.http.get<Iuser>(
      `${environment.Url_Base}${environment.UserName}${userName}`
    );
  }

  getAllPost() {
    return this.http.get<Array<Ipost>>(
      `${environment.Url_Base}${environment.Post}`
    );
  }

  createPost(newpost: InewPost) {
    return this.http.post<Ipost>(
      `${environment.Url_Base}${environment.Post}`,
      newpost
    );
  }
}

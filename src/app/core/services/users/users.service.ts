import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/models/User.model';
import { Ipost } from 'src/app/models/post.model';
import { environment } from 'src/environments/envitonmetns';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}


FilterByText(text: string) {
    console.log('text', text);
    return this.http.get<Array<Iuser>>(
      `${environment.Url_Base}${environment.FilterByText}${text}`
    );
  }
}

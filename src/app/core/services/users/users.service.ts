import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ipost } from 'src/app/models/post.model';
import { environment } from 'src/environments/envitonmetns';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  FilterByText(text: string) {
    return this.http.get<Array<Ipost>>(
      `${environment.Url_Base}${environment.FilterByText}${text}`
    );
  }
}

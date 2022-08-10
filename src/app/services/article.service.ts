import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, CreateArticleDto } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listArticles()
  {
    return this.http.get<any>(this.url+`/api/articles`);
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  addArticle(article:CreateArticleDto): Observable<Article>
  {
    return this.http.post<Article>(this.url+`/api/articles`, article, this.httpOptions);
  }

  find(id:number): Observable<Article>
  {
    return this.http.get<Article>(this.url+`/api/article/`+id);
  }
  update(id:number, article: CreateArticleDto): Observable<Article>
  {
    return this.http.put<Article>(this.url+`/api/article/`+id, article, this.httpOptions);
  }

  deleteArticle(id:number): Observable<void>
  {
    return this.http.delete<any>(this.url+`/api/article/`+id, this.httpOptions);
  }
}

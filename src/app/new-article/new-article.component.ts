import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article, CreateArticleDto } from '../models/article';
import { MaritalStatus } from '../models/marital-status';
import { ArticleService } from '../services/article.service';
import { MaritalStatusService } from '../services/marital-status.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(
    private articleService: ArticleService, 
    private readonly maritalStatusService: MaritalStatusService,
    private router: Router
  ) { }

  // articles: Article[] = [];
  articleDto: CreateArticleDto = {
    title: '',
    body: '',
    author: '',
    marital_status_id: 0,
  };

  maritalStatuses: MaritalStatus[] = [];

  ngOnInit(): void {
    this.maritalStatusService.list()
      .subscribe({
        next: (data) => {
          this.maritalStatuses = data;
        }
      })
  }

  add() {
    this.articleDto ={
      title: this.articleDto.title,
      body: this.articleDto.body,
      author: this.articleDto.author,
      marital_status_id: this.articleDto.marital_status_id,
    };
    this.articleService.addArticle(this.articleDto).subscribe(article =>{
      // this.articleDto = article
      this.router.navigateByUrl('/');
    });
   

    // this.router.navigateByUrl('/');
  }

}

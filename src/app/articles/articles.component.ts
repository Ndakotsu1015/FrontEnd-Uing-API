import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  articles: any;

  ngOnInit(): void {
    this.showArticles();
  }

  showArticles()
  {
    this.articleService.listArticles().subscribe(articles =>{
      this.articles = articles;

      console.log(this.articles);
      
    });
  }
  deleteArticle(id:any)
  {
   
    
    this.articleService.deleteArticle(id).subscribe(res => {
      this.articles = this.articles.filter((a:any)=> a.id == id);
    });
    
    this.router.navigateByUrl('/');
    }

}

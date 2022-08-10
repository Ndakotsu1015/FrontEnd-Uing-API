import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Article, CreateArticleDto } from '../models/article';
import { MaritalStatus } from '../models/marital-status';
import { ArticleService } from '../services/article.service';
import { MaritalStatusService } from '../services/marital-status.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articleDto: CreateArticleDto = {
    
    title: '',
    body: '',
    author: '',
    marital_status_id: 0,
  };
  article?: Article;

  maritalStatuses: MaritalStatus[] = [];
  //articleId: any;
  //article: any;
  //articleDto: any;

  constructor(private route: ActivatedRoute, private router: Router, private articleService:ArticleService, private maritalStatusService: MaritalStatusService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const articleId = Number(routeParams.get('articleId'));

    this.route.params
      .subscribe({
        next: (params) => {
          const articleId = Number(params['articleId']);
          this.loadArticle(articleId);
        },
      })

  // this.articleId = Number(routeParams.get('articleId'));

    console.log(articleId);
  
    // Fetch marital statuses
    this.maritalStatusService.list()
      .subscribe({
        next: (data) => {
          this.maritalStatuses = data;
        },
        error: (error) => {
          console.log(error);
        }
      });

  }

  update() {
    this.articleService.update(this.article?.id!, this.articleDto).subscribe((res) => {
      this.router.navigateByUrl('/');
    });
  }

  loadArticle(id: number) {
    this.articleService.find(id).subscribe((data: Article)=>{

      this.article = data;
      this.articleDto = data;

      console.log(this.articleDto);
    

    });
  }

}

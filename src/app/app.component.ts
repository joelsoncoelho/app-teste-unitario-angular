import { Component, OnInit } from '@angular/core';
import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/interfaces/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-teste-unitario-angular';

  public photos$: Photo[] = [];

  public likes = 0;

  constructor(private service: PhotoBoardService){}

  ngOnInit(): void {
    this.service.getPhotos().subscribe({
      next: photos => this.photos$ = photos,
      error: err => console.log(err)
     });
  }

  public like(): void {
    this.likes++;
  }
}

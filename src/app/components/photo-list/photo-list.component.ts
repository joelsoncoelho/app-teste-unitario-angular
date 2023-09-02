import { Component } from '@angular/core';
import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {

  public photos$: Photo[] = [];
  public fa = { faCircleNotch };

  constructor(private service: PhotoBoardService){}

  ngOnInit(): void {
    this.service.getPhotos().subscribe({
      next: photos => this.photos$ = photos,
      error: err => console.log(err)
     });
  }

}

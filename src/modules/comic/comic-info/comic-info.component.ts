import { Component, OnInit } from '@angular/core';
import { Comic, ComicInfo, PyComciService } from 'src/api/py-comic.service';
import * as moment from 'moment'

@Component({
  selector: 'app-comic-info',
  templateUrl: './comic-info.component.html',
  styleUrls: ['./comic-info.component.scss']
})
export class ComicInfoComponent implements OnInit {

  comics: Comic[] = [];
  modified!: Date;
  isLoading = false;
  jobs: any[] = []

  constructor(private comicSvc: PyComciService) { }

  ngOnInit(): void {
    this.get();
  }

  /**
   * @description get newest comic information
   */
  refresh() {
    this.isLoading = true;
    this.comicSvc.refreshComicInfo()
      .subscribe({
        next: ((res: ComicInfo) => {
          this.comics = (res?.result ?? []).sort((a, b) => moment(a.last_update).isAfter(b.last_update) ? -1 : 1);
          this.modified = res?.modified ?? null;
        }),
        complete: () => this.isLoading = false
      })
  }

  /**
   * @description get last updated comic information
   */
  get() {
    this.isLoading = true;
    this.comicSvc.getComicInfo()
      .subscribe({
        next: ((res: ComicInfo) => {
          this.comics = (res?.result ?? []).sort((a, b) => moment(a.last_update).isAfter(b.last_update) ? -1 : 1);
          this.modified = res?.modified ?? null;
        }),
        complete: () => this.isLoading = false
      })
  }
}

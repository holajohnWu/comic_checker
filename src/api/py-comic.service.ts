import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export class Comic {
  name!: string;
  img!: string;
  last_update!: string;
  chapter!: string;
  url?: string;
}

export class ComicInfo {
  result!: Comic[];
  modified!: Date;
}

@Injectable({
  providedIn: 'root',
})
export class PyComciService {

  prefix = environment.comic_api_domain;

  constructor(private httpClient: HttpClient) { }

  alive() {
    return this.httpClient.get(`${this.prefix}`);
  }

  /**
   * @description get newest comic information
   * @returns
   */
  refreshComicInfo() {
    return this.httpClient.put<ComicInfo>(`${this.prefix}/api/comic_info`, null);
  }

  /**
   * @description get last updated comic information
   * @returns
   */
  getComicInfo() {
    return this.httpClient.get<ComicInfo>(`${this.prefix}/api/comic_info`);
  }

}

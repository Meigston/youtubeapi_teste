import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { YoutubeDto } from '../infra/models/youtube-dto';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private urlYoutubeApi = 'https://www.googleapis.com/youtube/v3/search?key=';

  constructor(private http: HttpClient) { }

  search(search: string, maxResults = 50): Observable<any> {
    const url = this.urlYoutubeApi +
                      environment.youtubeApiKey +
                      '&q=' + search +
                      '&order=date&part=snippet&type=video,id&maxResults=' +
                      maxResults.toString();

    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }
}

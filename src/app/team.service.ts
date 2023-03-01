import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './core/models/team';
import { map } from 'rxjs/operators';
import { TeamApiResponseModel } from './core/models/teamApiResponseModel';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient,
  ) { }

  /** GET teams from the nba API */
  getTeams(): Observable<Team[]> {
    return this.http.get<TeamApiResponseModel>('teams').pipe(
			map((response) => response.data),
		);
  }
}

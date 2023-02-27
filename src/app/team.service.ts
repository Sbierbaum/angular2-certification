import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './core/models/team';
import { map } from 'rxjs/operators';
import { TeamApiResponseModel } from './core/models/teamApiResponseModel';
import { GameApiResponseModel } from './core/models/gameApiResponseModel';


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

  /** Get latest result for a specific team id for the last X days (default 12) */
  getLastXDaysResultsByTeam(teamId: number, xdays: number = 12){
    const dates = this.generateListOfLastXDays(xdays);
    const datesUrlParameters = dates.join('&dates[]=');

    return this.http.get<GameApiResponseModel>(`games?page=0&dates[]=${datesUrlParameters}&team_ids[]=${teamId}`).pipe(
			map((response) => response.data),
		);
  }

  /** Generate the last X days from current date in iso format (YYYY-MM-DD) */
  private generateListOfLastXDays(numberOfDaysToGenerate: number): string[] {
    let days: string[] = [];

    let date = new Date();
    for(let i = 0; i< numberOfDaysToGenerate; i++){
      date.setDate(date.getDate() - 1);
      days.push(date.toISOString().split('T')[0]);
    }

    return days;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from './core/models/game';
import { GameApiResponseModel } from './core/models/gameApiResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient,
  ) { }

  /** Get latest result for a specific team id for the last X days (default 12) */
  getLastXDaysResultsByTeam(teamId: number, xdays: number = 12): Observable<Game[]>{
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

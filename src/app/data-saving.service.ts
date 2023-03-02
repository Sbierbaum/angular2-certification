import { Injectable } from '@angular/core';
import { Team } from './core/models/team';

@Injectable({
  providedIn: 'root'
})
export class DataSavingService {

  trackedTeams: Team[] = [];

  constructor() { }
}

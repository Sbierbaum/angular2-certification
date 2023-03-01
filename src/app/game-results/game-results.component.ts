import { Component } from '@angular/core';
import { Game } from '../core/models/game';
import { Team } from '../core/models/team';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent {

  team?: Team;

  games: Game[] = [];


  ngOnInit(): void{
    this.team = history.state.team;
    this.games = history.state.games;
  }

}

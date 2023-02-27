import { Component, Input } from '@angular/core';
import { Game } from '../core/models/game';
import { Team } from '../core/models/team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent {
  @Input()
  team?: Team;

  imageSrc : string = '';

  games: Game[] = [];

  averagePointsScored: number = 0;
  averagePointsConceded: number = 0;

  constructor(private teamService: TeamService){}


  ngOnInit(): void {
    this.imageSrc = `https://interstate21.com/nba-logos/${this.team?.abbreviation}.png`;
    if(this.team !== undefined){
      this.teamService.getLastXDaysResultsByTeam(this.team?.id)
          .subscribe((games: Game[]) => {
            this.games = games;
            this.calculateWins();
            this.calculatePoints();
          });
    }
  }

  calculatePoints(): void{
    const numberOfGames = this.games.length;
    let totalScored = 0;
    let totalConceded = 0;
    for(let i = 0; i < numberOfGames; i ++){
      let currentGame = this.games[i];
      if(currentGame.home_team.id === this.team?.id){
        //Displayed team is home_team
        totalScored += currentGame.home_team_score;
        totalConceded += currentGame.visitor_team_score;
      }
      else{
        //Displayed team is visitor_team
        totalScored += currentGame.visitor_team_score;
        totalConceded += currentGame.home_team_score;
      }
    }
    this.averagePointsScored = Math.ceil(totalScored / numberOfGames);
    this.averagePointsConceded = Math.ceil(totalConceded / numberOfGames);
  }

  calculateWins(): void{
    for(let i = 0; i < this.games.length; i ++){
      let currentGame = this.games[i];
      if(currentGame.home_team.id === this.team?.id){
        //Displayed team is home_team
        currentGame.isWon = currentGame.home_team_score > currentGame.visitor_team_score;
      }
      else{
        //Displayed team is visitor_team
        currentGame.isWon = currentGame.visitor_team_score > currentGame.home_team_score;
      }
    }
  }
}

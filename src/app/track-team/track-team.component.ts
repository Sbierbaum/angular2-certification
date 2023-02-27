import { Component } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../core/models/team';


@Component({
  selector: 'app-track-team',
  templateUrl: './track-team.component.html',
  styleUrls: ['./track-team.component.scss']
})
export class TrackTeamComponent {
  teams: Team[] = [];
  selectedTeam?: Team = undefined;
  trackedTeams?: Team[] = [];

  constructor(private teamService: TeamService){

  }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
    .subscribe(teams => this.teams = teams);
  }

  trackTeam(): void {
    if(this.selectedTeam?.id !== undefined){
      if(!this.isTeamTracked()){
        this.trackedTeams?.push(this.selectedTeam);
      }
    }
  }

  private isTeamTracked(){
    if(this.selectedTeam !== undefined){
      return this.trackedTeams?.includes(this.selectedTeam);
    }
    else{
      return false;
    }
  }
}

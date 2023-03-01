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
  selectedTeam?: Team;
  trackedTeams: Team[] = [];

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
        this.trackedTeams.push(this.selectedTeam);
      }
    }
  }

  untrackTeam(teamId: number): void{
    if(this.trackedTeams.length > 0){
      this.trackedTeams.splice(
        this.trackedTeams.findIndex((team) => {
          return team.id === teamId;
      }), 1);
    }
  }

  private isTeamTracked(): boolean {
    return this.selectedTeam !== undefined && this.trackedTeams.includes(this.selectedTeam);
  }
}

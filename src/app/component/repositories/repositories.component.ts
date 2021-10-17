import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/user';
import { RepoService } from 'src/app/services/repo.service';
import { Repositories } from 'src/app/repo';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo: Repositories[];
  constructor(public repoService: RepoService) { }

  ngOnInit(): void {
  }

}

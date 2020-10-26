import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: any[] = [];

  constructor(private workersService: WorkersService) { }

  ngOnInit(): void {
    this.workersService.getUsers().subscribe((data: any) => {
      this.workers = data.results;
      console.log('workers:', this.workers);
    });
  }

}

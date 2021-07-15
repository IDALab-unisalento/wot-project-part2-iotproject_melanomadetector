import { Component, OnInit } from '@angular/core';
import {Readings} from "../../../model/readings";
import {User} from "../../../model/user";
import {ReadingsService} from "../../services/readings.service";

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {

  readings:Readings[] = [];
  loggedInUser:User = {} as User;
  searchText = '';
  constructor(private readingsService:ReadingsService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
  }

  search(){
    this.readingsService.getAllReadingsByCodiceFiscaleUser(this.searchText).subscribe(res => {
      this.readings = res;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {MyDataService} from '../../services/my-data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
characterList:any;
constructor(
  private service: MyDataService,
  private router:Router){}
/*Function that calls the getData function
 from the service and returns the results array value from the returned object*/
  getAllCharacters(){
    this.service.getData().subscribe(_=>{
      this.characterList=_.results;
    })
  }
  //On initialization call the above function
  ngOnInit(): void {
    this.getAllCharacters()
  }
}

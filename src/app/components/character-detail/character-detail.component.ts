import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from 'src/app/services/my-data.service';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: any;
  identity:any;
  constructor(
    private route: ActivatedRoute,
    private myDataService: MyDataService
  ) {}
//function that calls the getCharacter function from the service and then returns an array of characters
  getCharacterById(){
    this.myDataService.getCharacter(Number(this.identity)).subscribe(_=>{
      this.character = _;
    })
  }
  //On initialization call the above function
ngOnInit(): void {
  this.identity = this.route.snapshot.paramMap.get('id');
  this.getCharacterById();
}
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CityModel} from '../../../models/city-model';
import {UniversityService} from '../../universities/university.service';
import {Router} from "@angular/router";
import {UserModel} from "../../../models/user-model";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.css']
})
export class ListCitiesComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;

  users: UserModel[] = [];
  isAuthenticated: boolean | undefined;
  cities: CityModel [] = [];
  image: string="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true";
  selectedCity: any;



  constructor(private universitiesService: UniversityService, private router : Router) {
    this.onSelect = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.universitiesService.getCities().subscribe((response: any) => {
        console.log(response);
        this.cities = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectCity(id: number) {
    this.onSelect.emit(id);
  }
  onChangeIamge(){
    this.image="https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjEl/MkYwMyUyRjMxJTJGMTMwNzg3OF8xMzA3/ODc4X3RpbWlzb2FyYS1pZXNpcmUtY2Fy/YW50aW5hLmpwZyZ3PTEyMDAmaD02MzAm/emM9MSZoYXNoPWI5YTg1ODA3NGM5MDM2MGNmNDdiOTAyYzZmOGY1NmU0.thumb.jpg"
  }

  onSelectAll() {
    console.log('Se vor afisa toate orasele.');
    this.onSelect.emit(-1);

  }

  btnClickCluj(){
    this.router.navigateByUrl("/Cluj");
  }

  btnClickBucuresti(){
    this.router.navigateByUrl("/altceva");
  }

  onSelectUniversity(id: number) {
    this.onSelect.emit(id);
    this.router.navigateByUrl("/university")

  }
  // isLoggedIn() {
  //   this.isAuthenticated = this.authService.isLoggedIn();
  // }









}

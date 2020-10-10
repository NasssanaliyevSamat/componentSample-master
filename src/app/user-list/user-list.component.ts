import { Component, OnInit , ViewChild} from '@angular/core';
import { Users } from '../shared/users';
import { UserDetailComponent} from '../user-detail/user-detail.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = Users;
  totalRating = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onVoted(n: boolean): void{
    if (n) { this.totalRating++; }
  }

  @ViewChild(UserDetailComponent)
  public dislike: UserDetailComponent;
  decreaseFirst(): void{
    this.dislike.DecreaseFirst();
  }


}

import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import { User } from '../shared/user';
import { Users } from '../shared/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  // styleUrls: ['./user-detail.component.css']
  styles: ['h4 { font-weight: bold }']
})
export class UserDetailComponent implements OnInit {
  @Input()
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
    console.log(value);
    if (this.user.id === 2){
      console.log(this.user.id);
    }
  }
  // tslint:disable-next-line:variable-name
  private _id = 0;
  public a = 0;
  @Input() user: User;
  @Output() voted = new EventEmitter<boolean>();
  // tslint:disable-next-line:typedef
  increaseRating() {
    this.user.rating++;
    this.voted.emit(true); // -> html
  }
  DecreaseFirst(): void{
    console.log(this.user.id);
    this.user.rating = 0;
  }

  ngOnInit(): void {
  }
}

import { Component } from '@angular/core';
import { IBall } from './IBall';

@Component({
  selector: 'sw-blueball',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blue-ball-game';
  balls: IBall[];
  ball: IBall;
  blueBall: number;
  turns: number;
  isWin: boolean;
  msg: String;

  constructor() {
    this.ball = {
      ballIndex: 1,
      ballColor: 'red'
    }
    this.balls = [];
    this.blueBall = Math.floor(Math.random() * 50 + 1);
    this.turns = 0;
    this.isWin = false;
    this.msg = "";
    //console.log(this.blueBall)
  }

  createButtons() {
    for (var i = 0; i < 50; i++) {
      this.ball = { ballIndex: i, ballColor: 'grey' };
      this.balls.push(this.ball);
    }
    return this.balls;
  }

  alert(e: IBall) {
    this.turns++;
    if (e.ballIndex == this.blueBall && this.turns < 6 && this.isWin == false) {
      e.ballColor = "blue";
      this.isWin = true;
      this.msg = "You Won The Game!!"
    }
    else if (e.ballIndex < this.blueBall && this.turns < 6 && this.isWin == false) {
      e.ballColor = "red";
      this.msg = "Number of turns left : " + (5 - this.turns);
    } else if (e.ballIndex > this.blueBall && this.turns < 6 && this.isWin == false) {
      e.ballColor = "green";
      this.msg = "Number of turns left : " + (5 - this.turns);
    }
    return e.ballColor;
  }
}

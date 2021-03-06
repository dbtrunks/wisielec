import {autoinject} from 'aurelia-framework';

@autoinject
export class Game {

    constructor() {
        this.showBt = true;
        this.clue = "";
        this.clue1 = "";
        this.points = 0;
        this.letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'];
        this.lapse = 0;
        this.win = false;
        this.lose = false;
    }

    choiceLeatter(par) {

        let element = document.getElementById("#" + par);

        if (this.clue.contains(par) == true) {
            for (var i = 0; i < this.clue.length; i++) {
                if (this.clue[i] == par) {
                    this.clue1 = this.clue1.substr(0, i) + par + this.clue1.substr(i + 1);
                    this.points += 10;
                }
            }
            element.style.background = "#00ff00";
        }
        else {
            element.style.background = "#ff0000";
            this.lapse += 1;
        }
        element.disabled = true;

        if (this.clue == this.clue1) {
            this.win = true;
        }

        if (this.lapse == 5) {
            this.clue1 = "";
            this.showBt = true;
            this.lose = true;
        }
    }

    castLots() {
        this.lapse = 0;
        this.win = false;
        this.lose = false;
        this.clue = "";
        this.clue1 = "";
        var buttons = document.querySelectorAll("input[type=button]");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].style.background = "#d4d4d4";
        }

        var r = Math.floor((Math.random() * 2) + 1);
        var clue2 = "";
        if (r == 1) {
            clue2 = "TESTOWE HASŁO";

        }
        else {
            clue2 = "Koło fortuny";
        }
        this.clue = clue2.toUpperCase();
        for (var i = 0; i < this.clue.length; i++) {
            if (this.clue[i] == " ") this.clue1 = this.clue1 + " ";
            else this.clue1 = this.clue1 + "-";
        }

        this.showBt = false;
    }

    resetPoints() {
        this.points = 0;
    }

}
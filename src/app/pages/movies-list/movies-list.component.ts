import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public listMovies: any = [
    {
      img: "../../../assets/Tenet.png",
      Title: "Tenet",
      Genre: "Action, Sci- Fi",
      ReleasedDate: "3 September 2020",
      duration: "2h 30 min",
      Rating: "7.8",
      Description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      TrailerLink: "https://www.youtube.com/watch?v=LdOM0x0XDMo"
    },
    {
      img: "../../../assets/Spider Man.png",
      Title: "Into the Spider-Verse",
      Description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      Rating: "8.4",
      duration: "1h 57min",
      Genre: "Action, Animation, Adventure",
      ReleasedDate: "14 December 2018",
      TrailerLink: "https://www.youtube.com/watch?v=tg52up16eq0"
    },
    {
      img: "../../../assets/Knives Out.png",
      Title: "Knives Out",
      Description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      Rating: "7.9",
      duration: "2h 10min",
      Genre: "Comedy, Crime, Drama",
      ReleasedDate: "27 November 2019",
      TrailerLink: "https://www.youtube.com/watch?v=qGqiHJTsRkQ"
    },
    {
      img: "../../../assets/Guardians of The Galaxy.png",
      Title: "Guardians of the Galaxy",
      Description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      Rating: "8.0",
      duration: "2h 1min",
      Genre: "Action, Adventure, Comedy",
      ReleasedDate: "1 August 2014",
      TrailerLink: "https://www.youtube.com/watch?v=d96cjJhvlMA"
    },
    {
      img: "../../../assets/Avengers.png",
      Title: "Avengers: Age of Ultron",
      Description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      Rating: "7.3",
      duration: "2h 21min",
      Genre: "Action, Adventure, Sci-Fi",
      ReleasedDate: "1 May 2015",
      TrailerLink: "https://www.youtube.com/watch?v=tmeOjFno6Do"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

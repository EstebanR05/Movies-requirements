import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public id: number = 0;
  public listFavorites: any = [];

  public listMovies: any = [
    {
      id: 0,
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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

  public insertNew(id: any): void {
    let flag: boolean = this.ValidityState(id);
    if (flag == true) {
      this.listFavorites.push(this.listMovies[this.id]);
      Swal.fire({
        title: "Good job!",
        text: "You Save in the favorites!",
        icon: "success"
      });
    }
  }

  public ValidityState(id: any): boolean {
    let flag = true;
    for (let index = 0; index < this.listFavorites.length; index++) {
      if (id == this.listFavorites[index].id) {
        flag = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong, you have this movie in the favorite!",
        });
      }
    }
    return flag;
  }

  //modal
  selected$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  modalDisplay$: BehaviorSubject<any> = new BehaviorSubject<any>("none");
  subscription!: Subscription;

  //abre la pantalla emergente para guardar las tareas
  public openModal(id: number, event: any): void {
    this.selected$.next({ event })
    this.modalDisplay$.next("block");
    this.id = id;
  }

  //se encarga de cerrar la pantalla emergente donde agregamos las tareas
  public closeModal(): void {
    this.selected$.next(null);
    this.modalDisplay$.next("none");
    this.subscription.unsubscribe();
  }

}

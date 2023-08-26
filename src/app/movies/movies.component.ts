import { Component, Inject, OnInit } from '@angular/core';
import { TheaterService } from '../theater.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  theaters!: any[];
  selectedTheaterId!: number; // To store the selected theater ID
  selectedTheater: any | null=null; // To store the selected theater's data
  selectedTime: boolean = true;
  selectedSeats: any[] = []; // To store selected seat objects
  constructor(private theaterService: TheaterService) {}

  ngOnInit(): void {
    this.theaterService.getTheaters().subscribe(data => {
      this.theaters = data;
    });
  }
  showMovieDetails(theaterId: number): void {
    this.selectedTheaterId = theaterId;
    this.selectedTheater = this.theaters.find(theater => theater.id === theaterId);
  }

  selectTime(){
    this.selectedTime = false;
    this.selectedTheaterId;
  }
  getSeatCursor(seat: any): string {
    if (seat.status === 'available') {
      return 'pointer';
    } else {
      return 'default';
    }
  }
  toggleSeatSelection(seat: any): void {
    const index = this.selectedSeats.indexOf(seat);
    if (index === -1) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats.splice(index, 1);
    }
  }
  isSeatSelected(seat: any): boolean {
    return this.selectedSeats.includes(seat);
  }
  
  getSeatIcon(seat: any): string {
    if (seat.status === 'selected') {
      return 'fa-solid fa-circle-check';
    } else {
      return 'fa-solid fa-circle-xmark';
    }
  }
  generateArray(length: number): any[] {
    return Array.from({ length }, (_, index) => index);
  }
  getSeatColor(status: string): string {
    if (status === 'available') {
      return 'green';
    } else if (status === 'selected') {
      return 'blue';
    } else {
      return 'tomato';
    }
  }
  getRowLabel(index: number): string {
    return String.fromCharCode(65 + index);
  }
  

}

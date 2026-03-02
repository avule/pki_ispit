import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MovieService } from '../../services/movie.service';
import { MovieProjection } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MovieSearchComponent implements OnInit {
  searchCriteria: any = {};
  searchResults: Observable<MovieProjection[]> | undefined;
  private searchTerms = new Subject<any>();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.searchResults = this.searchTerms.pipe(
      startWith({}),
      debounceTime(300),
      switchMap((criteria: any) => this.movieService.searchMovies(criteria))
    );
  }

  searchMovies(): void {
    this.searchTerms.next({ ...this.searchCriteria });
  }

  clearSearch(): void {
    this.searchCriteria = {};
    this.searchTerms.next({});
  }

  private formatLocalDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onReleaseDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.searchCriteria.releaseDate = event.value ? this.formatLocalDate(event.value) : undefined;
  }

  onProjectionDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.searchCriteria.projectionDate = event.value ? this.formatLocalDate(event.value) : undefined;
  }
}

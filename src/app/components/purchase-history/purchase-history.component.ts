import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { PurchaseRecord } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PurchaseHistoryComponent implements OnInit {
  purchaseHistory: Observable<PurchaseRecord[]> | undefined;
  isLoggedIn: Observable<boolean> = of(false);

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.purchaseHistory = this.cartService.getPurchaseHistory();
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {MainComponent} from './pages/main/main.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './components/menu/menu.component';
import {BookCardComponent} from './components/book-card/book-card.component';
import {BookListComponent} from './pages/book-list/book-list.component';
import {RatingComponent} from './components/rating/rating.component';
import {MyBooksComponent} from './pages/my-books/my-books.component';
import {ManageBooksComponent} from './pages/manage-books/manage-books.component';
import {BorrowedBookListComponent} from './pages/borrowed-book-list/borrowed-book-list.component';
import {ReturnedBooksComponent} from './pages/returned-books/returned-books.component';
import {BookDetailsComponent} from './pages/book-details/book-details.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    BookCardComponent,
    BookListComponent,
    RatingComponent,
    MyBooksComponent,
    ManageBooksComponent,
    BorrowedBookListComponent,
    ReturnedBooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ]
})
export class BookModule { }

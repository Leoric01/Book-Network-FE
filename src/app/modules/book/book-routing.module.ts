import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {BookListComponent} from './pages/book-list/book-list.component';
import {MyBooksComponent} from './pages/my-books/my-books.component';
import {ManageBooksComponent} from './pages/manage-books/manage-books.component';
// import {BorrowedBookListComponent} from './pages/borrowed-book-list/borrowed-book-list.component';
// import {ReturnedBooksComponent} from './pages/returned-books/returned-books.component';
// import {authGuard} from '../../services/guard/auth.guard';
// import {BookDetailsComponent} from './pages/book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: BookListComponent
      }, {
        path: 'my-books',
        component: MyBooksComponent
      }, {
        path: 'manage',
        component: ManageBooksComponent,
      },
      {
        path: 'manage/:bookId',
        component: ManageBooksComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}

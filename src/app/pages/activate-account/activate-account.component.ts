import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {skipUntil} from 'rxjs';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {
  message = '';
  isOkay = true;
  submitted = false;
  errorMsg: Array<string> = [];
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  private confirmAccount(token: string) {
    this.errorMsg = [];
    this.authService.confirm({token}).subscribe({
      next: () => {
        this.message = 'Your account has been successfully activated.\nNow you can proceed to login';
        this.submitted = true;
      },
      error: (err) => {
        try {
          const errorResponse = JSON.parse(err.error);
          this.errorMsg.push(errorResponse.error || 'An unknown error occurred.');
        } catch {
          this.errorMsg.push('An unknown error occurred while processing the response.');
        }
        this.submitted = true;
        this.isOkay = false;
      }
    });
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  protected readonly skipUntil = skipUntil;
}

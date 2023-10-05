import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment-2';
  inputText: string = ''; // Initialize with an empty string
  displayedContent: string = '';

  displayContent(value: string) {
    this.displayedContent = `You entered: ${value}`;
  }

  isSuccess: boolean = true;
  isError: boolean = false;
  message: string = 'Success';

  toggleErrorState() {
    this.isSuccess = !this.isSuccess;
    this.isError = !this.isError;
    this.message = this.isError ? 'Error' : 'Success';
  }
}

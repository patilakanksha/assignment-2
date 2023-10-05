import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name: string= 'Akanksha';
  public inputText: string = ''; 
  public displayedContent: string = '';
  public isAvailable: boolean = true;
  public metersValue: number = 0;
  public isSuccess: boolean = true;
  public isError: boolean = false;
  public message: string = 'Success';
  public months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }

  displayContent(value: string) {
    this.displayedContent = `You entered: ${value}`;
  }

  toggleErrorState() {
    this.isSuccess = !this.isSuccess;
    this.isError = !this.isError;
    this.message = this.isError ? 'Error' : 'Success';
  }

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      // Define your form controls and their initial values and validators here
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
    });
  }
}

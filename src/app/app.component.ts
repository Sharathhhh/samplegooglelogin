import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = ''; 
  // Replace 'YOUR_CLIENT_ID' with the actual Client ID obtained from LinkedIn Developer Console
  clientId = '866h3e38zk8wdz';

  // Function to handle LinkedIn login
  loginWithLinkedIn() {
    // Add the scope 'r_emailaddress' to request permission to retrieve the user's email address
   const linkedInLoginUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${this.clientId}&redirect_uri=${window.location.origin}&state=random_string&scope=r_liteprofile`;
   
    // Open the LinkedIn login popup window
    window.open(linkedInLoginUrl, 'LinkedInLogin', 'width=600,height=600');

    // For simplicity in this example, log a message to indicate that the LinkedIn login button was clicked.
    console.log('LinkedIn login clicked!');
  }
}






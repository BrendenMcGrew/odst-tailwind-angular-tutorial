1. Install the newest version of NX cli on the command prompt
    - `npm install -g nx`
2. Create a Nest Nx workspace on the command prompt
    - `npx create-nx-workspace angled-wind --package-manager=yarn`
    - Choose your style => Select integrated using the arrow keys.
    - What to create in the new workspace => Select Nest
    - Application name => angular-tailwind
    - When asked to enable distributed caching to make your CI faster => Select No
3. Generate tailwind configuration with the nx cli
    - `cd angular-tailwind`
    - `npx nx generate @nrwl/angular:setup-tailwind angular-tailwind`
    - It does everything for you
4. Create a base template for the html
   - Go to app.component.html and clear the file
   - replace it all with the following
   ```html
   <div>Beccy</div>
   <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" (click)="testButton()">Test button</button>
   ```
   - Go to app.component.ts and clear the file
   - replace it all with the following
   ```ts
   import { Component } from '@angular/core';

   @Component({
   selector: 'angled-wind-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   })
   export class AppComponent {
   title = 'angular-tailwind';
   isOn = false;

   testButton() {
   this.isOn = !this.isOn;
    }
   }
   ```
   
5. Add conditional styling
   - Add a ngClass directive to the div as follows based on the 'isOn' boolean
   ```html
   <div [ngClass]="isOn ? '':'' ">Beccy</div>
   ```
   - Tailwind can be added to anywhere that takes a class name input for styling
   - Add whatever tailwind classes you'd like to the empty strings in the ngClass
   - As you click the button, it will switch between them.

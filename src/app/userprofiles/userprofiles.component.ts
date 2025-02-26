import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userprofiles',
  imports: [],
  templateUrl: './userprofiles.component.html',
  styleUrl: './userprofiles.component.css'
})
export class UserprofilesComponent {
  @Input() name: string ='';
  @Input() age: number = 0;
  @Input() bio: string ='';
  @Input() role: string = '';
  @Input() avatar: string ='';
}

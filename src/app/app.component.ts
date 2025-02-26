import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserprofilesComponent } from "./userprofiles/userprofiles.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserprofilesComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserProfileCard';
  users = [
    {
      id: 1,
      name: "Dilip Kumar K M",
      age: 21,
      avatar: "https://cdn.bitrix24.in/b32626871/resize_cache/147/ff58db95aecdfa09ae61b51b5fd8f63f/main/bfb/bfb0b1cdb80e2130374d84c80e99d7d4/DILIP%20KUMAR%20K%20M.jpg.png",
      role: "Full Stack Trainee",
      bio:"Dilip is a highly motivated and dedicated professional with a strong passion for learning and growth. With a keen interest in technology and innovation, Dilip strives to make a meaningful impact in the industry."
    },
    {
      id: 2,
      name: "Suje",
      age: 21,
      avatar: "https://cdn.bitrix24.in/b32626871/resize_cache/335/ff58db95aecdfa09ae61b51b5fd8f63f/main/87a/87ae364e9ebe3e27ef2065fd28a9544d/avatar.png",
      role: "Full Stack Trainee",
      bio:"Suje is a highly motivated and dedicated professional with a strong passion for learning and growth. With a keen interest in technology and innovation, Dilip strives to make a meaningful impact in the industry."
    },
    {
      id:3,
      name: "Prabha",
      age: 21,
      avatar: "https://cdn.bitrix24.in/b32626871/resize_cache/157/ff58db95aecdfa09ae61b51b5fd8f63f/main/3b9/3b962f746272b4f9de9bd697c83c2d3e/avatar.png",
      role: "Full Stack Trainee",
      bio:"Prabha is a highly motivated and dedicated professional with a strong passion for learning and growth. With a keen interest in technology and innovation, Dilip strives to make a meaningful impact in the industry."
    },
    {
      id:4,
      name: "Santhosh",
      age: 23,
      avatar: "https://nexarc.bitrix24.in/b32626871/resize_cache/375/a7fa78f57e73ecbd0b9500a062d0d214/main/97c/97ca58973f069cf268d4782516af2f02/avatar.png",
      role: "MD",
      bio: "Santhosh, MD, is a distinguished medical professional with a passion for delivering exceptional patient care. As a respected leader in the field, he brings expertise and compassion to his work."
    },
    {
      id:5,
      name: "Monish Chandrasekaran",
      age: 23,
      avatar: "https://cdn.bitrix24.in/b32626871/resize_cache/59/ff58db95aecdfa09ae61b51b5fd8f63f/main/ff5/ff5b364afe33fc44a37649a63dad496f/monish-c.jpg.png",
      role: "CEO",
      bio: "Monish Chandrasekaran is the CEO of NexGen Nextopia, driving growth and innovation with over 5 years of industry expertise. Under his/her leadership, the company has achieved significant milestones."
    }
  ]
}

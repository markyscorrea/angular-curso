import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrl: './diretiva-ngswitch.component.scss'
})
export class DiretivaNgswitchComponent {
  aba: string = 'home';
}

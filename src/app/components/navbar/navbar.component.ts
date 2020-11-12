import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarItems } from '../sidebar-content/sidebar-content.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() menuClick = new EventEmitter<boolean>();
  public menuState = true;
  public list: SidebarItems[] = [
    { icon: 'person', text: 'Mi Perfil', path: 'profile' },
    {
      icon: 'security',
      text: 'COVID-19: Centro de información',
      path: 'covid',
    },
    { icon: 'people', text: 'Amigos', path: 'friends' },
    { icon: 'turned_in', text: 'Guardado', path: 'saved' },
    { icon: 'groups', text: 'Grupos', path: 'groups' },
  ];

  constructor() {}

  ngOnInit(): void {}

  public menuEvent(): void {
    this.menuState = !this.menuState;
    this.menuClick.emit(this.menuState);
  }
}

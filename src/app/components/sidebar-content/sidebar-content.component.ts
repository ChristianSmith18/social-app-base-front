import { Component, OnInit } from '@angular/core';

export interface SidebarItems {
  icon: string;
  text: string;
  path: string;
}

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
})
export class SidebarContentComponent implements OnInit {
  public list: SidebarItems[] = [
    { icon: 'home', text: 'Inicio', path: 'home' },
    { icon: 'person', text: 'Mi Perfil', path: 'profile' },
    {
      icon: 'security',
      text: 'COVID-19: Centro de información',
      path: 'covid',
    },
    { icon: 'people', text: 'Amigos', path: 'friends' },
    { icon: 'turned_in', text: 'Guardado', path: 'saved' },
    { icon: 'groups', text: 'Grupos', path: 'groups' },
    { icon: 'logout', text: 'Cerrar Sesión', path: 'login' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'Accueil',
    title: 'Accueil',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'pages/accueil'
  },
  {
    id: 'profile',
    title: 'Profil',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'file',
    url: 'pages/profile'
  },
  {
    id: 'jouer',
    title: 'Jouer',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'file',
    url: 'sample'
  },
  {
    id: 'apropos',
    title: 'A Propos',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'file',
    url: 'sample'
  }
]

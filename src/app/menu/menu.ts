import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'administrator',
    title: 'Administrator',
    translate: 'MENU.ADMINISTRATOR',
    type: 'section',
    icon: 'bar-chart-2',
    children: [
      {
        id: 'advertisement',
        title: 'Advertisement',
        translate: 'MENU.ADVERTISEMENT.ADVERTISEMENT',
        type: 'collapsible',
        icon: 'package',
        // badge: {
        //   title: '2',
        //   translate: 'MENU.ADVERTISEMENT.BADGE',
        //   classes: 'badge-light-danger badge-pill'
        // },
        children: [
          {
            id: 'advertisementlist',
            title: 'List',
            translate: 'MENU.ADVERTISEMENT.LIST',
            type: 'item',
            icon: 'list',
            url: 'advertisement/list'
          },
          {
            id: 'advertisementview',
            title: 'View',
            translate: 'MENU.ADVERTISEMENT.VIEW',
            type: 'item',
            icon: 'circle',
            url: 'advertisement/view'
          },
          {
            id: 'advertisementedit',
            title: 'Edit',
            translate: 'MENU.ADVERTISEMENT.EDIT',
            type: 'item',
            icon: 'edit',
            url: 'advertisement/edit'
          },
        ]
      },
      {
        id: 'user',
        title: 'User',
        translate: 'MENU.USER.USER',
        type: 'collapsible',
        icon: 'user',
        children: [
          {
            id: 'userlist',
            title: 'List',
            translate: 'MENU.USER.LIST',
            type: 'item',
            icon: 'list',
            url: 'user/list'
          },
          {
            id: 'userview',
            title: 'View',
            translate: 'MENU.USER.VIEW',
            type: 'item',
            icon: 'circle',
            url: 'user/view'
          },
          {
            id: 'useredit',
            title: 'Edit',
            translate: 'MENU.USER.EDIT',
            type: 'item',
            icon: 'edit',
            url: 'user/edit'
          },
        ]
      },
      {
        id: 'earnings',
        title: 'Earnings',
        translate: 'MENU.EARNINGS',
        type: 'item',
        icon: 'flag',
        url: 'earnings'
      }
    ]
  }
]



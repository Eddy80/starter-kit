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
    icon: 'tool',
    children: [
      {
        id: 'advertisement',
        title: 'Advertisement',
        translate: 'MENU.ADVERTISEMENT',
        type: 'item',
        icon: 'layers',
        url: 'advertisement'
        // badge: {
        //   title: '2',
        //   translate: 'MENU.ADVERTISEMENT.BADGE',
        //   classes: 'badge-light-danger badge-pill'
        // },
        // children: [
        //   {
        //     id: 'advertisementlist',
        //     title: 'List',
        //     translate: 'MENU.ADVERTISEMENT.LIST',
        //     type: 'item',
        //     icon: 'list',
        //     url: 'advertisement/list'
        //   },
        //   {
        //     id: 'advertisementview',
        //     title: 'View',
        //     translate: 'MENU.ADVERTISEMENT.VIEW',
        //     type: 'item',
        //     icon: 'circle',
        //     url: 'advertisement/view'
        //   },
        //   {
        //     id: 'advertisementedit',
        //     title: 'Edit',
        //     translate: 'MENU.ADVERTISEMENT.EDIT',
        //     type: 'item',
        //     icon: 'edit',
        //     url: 'advertisement/edit'
        //   },
        //]
      },
      {
        id: 'user',
        title: 'User',
        translate: 'MENU.USER',
        type: 'item', //collapsible
        icon: 'users',
        url: 'user'
        // children: [
        //   {
        //     id: 'user',
        //     title: 'User',
        //     translate: 'MENU.USER.LIST',
        //     type: 'item',
        //     icon: 'list',
        //     url: 'user'
        //   }
        // ]
      },
      {
        id: 'earning',
        title: 'Earning',
        translate: 'MENU.EARNING',
        type: 'item',
        icon: 'dollar-sign',
        url: 'earning'
      },
      {
        id: 'statistics',
        title: 'Statistics',
        translate: 'MENU.STATISTICS.STATISTICS',
        type: 'collapsible',
        icon: 'codepen',
        children: [
          {
            id: 'user',
            title: 'User',
            translate: 'MENU.STATISTICS.USER',
            type: 'item',
            icon: 'user-check',
            url: 'statistics/user'
          },
          {
            id: 'advertiser',
            title: 'Advertiser',
            translate: 'MENU.STATISTICS.ADVERTISER',
            type: 'item',
            icon: 'user-plus',
            url: 'statistics/advertiser'
          },
          {
            id: 'advertisement',
            title: 'Advertisement',
            translate: 'MENU.STATISTICS.ADVERTISEMENT',
            type: 'item',
            icon: 'layers',
            url: 'statistics/advertisement'
          }
        ]
      },
      {
        id: 'question',
        title: 'Question',
        translate: 'MENU.QUESTION',
        type: 'item',
        icon: 'book',
        url: 'question'
      },
    ]
  }
]



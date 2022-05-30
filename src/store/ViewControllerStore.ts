import { defineStore } from 'pinia'
import Env from './env'

const useViewControllerStore = defineStore('ViewControllerStore', {
  state: () => ({
    title: 'RBAC',
    nowPath: '',
    menuSwitch: {
      isFold: false,
      isShow: false,
      topBarId: Env.barItemIds.unitTest,
    },
    topBarItems: [
      { id: Env.barItemIds.unitTest, to: "/", isShow: false, name: "單元測試" },
      { id: Env.barItemIds.mRouter, to: "/", isShow: false, name: "營運管理" },
    ],
    sideMenuItems: [
      {
        id: Env.barItemIds.unitTest, subMenu: [
          { isShow: true, name: 'Camera', to: '/Camera', id: 'Camera' },
          { isShow: false, name: 'TTS', to: '/TTS', id: 'TTS' },
          { isShow: false, name: 'CMS', to: '/CMS', id: 'CMS' },
          { isShow: true, name: 'Sample', to: '/Sample', id: 'Sample' },
          { isShow: true, name: 'AxiosExample', to: '/AxiosExample', id: 'AxiosExample' },
          { isShow: true, name: 'NewTodoSample', to: '/NewTodoSample', id: 'NewTodoSample' },
        ],
      },
      {
        id: Env.barItemIds.mRouter, subMenu: [
          { isShow: true, name: '客運與路線', to: '/MCompany', id: 'MCompany' },
          { isShow: true, name: '月台管理', to: '/MPlatform', id: 'MPlatform' },
          { isShow: true, name: '月台申請', to: '/MPlatformApply', id: 'MPlatform_Apply' },
          { isShow: true, name: '停靠時間設定', to: '/MStopTime', id: 'MStop_Time' },
          { isShow: true, name: '班次維護', to: '/MMaintenance', id: 'MMaintenance' },
        ]
      },
    ],
  }),
  actions: {}
})

export default useViewControllerStore;

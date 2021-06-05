import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.techoutopia.webstatus',
  appName: 'WebStatus',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_status_icon_17',
      iconColor: '#ffffff'
    }
  }
};

export default config;

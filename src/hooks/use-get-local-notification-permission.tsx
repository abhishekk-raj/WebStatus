import { useEffect } from 'react';
import { LocalNotifications, PermissionStatus } from '@capacitor/local-notifications';

const useGetLocalNotificationPermission = () => {
    useEffect(() => {
        LocalNotifications.requestPermissions()
            .then((permissionStatus: PermissionStatus) => {
                console.log(permissionStatus.display);
            });
    }, []);
};

export default useGetLocalNotificationPermission;
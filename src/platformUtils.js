export const getPlatform = () => {
    const userDeviceArray = [
      { device: 'Android', platform: /Android/ },
      { device: 'iPhone', platform: /iPhone/ },
      { device: 'iPad', platform: /iPad/ },
      { device: 'Symbian', platform: /Symbian/ },
      { device: 'Windows Phone', platform: /Windows Phone/ },
      { device: 'Tablet OS', platform: /Tablet OS/ },
      { device: 'Linux', platform: /Linux/ },
      { device: 'Windows', platform: /Windows NT/ },
      { device: 'Macintosh', platform: /Macintosh/ }
    ];
  
    const platform = navigator.userAgent;
  
    for (let i = 0; i < userDeviceArray.length; i++) {
      if (userDeviceArray[i].platform.test(platform)) {
        return userDeviceArray[i].device;
      }
    }
    return `Неизвестная платформа! ${platform}`;
  };
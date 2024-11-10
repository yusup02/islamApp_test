import { useTranslation } from "./TranslationContext";



const Download = () => {
  const { translate } = useTranslation();
  // Внутреннее определение getPlatform
  const getPlatform = () => {
    const userDeviceArray = [
      { device: "Android", platform: /Android/ },
      { device: "iPhone", platform: /iPhone/ },
      { device: "iPad", platform: /iPad/ },
      { device: "Symbian", platform: /Symbian/ },
      { device: "Windows Phone", platform: /Windows Phone/ },
      { device: "Tablet OS", platform: /Tablet OS/ },
      { device: "Linux", platform: /Linux/ },
      { device: "Windows", platform: /Windows NT/ },
      { device: "Macintosh", platform: /Macintosh/ },
    ];

    const platform = navigator.userAgent;

    for (let i = 0; i < userDeviceArray.length; i++) {
      if (userDeviceArray[i].platform.test(platform)) {
        return userDeviceArray[i].device;
      }
    }
    return `Неизвестная платформа! ${platform}`;
  };

  const goToAppStore = () => {
    let platform = getPlatform(); // Функция для получения платформы
    if (platform === "iPhone" || platform === "Macintosh") {
      window.location.href = "https://itunes.apple.com/app/id1452368807";
    } else if (platform === "Android") {
      window.location.href =
        "http://play.google.com/store/apps/details?id=islam.islamapp";
    }
  };

  return (
    <div>
      <button className="page-title_nstall" onClick={goToAppStore}>
        {translate("download")}
      </button>
    </div>
  );
};

export default Download;

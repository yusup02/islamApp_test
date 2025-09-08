import { useTranslation } from "./TranslationContext";
import Modal from "react-modal";
import "./modal.css";
import qr from "./images/qr.svg";
import { useState } from "react";

Modal.setAppElement("#root");

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
      fetch("https://play.google.com/store/apps/details?id=islam.islamapp", {
        method: "HEAD",
        mode: "no-cors",
        signal: AbortSignal.timeout(3000),
      })
        .then((response) => {
          window.location.href =
            "https://play.google.com/store/apps/details?id=islam.islamapp";
        })
        .catch((error) => {
          window.location.href = "market://details?id=islam.islamapp";
        });
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="button">
      <button rel="preload" className="page-title_nstall" onClick={goToAppStore}>
        {translate("download")}
      </button>
      <button rel="preload" className="qr_cod" onClick={openModal}>
        {translate("QR-cod")}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button rel="preload" className="modal-close-button" onClick={closeModal}></button>
        <img src={qr} className="qr" />
      </Modal>
    </div>
  );
};

export default Download;

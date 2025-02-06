import React, { useEffect, useState } from "react";

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowSnackbar(false);
      return;
    }

    const handler = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowSnackbar(true);

      // Hide snackbar after 5 seconds if the user doesn't interact
      setTimeout(() => setShowSnackbar(false), 5000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the PWA install");
        } else {
          console.log("User dismissed the PWA install");
        }
        setDeferredPrompt(null);
        setShowSnackbar(false);
      });
    }
  };

  return (
    <>
      {showSnackbar && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#323232",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>Install this app for a better experience</span>
          <button
            onClick={handleInstallClick}
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Install
          </button>
        </div>
      )}
    </>
  );
};

export default InstallPWA;

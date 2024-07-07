import { useEffect } from "react";

const fbSdkUrl =
  "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0";

export function useFacebookSDK() {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src = fbSdkUrl;
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      script.onload = () => {
        window.FB.XFBML.parse();
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
}

// src/components/ScoreAppEmbed.js
import React, { useEffect } from "react";

const ScoreAppEmbed = () => {
  useEffect(() => {
    // Load the ScoreApp script only on the client
    const script = document.createElement("script");
    script.src =
      "https://static.scoreapp.com/js/integration/v1/embedding.js?v=zh16-i";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-sa-url="https://64e6f12b-5e95-4125-ae71-b973baebacf9.scoreapp.com/?sa_target=_top"
      data-sa-view="chat"
      data-sa-icon="https://cdn.scoreapp.com/assets/icons/conversation.svg"
      data-sa-auto-open="0"
      data-sa-button-bg-color="#dc0121"
      data-sa-button-color="#FFFFFF"
      data-sa-button-text="Start the quiz"
      data-sa-font-size="16"
    />
  );
};

export default ScoreAppEmbed;

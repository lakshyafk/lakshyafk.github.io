import React from "react";

const PongGame = () => {
  return (
    <div className="w-full max-w-[640px] aspect-[4/3] mx-auto my-8 rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg">
      <iframe
        src="/pong/index.html"
        title="Go Pong Game"
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
};

export default PongGame;

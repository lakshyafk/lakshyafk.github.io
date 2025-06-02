import React from "react";

const PongGame = () => {
  return (
    <div className="w-full max-w-4xl mx-auto aspect-video my-8">
      <iframe
        src="/pong/index.html"
        title="Go Pong Game"
        width="800"
        height="600"
        style={{
          border: "2px solid #ccc",
          borderRadius: "12px",
        }}
        className="w-full h-full border rounded-xl"
      />
    </div>
  );
};

export default PongGame;

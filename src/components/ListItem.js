import React from "react";

function ListItem({ value }) {
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard 📥\nNow try pasting!");
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };

  return (
    <div className="bg-cyan-200 p-4 rounded m-2">
      <div className="flex flex-row justify-between items-center">
        <div className="text-3xl">{value.symbol}</div>
        <div>
          <h3>{value.title}</h3>
        </div>
        <button
          onClick={() => copyToClipboard(value.symbol)}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-sky-600 hover:to-teal-500 active:from-cyan-700 active:to-sky-700 transition-all duration-300 ease-in-out active:bg-teal-700 text-white p-2 rounded"
        >
          Click to copy emoji
        </button>
      </div>
    </div>
  );
}

export default ListItem;

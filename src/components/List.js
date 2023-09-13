import { useEffect } from "react";
import ListItem from "./ListItem";
import EmojiList from "../emojiList.json";

function List({ emojies, setEmojies, searchedEmoji }) {
  useEffect(() => {
    const filteredEmojies = EmojiList.filter((emoji) => {
      const lowercaseTitle = emoji.title.toLowerCase();
      const lowercaseSearchedEmoji = searchedEmoji.toLowerCase();
      return (
        lowercaseTitle.includes(lowercaseSearchedEmoji) ||
        emoji.keywords.includes(searchedEmoji)
      );
    }).slice(0, 50);
    setEmojies(filteredEmojies);
  }, [searchedEmoji, setEmojies]);

  return (
    <div className="flex justify-center">
      <div className="w-96">
        {emojies.map((emoji, index) => (
          <ListItem key={index} value={emoji} />
        ))}
      </div>
    </div>
  );
}

export default List;

import React, { useState } from "react";
import {
  countCharacters,
  countParagraphs,
  countPunctuations,
  countSentences,
  countSpaces,
  countWords,
} from "../utils/counterFunctions";

const ParagraphInput = () => {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="border rounded-md p-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        placeholder="Type or copy/paste your content here..."
      ></textarea>
      <table className="border-collapse">
        <thead className="bg-white">
          <th className="font-normal text-start pl-2 border p-1">Characters</th>
          <th className="font-normal text-start pl-2 border p-1">Words</th>
          <th className="font-normal text-start pl-2 border p-1">Sentences</th>
          <th className="font-normal text-start pl-2 border p-1">Paragraphs</th>
          <th className="font-normal text-start pl-2 border p-1">Spaces</th>
          <th className="font-normal text-start pl-2 border p-1">
            Punctuations
          </th>
        </thead>
        <tbody>
          <tr className="bg-[#F9FAFB] ">
            <td className="border pl-2 p-1">{countCharacters(text)}</td>
            <td className="border pl-2 p-1">{countWords(text)}</td>
            <td className="border pl-2 p-1">{countSentences(text)}</td>
            <td className="border pl-2 p-1">{countParagraphs(text)}</td>
            <td className="border pl-2 p-1">{countSpaces(text)}</td>
            <td className="border pl-2 p-1">{countPunctuations(text)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParagraphInput;

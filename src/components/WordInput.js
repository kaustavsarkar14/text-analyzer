import React, { useState } from "react";
import { countCharacters, countWords } from "../utils/counterFunctions";

const WordInput = () => {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <input
          className="flex-1 bg-white border rounded-md p-1"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="p-2 px-3 bg-[#731EE2] rounded-md text-white">
          Process Word
        </button>
      </div>
      <table className="max-w-96 border rounded-md">
        <thead className="bg-white">
          <tr>
            <th className="border text-start font-normal pl-2 p-1">
              Characters
            </th>
            <th className="border text-start font-normal pl-2 p-1">Words</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#F9FAFB]">
            <td className="border pl-2 p-1">{countCharacters(text)}</td>
            <td className="border pl-2 p-1">{countWords(text)}</td>
          </tr>
        </tbody>
      </table>
      <div className="p-2 border rounded-md">
        <div className="flex gap-4 ">
          <p className="min-w-32 font-semibold text-[#475467]">Defination:</p>
          <p className="font-semibold">
            in, relating to, or characteristic of a town or city. "the urban
            population"
          </p>
        </div>
        <div className="flex gap-4">
          <p className="min-w-32 font-semibold text-[#475467]">
            Parts of Speech:
          </p>
          <p className="font-semibold">Noun</p>
        </div>
        <div className="flex gap-4">
          <p className="min-w-32 font-semibold text-[#475467]">Synonyms:</p>
          <p className="font-semibold">Town</p>
        </div>
        <div className="flex gap-4">
          <p className="min-w-32 font-semibold text-[#475467]">Antonyms:</p>
          <p className="font-semibold">Rural</p>
        </div>
      </div>
    </div>
  );
};

export default WordInput;

import { useState } from "react";
import WordInput from "./components/WordInput";
import ParagraphInput from "./components/ParagraphInput";

function App() {
  const [selectedInput, setSelectedInput] = useState("word");

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-4xl font-semibold tracking-tighter">Text Analyzer</h1>
      <p className="text-lg">
        Text Analyzer is a simple free online tool for SEO web content analysis
        that helps you find most frequent phrases and words, number of
        characters, words, sentences and paragraphs, and estimated read and
        speak time of your content.
      </p>
      <div className="bg-[#F9FAFB] w-fit border rounded-md p-1 flex gap">
        <button
          className={
            "w-56 py-2 " +
            (selectedInput == "word" && "bg-white shadow-md rounded-md font-semibold")
          }
          onClick={() => setSelectedInput("word")}
        >
          Word Input
        </button>
        <button
          className={
            "w-56 py-2 " +
            (selectedInput == "paragraph" && "bg-white shadow-md rounded-md font-semibold")
          }
          onClick={() => setSelectedInput("paragraph")}
        >
          Paragraph Input
        </button>
      </div>
      <div>{selectedInput === "word" ? <WordInput /> : <ParagraphInput />}</div>
    </div>
  );
}

export default App;

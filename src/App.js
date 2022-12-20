import "./styles.css";
import JoditEditor from "jodit-react";
import React, { useState, useRef, useMemo } from "react";

export default function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [value, setValue] = useState();
  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={content}
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {
          setValue(newContent);
        }}
      />
      {value && <h1 dangerouslySetInnerHTML={{ __html: value }}></h1>}
    </div>
  );
}

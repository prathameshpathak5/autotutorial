import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
function Editor() {
  const [data, setData] = useState("");
  const handleeditor = (e, editor) => {
    const parse = require("html-react-parser");

    setData(parse(editor.getData()));
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{ width: "900px", display: "inline-block", textAlign: "left" }}
      >
        <div
          style={{
            width: "700px",
            display: "inline-block",
            textAlign: "right",
            marginBottom: "5px",
          }}
        >
          {/* <button
            style={{ backgroundColour: "black", color: "white" }}
            onClick={() => showData(!addedData)}
          >
            {addedData ? "Hide Data" : "showData"}
          </button> */}
        </div>

        <CKEditor
          editor={ClassicEditor}
          onChange={(e, editor) => {
            handleeditor(e, editor);
          }}
        />
      </div>
    </div>
  );
}

export default Editor;

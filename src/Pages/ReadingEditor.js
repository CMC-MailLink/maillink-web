import { useRef, useState, useMemo, useEffect } from "react";

//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill from "react-quill";
import "./ReadingEditor.css";

const ReadingEditor = () => {
  const quillRef = useRef();
  const [contents, setContents] = useState("");

  const getContent = () => {
    // RN에서 웹으로 데이터를 전송했을때 message이벤트가 실행됩니다.
    if (document.getElementsByClassName("test")[0]) {
      var result = document.getElementsByClassName("test")[0].innerText;
      if (result) setContents(result);
    }
  };

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <ReactQuill
        className="ReadingEditor"
        readOnly
        ref={quillRef}
        modules={{
          toolbar: false,
        }}
        value={contents}
        theme="snow"
      />
      <button
        id="loadingButton"
        style={{ display: "none" }}
        onClick={getContent}
      >
        SEND
      </button>
      {/* <CustomToolbar /> */}
    </>
  );
};

export default ReadingEditor;

import { useRef, useState, useMemo, useEffect } from "react";

//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill from "react-quill";
import "./QuilEditor.css";
import { API } from "../API";

const CustomToolbar = () => (
  <div id="toolbar">
    {/* <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option value="0"></option>
    </select> */}
    <button className="ql-header" value="1"></button>
    <button className="ql-header" value="2"></button>
    <button className="ql-bold"></button>
    <button className="ql-strike"></button>
    {/* <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select> */}
    {/* <select className="ql-background"></select> */}
    <button className="ql-blockquote"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-align" value=""></button>
    <button className="ql-align" value="center"></button>
    <button className="ql-align" value="right"></button>
    {/* <button class="ql-align" value="justify"></button> */}
    <button className="ql-image"></button>
    {/* <button className="ql-header1">
      <CustomHeader1></CustomHeader1>
    </button>
    <button className="ql-header2">
      <CustomHeader2></CustomHeader2>
    </button> */}
  </div>
);

const QuilEditor = () => {
  const quillRef = useRef();
  const [contents, setContents] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (quillRef.current) {
      const description = quillRef.current.getEditor().getText();
      setText(description);
      console.log(description);
      console.log(contents);
    }
  }, [contents]);

  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
    const formData = new FormData(); // 이미지를 url로 바꾸기위해 서버로 전달할 폼데이터 만들기

    const input = document.createElement("input"); // input 태그를 동적으로 생성하기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*"); // 이미지 파일만 선택가능하도록 제한
    input.setAttribute("name", "image");
    input.click();

    // 파일 선택창에서 이미지를 선택하면 실행될 콜백 함수 등록
    input.onchange = async () => {
      const file = input.files[0];
      console.log(file);
      formData.append("image", file, file.name); // 위에서 만든 폼데이터에 이미지 추가

      // 폼데이터를 서버에 넘겨 multer로 이미지 URL 받아오기
      const res = await API.imageEditing({ image: formData });
      console.log(res);
      if (!res) {
        alert("이미지 업로드에 실패하였습니다.");
      }
      const url = res;
      const quill = quillRef.current.getEditor();
      /* ReactQuill 노드에 대한 Ref가 있어야 메서드들을 호출할 수 있으므로
            useRef()로 ReactQuill에 ref를 걸어주자.
            getEditor() : 편집기를 지원하는 Quill 인스턴스를 반환함
            여기서 만든 인스턴스로 getText()와 같은 메서드를 사용할 수 있다.*/

      const range = quill.getSelection()?.index;
      //getSelection()은 현재 선택된 범위를 리턴한다. 에디터가 포커싱되지 않았다면 null을 반환한다.

      if (typeof range !== "number") return;
      /*range는 0이 될 수도 있으므로 null만 생각하고 !range로 체크하면 잘못 작동할 수 있다.
            따라서 타입이 숫자이지 않을 경우를 체크해 리턴해주었다.*/

      quill.setSelection(range, 1);
      /* 사용자 선택을 지정된 범위로 설정하여 에디터에 포커싱할 수 있다. 
               위치 인덱스와 길이를 넣어주면 된다.*/

      quill.clipboard.dangerouslyPasteHTML(
        range,
        `<img src=${url} alt="image" />`
      );
    }; //주어진 인덱스에 HTML로 작성된 내용물을 에디터에 삽입한다.
  };
  const header1Handler = () => {
    const button = document.getElementsByClassName("ql-header");
    button[0].click();
  };
  const header2Handler = () => {
    const button = document.getElementsByClassName("ql-header");
    button[1].click();
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: "#toolbar",
        handlers: {
          // 위에서 만든 이미지 핸들러 사용하도록 설정
          image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <CustomToolbar />
      <ReactQuill
        ref={quillRef}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
      />
      <div id="editortext" style={{ display: "none" }}>
        {text}
      </div>
      <div id="editorcontents" style={{ display: "none" }}>
        {contents}
      </div>
    </>
  );
};

export default QuilEditor;

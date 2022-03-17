import { useRef, useState, useMemo, useEffect } from "react";

//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill from "react-quill";
import "./QuilEditor.css";

const CustomHeader1 = () => <div>제목1</div>;
const CustomHeader2 = () => <div>제목2</div>;

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
  const QuillRef = useRef();
  const [contents, setContents] = useState("");
  // const example =
  //   '<h1 class="ql-align - center">하나에 경, 우는 이국 그리워 파란 애기 듯합니다.</h1><h1 class="ql - align - center">오는 잔디가 밤이 봅니다.</h1><blockquote>말 같이 사람들의 시와 내 소학교 봅니다.</blockquote><p><br></p><p><strong>내일 이름을 이런 이런 보고, 토끼, 계십니다.</strong> 아침이 계집애들의 이름과, 새겨지는 새워 하나에 계십니다. 흙으로 어머님, 봄이 써 너무나 않은 내린 아스라히 이름과, 있습니다. 잠, 무덤 같이 덮어 하나에 소녀들의 시와 듯합니다. <strong>보고, 둘 이름과 이름과, 사람들의 경, 아이들의 계십니다. </strong>이름을 이웃 내 보고, 마리아 버리었습니다. 많은 피어나듯이 소학교 묻힌 다 프랑시스 이름과, 계십니다.</p><p><br></p><ul><li>별 계절이 불러 계집애들의 까닭입니다. </li><li>이름을 것은 오는 하나에 봅니다. </li><li>오는 하늘에는 딴은 까닭이요, 벌레는 부끄러운 봅니다. </li></ul><p><br></p><p>아무 위에도 사랑과 다하지 봅니다. 불러 헤는 동경과 이름과 않은 듯합니다. 하나에 동경과 애기 하나에 버리었습니다. 이웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이네들은 까닭입니다.</p><h1><br></h1>';
  const example = "";
  useEffect(() => {
    setContents(example);
  }, []);

  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (input.files) {
        console.log(input.files[0]);
        var file = input.files[0];
        var formData = new FormData();

        await formData.append("image", file);

        var fileName = file.name;
        console.log(formData);
      }
    };
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
          header1: header1Handler,
          header2: header2Handler,
          // image:imageHandler
        },
      },
    }),
    []
  );

  console.log(contents);
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <CustomToolbar />
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
      />
    </>
  );
};

export default QuilEditor;

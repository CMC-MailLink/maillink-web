import { useRef, useState, useMemo } from "react";

//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill from "react-quill";
import "./QuilEditor.css";

const ReadingEditor = () => {
  const QuillRef = useRef();
  const [contents, setContents] = useState("");
  const example =
    '<h1 class="ql-align - center">하나에 경, 우는 이국 그리워 파란 애기 듯합니다.</h1><h1 class="ql-align - center">하나에 경, 우는 이국 그리워 파란 애기 듯합니다.</h1><h1 class="ql-align - center">하나에 경, 우는 이국 그리워 파란 애기 듯합니다.</h1><h1 class="ql-align - center">하나에 경, 우는 이국 그리워 파란 애기 듯합니다.</h1><h1 class="ql-align - center">하나에 경, 우는 이국 그리워 파란 애기 듯합니다.</h1><h1 class="ql-align - center">하나에 경, 우는 이국 그리워 파란 애기 듯합니다.</h1><h1 class="ql - align - center">오는 잔디가 밤이 봅니다.</h1><blockquote>말 같이 사람들의 시와 내 소학교 봅니다.</blockquote><p><br></p><p><strong>내일 이름을 이런 이런 보고, 토끼, 계십니다.</strong> 아침이 계집애들의 이름과, 새겨지는 새워 하나에 계십니다. 흙으로 어머님, 봄이 써 너무나 않은 내린 아스라히 이름과, 있습니다. 잠, 무덤 같이 덮어 하나에 소녀들의 시와 듯합니다. <strong>보고, 둘 이름과 이름과, 사람들의 경, 아이들의 계십니다. </strong>이름을 이웃 내 보고, 마리아 버리었습니다. 많은 피어나듯이 소학교 묻힌 다 프랑시스 이름과, 계십니다.</p><p><br></p><ul><li>별 계절이 불러 계집애들의 까닭입니다. </li><li>이름을 것은 오는 하나에 봅니다. </li><li>오는 하늘에는 딴은 까닭이요, 벌레는 부끄러운 봅니다. </li></ul><p><br></p><p>아무 위에도 사랑과 다하지 봅니다. 불러 헤는 동경과 이름과 않은 듯합니다. 하나에 동경과 애기 하나에 버리었습니다. 이웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이네들은 까닭입니다.웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이웃 없이 새워 같이 무덤 하나에 불러 청춘이 듯합니다. 하나에 마리아 어머님, 이름과 많은 내린 했던 이국 거외다. 멀듯이, 별 토끼, 이</p><h1><br></h1>';

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <ReactQuill
        readOnly
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        modules={{
          toolbar: false,
        }}
        value={example}
        theme="snow"
      />
      {/* <CustomToolbar /> */}
    </>
  );
};

export default ReadingEditor;

import { useRef, useState, useMemo, useEffect } from "react";

//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill from "react-quill";
import "./ReadingEditor.css";

const ReadingEditor = () => {
  const quillRef = useRef();
  const [contents, setContents] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus diam, iaculis nec porta sed, posuere sit amet libero. Suspendisse id fringilla neque, suscipit gravida ligula. Integer quis mattis turpis. Nam sagittis nec tortor sit amet porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae eros rhoncus, ornare sapien et, molestie turpis. Mauris eget porta elit. Duis sodales vulputate neque, eu consequat arcu blandit lobortis. Sed tempor ultricies arcu vulputate tempor. Vestibulum malesuada magna eget consectetur hendrerit. Nunc convallis, tortor ut iaculis finibus, eros orci pulvinar mi, luctus dictum mauris felis sed nulla. Nunc et auctor nisl. Suspendisse luctus nec arcu vel ultricies. Etiam sed odio a erat mollis ultricies. Praesent ut tortor at sem faucibus sagittis.Phasellus lacinia vehicula lorem, hendrerit pharetra magna luctus nec. Cras luctus in elit ac porttitor. Fusce turpis mi, sodales sed porta non, lobortis eget sapien. Morbi vel lectus mauris. Curabitur sed vulputate est. Etiam in laoreet sapien. Ut finibus erat a malesuada cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam nec pellentesque urna.Quisque ante purus, condimentum a urna sit amet, tempor molestie nunc. Maecenas id lacinia tellus, ultricies porta ipsum. Donec euismod congue nunc at eleifend. Aliquam eu arcu dui. Aliquam erat volutpat. Integer et nisi nibh. Nunc placerat sagittis varius.Praesent odio magna, pellentesque sed finibus vel, scelerisque tempus turpis. Nunc dignissim, justo ut porttitor tempor, orci ante tincidunt mi, a sodales eros urna quis urna. Nam bibendum lectus dignissim lorem scelerisque, et rhoncus velit scelerisque. Phasellus congue lacus metus, eu ullamcorper magna tincidunt efficitur. Quisque felis risus, semper et hendrerit sed, pretium ac leo. Aenean a mauris mollis, tristique turpis sed, ornare mi. Pellentesque posuere velit vitae accumsan venenatis. Curabitur rutrum turpis tellus, id scelerisque lorem efficitur quis. Donec condimentum sed nisl vel finibus.Cras at consectetur risus. Ut eget nisi eros. Nam ligula nisi, tempus sed sodales sed, congue et purus. Quisque volutpat, mauris non tincidunt laoreet, velit magna varius lectus, vel pretium ante nulla vitae ipsum. Nunc sed accumsan nisi, et pulvinar leo. Cras aliquam tellus ipsum, vitae fringilla sapien interdum vel. Morbi congue vehicula suscipit. Curabitur porta commodo augue quis porta. Morbi et mattis felis, vel placerat eros. Nullam quis diam justo. Sed nisl nulla, efficitur sed felis in, ultrices hendrerit mauris. Integer vitae tris"
  );

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

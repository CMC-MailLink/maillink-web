const RenderData = ({ posts, onClickContent }) =>
  posts.map((mail) => {
    return (
      <div
        key={mail.id}
        style={{ marginTop: 8, cursor: "pointer" }}
        onClick={onClickContent}
      >
        <div
          style={{
            fontFamily: "NotoSansKR-Regular",
            color: "#3C3C3C",
            fontSize: 16,
          }}
        >
          {mail.title}
        </div>
        <div
          style={{
            marginTop: 7,
            fontFamily: "NotoSansKR-Regular",
            color: "#BEBEBE",
            fontSize: 12,
            height: 31,
          }}
        >
          {mail.preView}
        </div>
        <div
          style={{
            marginTop: 7,
            fontFamily: "NotoSansKR-Regular",
            color: "#BEBEBE",
            fontSize: 12,
            borderBottom: "1px solid #EBEBEB",
            paddingBottom: 9,
          }}
        >
          {mail.publishedTime.slice(0, 10)}
        </div>
      </div>
    );
  });

export default RenderData;

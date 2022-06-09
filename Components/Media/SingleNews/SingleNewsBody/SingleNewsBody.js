import React from "react";

// CSS
import styles from "./SingleNewsBody.module.scss";

// API
import useFetch from "../../../Hooks/useFetch";

function NewsHighlightsBody(props) {
  const { newsBody } = styles;

  const [isLoading, data] = useFetch("/news");

  return (
    <div className={`${newsBody} container-layout`}>
      {/* <p>
        Reprehenderit Lorem nulla in est sit cillum fugiat voluptate velit ex
        consectetur laborum est. Dolor quis amet irure laborum in. Est aliquip
        sint exercitation excepteur duis ipsum sit nulla nostrud dolor minim
        nostrud sunt. Mollit consequat officia aute excepteur pariatur do ipsum
        ut aliqua aute laboris cillum aliqua exercitation. Consequat et labore
        in ad esse deserunt minim excepteur.
      </p> */}
      <div dangerouslySetInnerHTML={{ __html: data[0].desc }}></div>
    </div>
  );
}

export default NewsHighlightsBody;

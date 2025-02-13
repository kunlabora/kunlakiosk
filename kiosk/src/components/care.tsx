import { type FunctionComponent, useEffect, useState } from "react";
import { markdownToHtml, parseEmojis } from "../util/text.ts";

export const Care: FunctionComponent = () => {
  const [careUpdateHtml, setCareUpdateHtml] = useState<string>();

  useEffect(() => {
    fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/care`)
      .then((res) => res.json())
      .then((json) =>
        setCareUpdateHtml(
          parseEmojis(
            markdownToHtml(
              json.care.text.split("\n").slice(1, 8).join("\n\n") + " ",
            ),
          ),
        ),
      );
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold mb-2">Care update</h1>
      <div className="border border-amber-50 mb-2"></div>
      {careUpdateHtml ? (
        <article dangerouslySetInnerHTML={{ __html: careUpdateHtml }}></article>
      ) : (
        <article>🤷 No care updates</article>
      )}
    </>
  );
};

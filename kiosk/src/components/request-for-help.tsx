import { type FunctionComponent, useEffect, useState } from "react";

export const RequestForHelp: FunctionComponent = () => {
  const [messages, setMessages] = useState<{ text: string; user: string }[]>(
    [],
  );

  useEffect(() => {
    fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/help`)
      .then((res) => res.json())
      .then((json) =>
        setMessages(
          json.messages.length > 0
            ? json.messages
            : ["Niemand heeft hulp nodig 🙌"],
        ),
      );
  }, []);

  return messages.map(({ text, user }) => (
    <div className="flex items-start gap-2.5">
      <img
        className="w-8 h-8 rounded-full"
        src="https://ca.slack-edge.com/T0266FRGM-U015ZPLDZKQ-gf3696467c28-512"
        alt="Jese image"
      />
      <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {user}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {text}
        </p>
      </div>
    </div>
  ));
};

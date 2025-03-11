import { useEffect, useState } from "react";

export default function ScrollText({
  text,
  length = 20,
  delayMs = 300,
}: {
  text: string;
  length?: number;
  delayMs?: number;
}) {
  const [textFragment, setTextFragment] = useState(text);
  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    clearTimeout(timeoutId);
    setTextFragment(text);
  }, [text]);

  useEffect(() => {
    if (!text || text.length <= length) return;

    timeoutId =
      textFragment.length <= length
        ? setTimeout(() => setTextFragment(text), delayMs + 1000)
        : setTimeout(
            () => setTextFragment(textFragment.slice(1)),
            textFragment.length === text.length ? delayMs + 1000 : delayMs,
          );

    return () => clearTimeout(timeoutId);
  }, [textFragment, delayMs, length]);
  return textFragment;
}

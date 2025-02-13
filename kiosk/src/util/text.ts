import { Converter } from "showdown";
import { checkText } from "smile2emoji";

export function markdownToHtml(text: string): string {
  return new Converter().makeHtml(text);
}

export function parseEmojis(text: string): string {
  return checkText(text);
}

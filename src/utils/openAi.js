import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";
// const OPENAI_KEY=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
const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});
export default openai;

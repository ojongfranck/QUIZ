import { createContext } from "react";
import { TAcceptedLanguage, TQuestions } from "../constants";
import { TAddPayload } from "@/components/providers/questions";

interface StoreContext {
  questions: TQuestions;
  addQuestion: ({}: TAddPayload) => void;
  deleteQuestion: (id: string, language: TAcceptedLanguage) => void;
  deleteAll:()=>void
}
export default createContext<StoreContext>({
  questions: { English: [], French: [] },
  addQuestion: () => {},
  deleteQuestion: () => {},
  deleteAll:() => {},
});

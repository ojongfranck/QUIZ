import { DefaultTheme } from "@react-navigation/native";

export const COLORS = {
  primary: DefaultTheme.colors.primary,
} as const;

export type TAnswers = "A" | "B" | "C" | "D";

export interface TOption<T> {
  label: T;
  option: string;
}
export interface TQuestion {
  id?: string;
  question: string;
  options: [TOption<"A">, TOption<"B">, TOption<"C">, TOption<"D">];
  answer: TAnswers;
  tense?: string;
}


export type TAcceptedLanguage = "English" | "French";
export interface TQuestions {
  English: TQuestion[];
  French: TQuestion[];
}
export const QUESTIONS = {
  English: [
    {
      question: "She __TENCE__ a letter everyday",
      tense: "write",
      options: [
        {
          label: "A",
          option: "write",
        },
        {
          label: "B",
          option: "wrote",
        },
        {
          label: "C",
          option: "wrote",
        },
        {
          label: "D",
          option: "write",
        },
      ],
      answer: "A",
    },
    {
      question: "She __TENCE__ a letter everyday",
      tense: "write",
      options: [
        {
          label: "A",
          option: "write",
        },
        {
          label: "B",
          option: "is writing",
        },
        {
          label: "C",
          option: "wrote",
        },
        {
          label: "D",
          option: "was writing",
        },
      ],
      answer: "C",
    },
  ],
  French: [
    {
      question: "C'est comment __TENCE__",
      tense: "write",
      options: [
        {
          label: "A",
          option: "write",
        },
        {
          label: "B",
          option: "is writing",
        },
        {
          label: "C",
          option: "wrote",
        },
        {
          label: "D",
          option: "was writing",
        },
      ],
      answer: "C",
    },
  ],
} satisfies TQuestions;

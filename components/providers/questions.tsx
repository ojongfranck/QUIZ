import { useStore } from "@/hooks";
import { TAcceptedLanguage, TQuestion, TQuestions } from "@/utils/constants";
import StoreContext from "@/utils/contexts/store-context";
import { PropsWithChildren, useReducer } from "react";

enum ACTIONS {
  ADD,
  CLEAR,
  UPDATE,
  DELETE,
  DELETEAll,
}

export interface TAddPayload extends TQuestion {
  language: TAcceptedLanguage;
}
type StoreReducerAction =
  | {
      type: ACTIONS.CLEAR;
      payload?: null;
    }
  | {
      type: ACTIONS.DELETE;
      payload: { id: string; language: TAcceptedLanguage };
    }
  | {
      type: ACTIONS.ADD | ACTIONS.UPDATE;
      payload: TAddPayload;
    };

const storeReducer = (
  state: TQuestions[],
  action: StoreReducerAction
): TQuestions[] => {
  const { type, payload } = action;

  switch (type) {
    // case ACTIONS.ADD: {
    //   console.log(payload);

    //   return [{ English: state[0].English, French: state[0].French }];
    // }
    default:
      return state;
  }
};
export default ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(storeReducer, []);

  const { addStore } = useStore();

  const addQuestion = (data: TAddPayload) => {
    // addStore<TQuestion>("QESTION-TEST", data);

    console.log("Add item here...")
    // dispatch({
    //   type: ACTIONS.ADD,
    //   payload: {
    //     id: Math.floor(Math.random() * 1_000_000).toString(),
    //     ...data,
    //   },
    // });
  };

  const deleteQuestion = (id: string, language: TAcceptedLanguage) => {
    dispatch({ type: ACTIONS.DELETE, payload: { id, language } });
  };

  return (
    <StoreContext.Provider
      value={{
        questions: state[0],
        addQuestion,
        deleteQuestion,
        deleteAll: () => dispatch({ type: ACTIONS.CLEAR }),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

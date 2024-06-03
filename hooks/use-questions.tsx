import storeContext from "@/utils/contexts/store-context";
import { useContext } from "react";

export default () => {
  const useStore = useContext(storeContext);
  if (!useStore)
    throw new Error(
      "useQuestions hook must be called inside QuestionsProvider"
    );
  return useStore;
};

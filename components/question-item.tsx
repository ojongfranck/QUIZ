import { useHaptics, useQuestions } from "@/hooks";
import { cn } from "@/utils";
import {
  TAcceptedLanguage,
  TAnswers,
  TOption,
  TQuestion,
} from "@/utils/constants";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type QuestionItemProps = TQuestion &
  TouchableOpacityProps & { i: number; language: TAcceptedLanguage };

export default ({
  language,
  question,
  answer,
  options,
  tense,
  i,
  ...props
}: QuestionItemProps) => {
  const [hasSelectAnswer, setHasSelectAnswer] = useState(false);

  const haptics = useHaptics();

  interface TOnPress {
    e: GestureResponderEvent;
    selectedOption: TOption<TAnswers>["label"];
  }

  const { addQuestion } = useQuestions();
  const handlePress = ({ e, selectedOption }: TOnPress) => {
    console.log(`Selected : ${selectedOption} ----- Answer : ${answer}`);
    addQuestion({ answer, language, options, question, tense });
    haptics.selection();
    props.onPress?.(e);
  };
  const numbering = i + 1;
  return (
    <TouchableOpacity
      disabled={hasSelectAnswer}
      onPress={() => router.navigate(`/questions/${i}?language=${language}`)}
      {...props}
    >
      <View className="flex-row gap-x-2">
        <Text className="text-lg font-bold dark:text-background">
          {numbering}&#41;
        </Text>
        <Text className="text-lg font-semibold dark:text-background">
          {createQuestion(question, tense)}
        </Text>
      </View>
      <FlatList
        data={options}
        numColumns={2}
        keyExtractor={({}, index) => index.toString()}
        className="mt-3.5"
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ItemSeparatorComponent={() => <View className="h-2" />}
        renderItem={({ item, index }) => (
          <AnswerItem
            key={index.toString()}
            {...item}
            answer={answer}
            onPressIn={() => setHasSelectAnswer(true)}
            onPress={(e) => {
              handlePress({ e, selectedOption: item.label });
            }}
            disabled={hasSelectAnswer}
            className={cn(
              hasSelectAnswer &&
                (item.label === answer ? "bg-green-600" : "bg-red-600")
            )}
          />
        )}
      />
    </TouchableOpacity>
  );
};

type AnswerItemProps = TOption<TAnswers> &
  TouchableOpacityProps & { answer: TAnswers };
const AnswerItem = ({
  label,
  option,
  answer,
  className,
  ...props
}: AnswerItemProps) => {
  return (
    <TouchableOpacity
      className={cn(
        "flex-row items-center w-1/2 p-2 disabled:opacity-25 rounded shadow bg-background dark:bg-muted-dark shadow-[#0001]  dark:shadow-none gap-x-2",
        className
        // label === answer ?"bg-green-600":"bg-red-600"
      )}
      {...props}
    >
      <Text
        className={cn(
          "text-base font-bold"
          //  isCorrect && "text-background"
        )}
      >
        {label}&#41;
      </Text>
      <Text
        className={cn(
          "text-base dark:text-background"
          // isCorrect && "text-background"
        )}
      >
        {option}
      </Text>
    </TouchableOpacity>
  );
};

/**
 *
 * @param question Qestion to display
 * @param tence Question tence
 * @returns Formates question with tence
 */
const createQuestion = (question: string, tense?: string) => {
  if (!(tense || question.includes("__TENCE__"))) return question;
  const newQuestion = question.replace(/__TENCE__/g, ` ____ (${tense})`);

  return newQuestion;
};

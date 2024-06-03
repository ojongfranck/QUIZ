import { useHaptics } from "@/hooks/";
import { PropsWithChildren } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { cn } from "@/utils";

type BtnProps = TouchableOpacityProps &
  PropsWithChildren & {
    txt?: string;
  };
export default ({ txt, children, ...props }: BtnProps) => {
  const haptics = useHaptics();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className={cn(
        "inline-flex h-14 px-4 py-2 flex-row items-center overflow-hidden relative bg-primary justify-center rounded-xl",
        props.disabled && "opacity-50"
      )}
      {...props}
      onPress={(e) => {
        haptics.heavy();
        props.onPress?.(e);
      }}
      onLongPress={(e) => {
        haptics.heavy();
        props.onLongPress?.(e);
      }}
    >
      {txt ? (
        <Text
          numberOfLines={1}
          className="text-lg font-semibold capitalize text-background"
        >
          {txt}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

import {
    notificationAsync,
    impactAsync,
    selectionAsync,
    ImpactFeedbackStyle,
    NotificationFeedbackType,
  } from "expo-haptics";
  import { useCallback, useMemo } from "react";
  
  const useHaptics = () => {
    const createHapticHandler = useCallback(
      (type: ImpactFeedbackStyle) => () => impactAsync(type),
      []
    );
  
    const createNotificationFeedback = useCallback(
      (type: NotificationFeedbackType) => () => notificationAsync(type),
      []
    );
  
    const hapticHandlers = useMemo(
      () => ({
        light: createHapticHandler(ImpactFeedbackStyle.Light),
        medium: createHapticHandler(ImpactFeedbackStyle.Medium),
        heavy: createHapticHandler(ImpactFeedbackStyle.Heavy),
        selection: selectionAsync,
        success: createNotificationFeedback(NotificationFeedbackType.Success),
        warning: createNotificationFeedback(NotificationFeedbackType.Warning),
        error: createNotificationFeedback(NotificationFeedbackType.Error),
      }),
      [createHapticHandler, createNotificationFeedback]
    );
    return hapticHandlers;
  };
  
  export default useHaptics;
  
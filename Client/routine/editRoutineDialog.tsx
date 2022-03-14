import React, { useState } from "react";
import {
  Button,
  Dialog,
  Portal,
  Subheading,
  TextInput,
  useTheme,
} from "react-native-paper";

type editRoutineModalProps = {
  visible: boolean;
  hideDialog: () => void;
  workoutId: number;
  exerciseGroupId: number;
  exerciseSetId: number;
};

const EditRoutineDialog = ({
  visible,
  hideDialog,
  workoutId,
  exerciseGroupId,
  exerciseSetId,

}: editRoutineModalProps) => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const { colors } = useTheme();

  const handleCancelButton = () => {
    // Clear inputs.
    setReps("");
    setWeight("");

    hideDialog();
  }

  const handleDoneButton = () => {
    
  }

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={{
          elevation: 5,
          borderRadius: 10
        }}
      >
        <Dialog.Title>Modify Set</Dialog.Title>
        <Dialog.Content>
          <Subheading>Weight</Subheading>
          <TextInput
            value={weight}
            onChangeText={(weight) => setWeight(weight)}
            style={{ borderColor: colors.primary}}
            keyboardType={'numeric'}
          />
          <Subheading>Reps</Subheading>
          <TextInput
            value={reps}
            onChangeText={(weight) => setReps(weight)}
            style={{ borderColor: colors.primary}}
            keyboardType={'numeric'}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleCancelButton}>Cancel</Button>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default EditRoutineDialog;

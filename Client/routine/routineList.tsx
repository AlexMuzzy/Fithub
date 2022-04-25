import React from "react";
import { View, StyleSheet, LayoutAnimation } from "react-native";
import {
  Card,
  DataTable,
  IconButton,
  List,
  Title,
  useTheme,
  Text,
} from "react-native-paper";
import { ExerciseGroup, ExerciseSet, Workout } from "./redux/workout";
import EditRoutinedialog from "./editRoutineDialog";

const RoutineList = (workout: Workout) => {
  const { colors } = useTheme();
  const workoutId = workout.workoutId;

  return (
    <View>
      <Card style={styles.workoutCard}>
        <Card.Content>
          <List.Section>
            <List.Subheader>
              <Title style={{ color: colors.primary }}>{workout.name}</Title>
            </List.Subheader>
            {workout.groups.map((exerciseGroup: ExerciseGroup) => (
              <ExerciseGroupList
                key={exerciseGroup.groupId}
                {...{ exerciseGroup, workoutId }}
              />
            ))}
          </List.Section>
        </Card.Content>
      </Card>
    </View>
  );
};

type ExerciseGroupList = {
  exerciseGroup: ExerciseGroup;
  workoutId: number;
};

const ExerciseGroupList = ({ exerciseGroup, workoutId }: ExerciseGroupList) => {
  // Hook to control list accordion state.
  const [expanded, setExpanded] = React.useState(false);
  const { colors } = useTheme();

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <List.Accordion
      title={exerciseGroup.name}
      titleStyle={styles.exerciseGroupTitle}
      style={{ backgroundColor: colors.surface, elevation: 5 }}
      expanded={expanded}
      onPress={handlePress}
    >
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Set</DataTable.Title>
          <DataTable.Title numeric>Weight</DataTable.Title>
          <DataTable.Title numeric>Reps</DataTable.Title>
          <DataTable.Title numeric>Edit</DataTable.Title>
        </DataTable.Header>

        {exerciseGroup.sets.map((exerciseSet: ExerciseSet, index: number) => {
          const exerciseGroupId = exerciseGroup.groupId;
          const setNumber = index + 1;
          const setListObject = {
            setNumber,
            exerciseSet,
            exerciseGroupId,
            workoutId,
          };
          return <ExerciseSetList key={exerciseSet.setId} {...setListObject} />;
        })}
      </DataTable>
    </List.Accordion>
  );
};

type ExerciseSetList = {
  setNumber: number;
  exerciseSet: ExerciseSet;
  exerciseGroupId: number;
  workoutId: number;
};

const ExerciseSetList = ({
  setNumber,
  exerciseSet,
  exerciseGroupId,
  workoutId,
}: ExerciseSetList) => {
  const { colors } = useTheme();

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  // Obtain ID for the exercise set.
  const exerciseSetId = exerciseSet.setId;

  return (
    <>
      <EditRoutinedialog
        {...{
          visible,
          hideDialog,
          workoutId,
          exerciseGroupId,
          exerciseSetId,
        }}
      />

      <DataTable.Row>
        <DataTable.Cell>
          <Text style={{ color: colors.primary }}>{`Set ${setNumber}`}</Text>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <Text>{`${exerciseSet.weight}kg`}</Text>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <Text>{`${exerciseSet.reps} Reps`}</Text>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <IconButton icon="dots-vertical" size={20} onPress={showDialog} />
        </DataTable.Cell>
      </DataTable.Row>
    </>
  );
};

const styles = StyleSheet.create({
  workoutCard: {
    minWidth: "90%",
    margin: 15,
    elevation: 6,
  },

  exerciseGroupTitle: {
    textAlign: "center",
  },
});

export default RoutineList;

export type ExerciseSet = {
    setId: number
    weight: number
    reps: number
    groupId: number
}

export type ExerciseGroup = {
    groupId: number
    name: string
    workoutId: number
    sets: ExerciseSet[]
}

export type Workout = {
    workoutId: number
    name: string
    groups: ExerciseGroup[];
}

export type EditWorkout = {
    workoutId: number;
    exerciseGroupId: number;
    exerciseSetId: number;
    reps: number;
    weight: number;
}
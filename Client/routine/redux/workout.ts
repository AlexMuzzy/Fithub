export type ExerciseSet = {
    id: number
    reps: number
    weight: number
}

export type ExerciseGroup = {
    id: number
    name: string
    sets: ExerciseSet[]
}

export type Workout = {
    id: number
    exercises: ExerciseGroup[];
}

export type EditWorkout = {
    workoutId: number;
    exerciseGroupId: number;
    exerciseSetId: number;
    reps: number;
    weight: number;
}
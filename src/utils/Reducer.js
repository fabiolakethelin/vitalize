export const initial = {
    bodyPartList: [],
    exercises: [],
    searchedExercises: [],
    recipes: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Set_BodyPartList':
            return {
                ...state,
                bodyPartList: action.bodyPartList,
            };
        case 'Set_Exercises':
            return {
                ...state,
                exercises: action.exercises,
            };
        case 'Set_SearchedExercises':
        return {
            ...state,
            searchedExercises: action.searchedExercises,
        };
        case 'Set_Recipes':
        return {
            ...state,
            recipes: action.recipes,
        };
        default:
            return state;
    }
};

export default reducer;
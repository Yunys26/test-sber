// ActionCreators
// Создание экщенов то есть дествий для смены состояния 
class ActionCreators {
    action_1 (value) {
        return {
            type: ACTION_1,
            action: value,
        }
    }
    action_2 (value) {
        return {
            type: ACTION_2,
            action: value,
        }
    }
    action_3 (value) {
        return {
            type: ACTION_3,
            action: value,
        }
    }
    action_4 (value) {
        return {
            type: ACTION_4,
            action: value,
        }
    }
}

export default new ActionCreators()
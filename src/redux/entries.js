import { v4 } from "uuid"


const ENTRY_CREATED = 'ENTRY_CREATED'
export const createEntry = (title, image) => ({
    type: ENTRY_CREATED,
    id: v4(), title, image, ratings: []
})

const ENTRY_RATED = 'ENTRY_RATED'
export const rateEntry = (id, rating) => ({
    type: ENTRY_RATED, id, rating
})



export const entries = (state = {}, { type, ...payload }) => {
    switch (type) {
        case ENTRY_CREATED:
            return {
                ...state,
                [payload.id]: payload
            }
        case ENTRY_RATED:
            return {
                ...state,
                [payload.id]: entry(state[payload.id], { type, ...payload })
            }

        default:
            return state
    }
}


export const entry = (state = {}, { type, ...payload }) => {
    switch (type) {
        case ENTRY_RATED:
            return {
                ...state,
                ratings: [...state.ratings, payload.rating]
            }

        default:
            return state;
    }
}

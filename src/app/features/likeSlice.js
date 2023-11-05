import { createSlice } from '@reduxjs/toolkit'

export const likeSlice = createSlice({
	name: 'like',
	initialState: {},
	reducers: {
		handleLike: (state, actions) => {
			if (state[actions.payload.id]) {
				delete state[actions.payload.id]
			} else {
				state[actions.payload.id] = actions.payload
			}
		},
	},
})

export const { handleLike } = likeSlice.actions

export default likeSlice.reducer

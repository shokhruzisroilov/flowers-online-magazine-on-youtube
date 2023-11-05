import { configureStore } from '@reduxjs/toolkit'
import likeReduser from './features/likeSlice'

export default configureStore({
	reducer: {
		like: likeReduser,
	},
})

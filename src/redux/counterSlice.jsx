import { createSlice } from '@reduxjs/toolkit'

function createLocalStorage(items, totalCount) {
    window.localStorage.setItem('sliceitems', JSON.stringify(items))
    window.localStorage.setItem('totalCount', JSON.stringify(totalCount))
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        items: [],
        totalCount: 0,
    },
    reducers: {
        add: (state, action) => {
            let checkItem = state.items.findIndex((item) => { return item.id === action.payload.id })
            let exitItem = state.items[checkItem]

            if (exitItem) {
                state.items[checkItem].count += action.payload.count
                state.totalCount = state.totalCount + action.payload.count

                createLocalStorage(state.items, state.totalCount)
            } else {
                state.items.push(action.payload)
                state.totalCount = state.totalCount + action.payload.count

                createLocalStorage(state.items, state.totalCount)
            }
            createLocalStorage(state.items, state.totalCount)
        },
        remove: (state, action) => {
            let checkItem = state.items.findIndex((item) => { return item.id === action.payload.id })
            let exitItem = state.items[checkItem]
            if (exitItem) {
                if (action.payload.count == exitItem.count) {
                    state.items.splice(checkItem, 1)
                    state.totalCount = state.totalCount - action.payload.count
                    createLocalStorage(state.items, state.totalCount)
                } else if (action.payload.count < exitItem.count) {
                    exitItem.count = exitItem.count - action.payload.count
                    state.items.splice(checkItem, 1, exitItem)
                    state.totalCount = state.totalCount - action.payload.count
                    createLocalStorage(state.items, state.totalCount)

                } else if (action.payload.count > exitItem.count) {
                    document.getElementById('errorText').innerHTML = `sorry maximum count = ${exitItem.count}`
                    document.getElementById('errorCount').style.width = '100%'
                    return;
                }
            } else {
                document.getElementById('errorText').innerHTML = `sorry, This item not founded`
                document.getElementById('errorCount').style.width = '100%'
                return
            }
            createLocalStorage(state.items, state.totalCount)
        },
        decreseItem: (state, action) => {
            action.payload.count - 1
            let index = state.items.findIndex(item => item.id == action.payload.id)
            state.items[index].count -= 1
            state.totalCount -= 1
            createLocalStorage(state.items, state.totalCount)
        },
        storageSlice: (state, action) => {
            state.items = action.payload.items
            state.totalCount = action.payload.totalCount
        },
        removeAllItems: (state) => {
            state.items = [];
            state.totalCount = 0;
            createLocalStorage(state.items, state.totalCount)
        }
    },
})

export const { add, remove, decreseItem, storageSlice, removeAllItems } = counterSlice.actions

export default counterSlice.reducer
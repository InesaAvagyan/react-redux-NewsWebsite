import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData = createAsyncThunk(
    'data/fetchData',
    async function(search){
        const API_KEY = '277a7652606248d0bbe7440be08cdce5'

        const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2022-07-01&sortBy=publishedAt&language=en&apiKey=${API_KEY}`)

        const initialData = await response.data

        return initialData.articles
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        errors: false,
        currentNews: {}
    },
    reducers:{

    },

    extraReducers:{
        [fetchData.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                loading: false,
                errors: false,
                currentNews: payload
            }
        }
    }
})

export const selectData = (state) => state.data

export const dataReducer = dataSlice.reducer
import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fatchPosts=createAsyncThunk("posts/patchPosts",async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
})
const postslice=createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        posts:[],
        error:null
    },
    extraReducers:(builder)=>{
        // builder.addCase(fatchPosts.panding,(state)=>{
        //     state.isLoading=true,
        // })
        builder.addCase(fatchPosts.panding,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fatchPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.posts=action.payload;
            state.error=null;
        })
        builder.addCase(fatchPosts.rejected,(state,action)=>{
            state.isLoading=false;
            state.posts=[];
            state.error=action.error.message;


        })

    }
})

export default postslice.reducer;
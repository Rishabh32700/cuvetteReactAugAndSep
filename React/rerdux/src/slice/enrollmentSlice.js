import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    enrollments : []
}

const enrollmentSlice = createSlice({
    name: "enrollment",
    initialState: initialState,
    reducers :{
        enroll : (state, action) =>{

            const id = action.payload
            console.log(id);
            
            if(state.enrollments.includes(id)){
                console.log(state.enrollments);
                
            }else{
                state.enrollments.push(id)
                console.log(state.enrollments);
                
            }
            
        },
        deleteEnrollments: (state)=>{
            state.enrollments = []
        }
    }
})

export const { enroll,  deleteEnrollments } = enrollmentSlice.actions
export default enrollmentSlice.reducer
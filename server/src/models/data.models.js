import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema(
    {
        end_year:{
            type: Number,
        },
        intensity:{
            type: Number,
        },
        sector:{
            type: String,
        },
        topic:{
            type: String,
        },
        insight:{
            type: String,
        },
        url:{
            type: String,
        },
        region:{
            type: String,
        },
        start_year:{
            type: Number,
        },
        impact:{
            type: Number,
        },
        added:{
            type: String,
        },
        published:{
            type: String,
        },
        country:{
            type: String,
        },
        relevance:{
            type: Number,
        },
        pestle:{
            type: String,
        },
        source:{
            type: String,
        },
        title:{
            type: String,
        },
        likelihood:{
            type: Number,
        },
    }
);

export const Data = mongoose.model("Data", dataSchema);

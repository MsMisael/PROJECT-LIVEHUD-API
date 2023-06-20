import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IGrid {
    ownerId: string
    gridName: string
    xGap: number
    yGap: number
    columns: string[]
    rows: string[]
    areas: string[][]

}

// 2. Create a Schema corresponding to the document interface.
const gridSchema = new Schema<IGrid>({
    ownerId: { type: String, required: true },
    gridName: { type: String, required: true },
    xGap: { type: Number, required: true },
    yGap: { type: Number, required: true },
    columns: { type: [String], required: true },
    rows: { type: [String], required: true },
    areas: { type: [[String]], required: true },
});



// 3. Create a Model.
const Grid = model<IGrid>('Grid', gridSchema);




export default Grid
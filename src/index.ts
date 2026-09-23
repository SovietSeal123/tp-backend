import { Schema, connect } from "mongoose"
process.loadEnvFile()


const URI_DB = process.env.URI_DB as string

const connectDb = async (URI: string) => {
    try {
        await connect(URI)
        console.log(`conectado a MongoDb`)
    } catch(e){
        console.log(`Error al conectar a MongoDb`)
    }
}

interface IMovie {
    title: string
    director: string
    genre: string
    year: number
    format: string
    stock: number
    available: boolean
}

const movieSchema = new Schema<IMovie>({
    title: String,
    director: String,
    genre: String,
    year: Number,
    format: String,
    stock: Number,
    available: Boolean
})

connectDb(URI_DB)
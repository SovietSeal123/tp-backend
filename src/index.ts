import { Schema, model, connect } from "mongoose"
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
    price: number
    stock: number
    available: boolean
}

const movieSchema = new Schema<IMovie>({
    title: String,
    director: String,
    genre: String,
    year: Number,
    format: String,
    price: Number,
    stock: Number,
    available: Boolean
})

const Movie = model("Movie", movieSchema)

const createMovie = async (title: string, director: string, genre: string, year: number, format: string, price: number, stock: number, available: boolean) => {
   const newMovie = {title, director, genre, year, format, price, stock, available}
   return await Movie.create(newMovie)
}

const readMovie = async () => {
return await Movie.find()
}

const readMovieById = async (id: string) => {
    return await Movie.findById(id)
}

const updateMovie = async (id: string, data: IMovie) =>  {
   return await Movie.findByIdAndUpdate(id, data)
}

const deleteMovie = async (id: string) =>  {
   return await Movie.findByIdAndDelete(id)
}



connectDb(URI_DB)
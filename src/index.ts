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
    console.log(URI)
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

const args = process.argv.splice(2)
const action = args[0]

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


switch (action) {
    case "read":
        console.log(await readMovie())
        process.exit(1)
    
    case "find":
    const id = args[1]
    if (id === undefined) {
        console.log("Debes proporcionar un ID")
        process.exit(1)
    }
    console.log(await readMovieById(id))
    process.exit(1)

    case "create":
    const title = args[1]
    const director = args[2]
    const genre = args[3]
    const year = Number(args[4])
    const format = args[5]
    const price = Number(args[6])
    const stock = Number(args[7])
    const available = args[8] === "true"

    if (title === undefined || director === undefined || genre === undefined || args[4] === undefined || format === undefined || args[6] === undefined || args[7] === undefined || args[8] === undefined) {
        console.log("Faltan datos")
        process.exit(1)
    }

    console.log(await createMovie(title, director, genre, year, format, price, stock, available))
    process.exit(1)

    case "update":
    const idUpdate = args[1]
    const titleUpdate = args[2]
    const directorUpdate = args[3]
    const genreUpdate = args[4]
    const yearUpdate = Number(args[5])
    const formatUpdate = args[6]
    const priceUpdate = Number(args[7])
    const stockUpdate = Number(args[8])
    const availableUpdate = args[9] === "true"

    if (idUpdate === undefined || titleUpdate === undefined || directorUpdate === undefined || genreUpdate === undefined || args[5] === undefined || formatUpdate === undefined || args[7] === undefined || args[8] === undefined || args[9] === undefined) {
        console.log("Faltan datos")
        process.exit(1)
    }

    const data: IMovie = {
        title: titleUpdate,
        director: directorUpdate,
        genre: genreUpdate,
        year: yearUpdate,
        format: formatUpdate,
        price: priceUpdate,
        stock: stockUpdate,
        available: availableUpdate
    }

    console.log(await updateMovie(idUpdate, data))
    process.exit(1)

    case "delete":
    const idDelete = args[1]

    if (idDelete === undefined) {
        console.log("Debes proporcionar un ID")
        process.exit(1)
    }

    console.log(await deleteMovie(idDelete))
    process.exit(1)
    
    default:
        console.log(`
            Comandos disponibles:
            read = obtener todas las películas
            find id = obtener una película por ID
            create = crear una película
            update id = actualizar una película
            delete id = eliminar una película
        `)
}
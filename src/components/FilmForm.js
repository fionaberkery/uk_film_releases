import React, {useState} from "react"

const FilmForm = ({onFilmSubmit}) => {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')


    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const nameToSubmit = name.trim()
        const urlToSubmit = url.trim()
        if ( !nameToSubmit || !urlToSubmit) {
            return
        }
        onFilmSubmit({name: nameToSubmit, url: urlToSubmit})
        setName("")
        setUrl("")
    }


    return (

        <form onSubmit={handleFormSubmit} > 

            <input
                type="text"
                placeholder="Film name"
                value={name}
                onChange={handleNameChange}
            />
            <br></br>
            <input
                type="text"
                placeholder="Link to webpage"
                value={url}
                onChange={handleUrlChange}
            />
            <br></br>
            <br></br>
            <input
                id="submit-button"
                type="submit"
                value="Post"
            />

        </form>
    )
}

    export default FilmForm

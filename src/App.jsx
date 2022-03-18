import React, { useState } from "react";
import Chirps from "./components/Chirps";
import Header from "./components/Header";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";


const App = () => {
    const [chirps, setChirps] = useState([
        {
            id: uuidv4(),
            username: "Santita",
            message: "Hello, how are you",
            posted: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        },
        {
            id: uuidv4(),
            username: "Tristan",
            message: "What's up",
            posted: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

        },
        {
            id: uuidv4(),
            username: "James",
            message: "Hi!",
            posted: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

        }
    ])

    const [newMessages, setNewMessages] = useState('');
    const [username, setUsername] = useState('');

    const handleMessageChange = (e) => {
        setNewMessages(e.target.value);
    }

    const handleInputChange = e => {
        setUsername(e.target.value);
    }

    const handleClickButton = (e) => {
        e.preventDefault();

        const newChirp = {
            id: uuidv4(),
            username: username,
            message: newMessages,
            posted: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

        };

        setChirps([...chirps, newChirp]);
        setNewMessages('');
        setUsername('');


        console.log(e);
    }


    return (
        <>
            <Header title='Chirper' />
            
            <form className="border border-dark col-md-4 p-4 m-3" onSubmit={handleClickButton}>
                <input className="m-3" value={username} onChange={handleInputChange} />
                <div className="form-group text-center">
                    <textarea
                        className=" form-control form-control-lg p-3 "
                        rows='3'
                        name="newMessage"
                        value={newMessages}
                        onChange={handleMessageChange}
                        placeholder="Say Something" >
                    </textarea>
                </div>

                <div className="form-group text-center">
                    <button>Post Chirp</button>
                </div>

            </form>


            {chirps.map(chirp => (
                <>
                    <Chirps key={chirp.id} username={chirp.username} message={chirp.message} posted={chirp.posted} />
                </>
            ))}

        </>
    )
}

export default App;
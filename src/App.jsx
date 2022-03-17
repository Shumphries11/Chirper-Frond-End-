import React, { useState } from "react";
import Chirps from "./components/Chirps";

const App = () => {
    const [newMessages, setNewMessages] = useState('');
    const [post, setPost] = useState([]);

    const handleMessageChange = (e) => {
        setNewMessages(e.target.value);
    }

    const handleClickButton = (e) => {
        e.preventDefault();

        const data = newMessages;

        if (newMessages) {
            setPost((msg) => [...msg, data]);
            setNewMessages('');
        }


        console.log(e);
    }
    return (
        <div>

            <form className="border border-dark col-sm-4 p-4 m-3 bg-color" onSubmit={handleClickButton}>

                <div className="form-group">
                     <textarea
                     className="p-3"
                     name="newMessage" value={newMessages} onChange={handleMessageChange} placeholder="Say Something" >
                </textarea> 
                </div>
               
                <div className="form-group d-flex justify-content-center">
                    <button>Post Chirp</button>
                </div>

            </form>


            <h1 className="border border-dark col-md-8 p-3 m-3"> <Chirps message='Hello' /></h1>
            <h1 className="border border-dark col-md-8 p-3 m-3"> <Chirps message='Good Morning' /></h1>
            <h1 className="border border-dark col-md-8 p-3 m-3"> <Chirps message='Hru?' /></h1>
            {
                post.map(text => {
                    return <h1 className="border border-dark col-md-8 p-3 m-3">{text}</h1>
                })
            }


            





        </div>
    )
}

export default App;
import React from 'react';
import './App.css';
import benelli from './benelli-M4.jpeg';
import TR from './TR.webp'
import FireArms from './star';

function Profile (){
    const [endGame, setEndGame] = React.useState({
        fullname:"John Wick",
        isEndGame:false
    })
    let Guns = endGame.isEndGame? benelli : TR

    function endNight() {
        setEndGame(prevEndGame => {
            return {
                ...prevEndGame,
                isEndGame:!prevEndGame.isEndGame
            }
   
        })
    }
    return(
        <section>
        <p>{endGame.fullname}</p>
        <button onClick ={endNight} className="button">Ending</button>
        <p>Choices</p>
        <FireArms choice = {Guns}/>
        </section>
    )
}
export default Profile;
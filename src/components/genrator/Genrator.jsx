import React from 'react';
import './genrator.css';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const Genrator = () => {
    const Array1 =[ 'Pro', 'Alpha', 'Super', 'True','Great','Lethal','Powerful','Brute'];
    const Array2 =['Techies', 'Coders', 'Champs', 'Hackers', 'Phantoms','Force'];
    const genrateName =() =>{
        document.getElementById('teamName').innerHTML='';
        document.getElementById('teamName').classList.add('animatedText');
        setTimeout(function(){
            document.getElementById('teamName').classList.remove('animatedText');
            var randomNumber1 = Math.floor(Math.random()*Array1.length);
            var randomNumber2 = Math.floor(Math.random()*Array2.length);
            document.getElementById('teamName').innerHTML= Array1[randomNumber1]+ ' '+ Array2[randomNumber2];
            document.getElementsByClassName('genrateButton')[0].textContent = 'Genrate Again';
            return;
        },4000);
    }
  return (
    <>
    <div className='w-100 flex items-center justify-center cardConatiner'>
        <div className='md:w-4/5 lg:w-3/5 flex items-center justify-center p-5 flex-col card'>
            <div className="topLeftCircle"></div>
            <div className="topLeftSmallCircle"></div>
            <div className="hugeText">
                Your <span className='team'>Team</span> Needs a Perfect Name
            </div>
            <div className='genrateButton' onClick={()=>{genrateName()}}>
                Get your Team Name <ArrowRightAltRoundedIcon/>
            </div>

            <div className='teamNameContainer' id='teamName'>
                Team Name
            </div>
            <div className="bottomRightCircle"></div>
            <div className="bottomRightSmallCircle"></div>
            <div className="bottomRightSmallerCircle"></div>
        </div>
    </div>
    </>
  )
}

export default Genrator
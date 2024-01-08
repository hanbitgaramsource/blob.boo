import blob from './assets/blob.svg';
import './App.css';
import {useState} from "react";
import jQuery from 'jquery';

const App = () => {
    const [clickTimes, setClickTimes] = useState(0);
    const blobClickEvent = () => {
        setClickTimes(clickTimes+1);
        if(jQuery('.blobDiv').hasClass('on')){

        }else{
            jQuery('.blobDiv').addClass('on');
            setTimeout(()=>{
                jQuery('.blobDiv').removeClass('on');
            }, 200);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className={"blobDiv"} onClick={()=>{blobClickEvent()}}><img src={blob} className="Blob-Image" alt="blob" tabIndex={0} /></div>
                <p>
                    You clicked the blob {clickTimes} times!
                </p>
            </header>
        </div>
    );
}

export default App;

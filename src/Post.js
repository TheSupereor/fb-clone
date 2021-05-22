import NLW from './resources/NLW.jpg';
import {AiFillVideoCamera, AiOutlineFileImage, AiFillMeh} from "react-icons/ai";

export default function(){
    return(
        <div className="post">
            <div className="feedForm">
                <img src={NLW}/>
                <input type="text" placeholder="No que você está pensando?"/>
            </div>
        <div className="feedIcons">
          <div className="iconSingle live">
            <AiFillVideoCamera/>
            <span>Vídeo ao vivo</span>
          </div>
          <div className="iconSingle img">
            <AiOutlineFileImage/>
            <span>Foto/Vídeo</span>
          </div>
          <div className="iconSingle emoji">
            <AiFillMeh/>
            <span>Emoji</span>
          </div>
          
        </div>
      </div>
    )
}
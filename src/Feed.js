import NLW from './resources/NLW.jpg';

export default function(props){
    return(
        <div className="feedPosts">
            <div className="feedPostSingle">
                <div className="feedPost_Profile">
                    <img src={NLW}/>
                    <h3> {props.nome} <br/> <span>{props.horario}</span> </h3>
            </div>
          <div className="feedPost_Content">
            <p>{props.conteudo}</p>
            <img src={NLW}/>
          </div>
        </div>
      </div>
    )
}
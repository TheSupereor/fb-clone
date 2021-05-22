import './App.css';
import Header from './Header';
import Stories from './Stories';
import Post from './Post.js';
import Feed from './Feed.js';
import NLW from './resources/NLW.jpg';
import {useState, useEffect} from 'react';
import {db, functions} from './firebase.js'; 

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    //é chamado sempre na primeira vez que iniciar o projeto
    //onSnapshot atualiza de forma automatica quando alterar o objeto
    //nesse caso, os posts serão atualizados sempre que um novo post for feito
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(function(doc){
        return {info:doc.data()}
      }));
    })
  },[])

  return (
    <div className="App">
      
      <Header/>

      <div className="meio">
        
        <Stories/>

        <Post/>

        {
          posts.map(function(val){
            return(
              <Feed nome={val.info.nome} horario="4h" conteudo={val.info.conteudo}/>
            )
          })
        }
        
      </div>

    </div>
  );
}

export default App;

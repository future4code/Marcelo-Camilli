import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CarPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fvag4-1.fna.fbcdn.net/v/t1.6435-9/106019098_10207460193378622_3704419277066649795_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHwz4bapVeSALIQA8DEos5OAgKmG5UPvl8CAqYblQ--X6lejuBxAY9crESZM_6juiA&_nc_ohc=aDOgoA9SMmQAX_yIPIs&tn=dWoLzf_cB2G4oNHC&_nc_ht=scontent.fvag4-1.fna&oh=608cba2c8782ec8713a121fa2bd75c06&oe=61603552" 
          nome="Marcelo Camilli" 
          descricao="Oi, meu nome é Marcelo Camilli. Sou biólogo, professor e agora estudante de desenvolvimento web na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://toppng.com/uploads/preview/email-icon-vector-circle-11549825158ieiklzfl8g.png" 
          nome="Email:" 
          email=" marcelo.camilli91@gmail.com" 
        />
                <CardPequeno
          imagem="" 
          nome="Endereço" 
          email=" Rua Labenu" 
        />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao=" Estudante de desenvolvedores Web!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logo_Unesp.svg/3000px-Logo_Unesp.svg.png" 
          nome="UNESP Botucatu" 
          descricao="Doutorado em Produção Animal." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

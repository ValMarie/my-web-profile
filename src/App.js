import React, {useEffect} from 'react';
import MyApp from './m_profile/App';
import WebFont from "webfontloader"


const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Fredoka One', 'Press Start 2P']
      }
    });
   }, []);

  return (
    <div className= "" style= {{backgroundImage: 'url("../image/my_pics.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            }}>
    
      <MyApp/>
    </div>
  );
}

export default App;

import ClientOnly from "../components/ClientOnly";
import Owners from "../components/owners";

const OwnersInfo = ()=>{  
  return (        
    <div className='container'>
          <h1 className='title'>
              Gesti&oacute;n de Propietarios
          </h1>
          <div className='grid'>
            <ClientOnly>
              <Owners />
            </ClientOnly>            
          </div>
      </div>
  )
}

export default OwnersInfo;

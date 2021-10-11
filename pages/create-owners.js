import ClientOnly from "../components/ClientOnly";
import OwnersForm from "../components/owners-form";

const CreateOwners = ()=>{  
  return (        
    <div className='container'>
          <h1 className='title'>
              Crear Propietario
          </h1>
          <div className='grid'>
            <ClientOnly>
              <OwnersForm />
            </ClientOnly>            
          </div>
      </div>
  )
}

export default CreateOwners;

import { Table, Tag, Space } from 'antd';
import { useQuery, gql } from "@apollo/client";
import Link from 'next/link'

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tipo',
    dataIndex: 'ownerType',
    key: 'ownerType',
  },
  {
    title: 'Tipo Documento',
    dataIndex: 'documentType',
    key: 'documentType',
  },
  {
      title: 'Documento',
      dataIndex: 'document',
      key: 'document',
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address',
  },
  {
      title: 'Teléfono',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
  },
  {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
  }, 
  {
      title: 'Razón social',
      dataIndex: 'businessName',
      key: 'businessName',
  },
  {
    title: 'Acción',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Actualizar</a>
        <a>Borrar</a>
      </Space>
    ),
  },
];

const QUERY = gql`
  query Owners {
    getOwners {
      id             
      firstName      
      lastName      
      ownerType     
      documentType   
      document       
      address        
      phoneNumber    
      email         
      businessName  
    },

    getOwnerTypes {
      id             
      name
    },

    getDocumentTypes {
      id             
      name
    }
  }
`;

const Owners = ()=>{
  
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  const owners = data.getOwners.slice(0,4);
  const ownerTypes = data.getOwnerTypes.slice(0,4);
  const docTypes = data.getDocumentTypes.slice(0,4);

  const dataChanged = owners.map(owner => 
    ({
      key: owner.id,
      address: owner.address,
      businessName: owner.businessName,
      document: owner.document,
      documentType: docTypes.find(docType => docType.id === owner.documentType).name,
      email: owner.email,
      name: `${owner.firstName} ${owner.lastName}`,
      id: owner.id,
      lastName: owner.lastName,
      ownerType: ownerTypes.find(ownType => ownType.id === owner.ownerType).name,
      phoneNumber: owner.phoneNumber,
    })
  );

  return (
    <div>
      <Link href="/create-owners">
        <a className='card'>
          <Space size="middle">
            <h3><u>Crear Propietario</u></h3>
          </Space>
        </a>
      </Link>
      <Table columns={columns} dataSource={dataChanged} />
    </div>            
  )
}

export default Owners;

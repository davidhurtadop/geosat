import { Form, Input, Button, Select } from 'antd';
import { useQuery, useMutation, gql } from "@apollo/client";
import { useRouter } from 'next/router'

const {Option} = Select;
  
const MUTATION_QUERY = gql`
  mutation Owners($input: OwnerInput!) {
    createOwner(input: $input) {
      id             
      firstName      
      lastName        
    }    
  }
`;
const INFO_QUERY = gql`
  query GetInfo {
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

const OwnersForm = () => {
  const { data } = useQuery(INFO_QUERY);
  const [createOwner,{ datas, loading, error }] = useMutation(MUTATION_QUERY);
  const router = useRouter();

  let ownerTypes = [];
  let docTypes = [];
  
  const onFinish = (values) => {
    createOwner({variables: {input: values}});
    router.push('/owners-info');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (error){
    console.log(JSON.stringify(error, null, 2));
  }
  
  if (data){
    docTypes = data.getDocumentTypes.slice(0,4);
    ownerTypes = data.getOwnerTypes.slice(0,4);
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 14,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="horizontal"
    >
      <Form.Item
        label="Nombres"
        name="firstName"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Apellidos"
        name="lastName"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tipo Propietario"
        name="ownerType"
      >
        <Select placeholder="Seleccione el tipo de propietario">
        { ownerTypes.map(ownType => <Option key={ownType.id} value={ownType.id}> {ownType.name}</Option>)}; 
        </Select>
      </Form.Item>
           
      <Form.Item
        label="Tipo Documento"
        name="documentType"
        
      >
        <Select placeholder="Seleccione el tipo de documento">
        { docTypes.map(docType => <Option key={docType.id} value={docType.id}> {docType.name}</Option>)}; 
        </Select>
      </Form.Item>
      <Form.Item
        label="Documento"
        name="document"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Dirección"
        name="address"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Teléfono"
        name="phoneNumber"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Correo"
        name="email"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Razón Social"
        name="businessName"
        
      >
        <Input />
      </Form.Item>
            
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Crear
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OwnersForm;
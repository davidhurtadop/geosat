const { gql } = require('apollo-server-micro');
const { GraphQLUUID } = require('graphql');

const typeDefs = gql `
  scalar UUID
  scalar Date

  type BuildingType {
    id: UUID!
    name: String   
  }

  type OwnerType {
    id: UUID!
    name: String 
  }

  type LocationType {
    id: UUID!
    name: String   
  }

  type GroundType {
    id: UUID!
    name: String   
  }

  type DocumentType {
    id: UUID!
    name: String   
  }
  
  type Owner {
    id            : UUID! 
    firstName     : String! 
    lastName      : String!
    ownerType     : UUID 
    documentType  : UUID 
    document      : String 
    address       : String 
    phoneNumber   : String 
    email         : String
    businessName  : String
  }
    
  type Location {
    id: UUID!
    name: String
    locationType : UUID!
    fatherId : UUID
  }
    
  type Land {
    id                  : UUID! 
    predialNumber       : String 
    value               : Float 
    name                : String 
    departmentId        : UUID! 
    cityId              : UUID!
    ownerId             : UUID
    creationDate        : Date
    deleteDate          : Date
    status              : String        
  }

  type Ground {
    id                : UUID!    
    totalArea         : Float     
    value             : Float     
    groundType        : UUID!      
    isNearWaterSource : Boolean
    landId            : UUID     
    hasBuildings      : Boolean
    creationDate      : Date 
    deleteDate        : Date  
    status            : String    
  }
  
  type Building {
    id            : UUID!
    totalArea     : Float       
    floors        : Float       
    buildingType  : UUID!            
    address       : String        
    landId        : UUID!   
    creationDate  : Date    
    deleteDate    : Date    
    status        : String
  }

  input OwnerInput{
    firstName     : String! 
    lastName      : String!
    ownerType     : UUID! 
    documentType  : UUID! 
    document      : String 
    address       : String 
    phoneNumber   : String 
    email         : String
    businessName  : String
  }

  input LocationInput {
    name: String!
    locationType : UUID!
    fatherId : UUID
  }
    
  input LandInput {     
    predialNumber       : String! 
    value               : Float 
    name                : String 
    departmentId        : UUID! 
    cityId              : UUID!
    ownerId             : UUID
    creationDate        : Date
    deleteDate          : Date
    status              : String        
  }

  input GroundInput {
    totalArea         : Float     
    value             : Float     
    groundType        : UUID!      
    isNearWaterSource : Boolean
    landId            : UUID     
    hasBuildings      : Boolean
    creationDate      : Date 
    deleteDate        : Date  
    status            : String    
  }
  
  input BuildingInput {
    totalArea     : Float       
    floors        : Float       
    buildingType  : UUID!            
    address       : String        
    landId        : UUID!   
    creationDate  : Date    
    deleteDate    : Date    
    status        : String
  }

  input GeneralInput{
    id : UUID
  }

  input InsertInput{
    name   : String!  
  }

  type Query {
    getOwners: [Owner]
    getLocations: [Location]
    getLocationTypes: [LocationType]
    getLands: [Land]
    getGrounds: [Ground]
    getGroundTypes: [GroundType]
    getDocumentTypes: [DocumentType]
    getBuildings: [Building]
    getOwnerTypes: [OwnerType]
    getBuildingTypes: [BuildingType]
    
    getOwnerTypeById(input: GeneralInput!): OwnerType
    getBuildingTypeById(input: GeneralInput!): BuildingType
    getOwnerById(input: GeneralInput!): Owner
    getLocationById(input: GeneralInput!): Location
    getLocationTypeById(input: GeneralInput!): LocationType
    getLandById(input: GeneralInput!): Land
    getGroundById(input: GeneralInput!): Ground
    getGroundTypeById(input: GeneralInput!): GroundType
    getDocumentTypeById(input: GeneralInput!): DocumentType
    getBuildingById(input: GeneralInput!): Building
  }

  type Mutation{
    createOwner(input: OwnerInput!): Owner
    createLocation(input: LocationInput!): Location
    createLand(input: LandInput!): Land
    createGround(input: GroundInput!): Ground
    createBuilding(input: BuildingInput!): Building
    createOwnerType(input: InsertInput!): OwnerType
    createBuildingType(input: InsertInput!): BuildingType
    
    updateOwner(input: OwnerInput,where: GeneralInput!): Owner
    updateLocation(input: LocationInput,where: GeneralInput!): Location
    updateLand(input: LandInput,where: GeneralInput!): Land
    updateGround(input: GroundInput,where: GeneralInput!): Ground
    updateBuilding(input: BuildingInput,where: GeneralInput!): Building
    updateOwnerType(input: InsertInput, where: GeneralInput!): OwnerType
    updateBuildingType(input: InsertInput, where: GeneralInput!): BuildingType
    
    deleteOwner(input: GeneralInput!): Owner
    deleteLocation(input: GeneralInput!): Location
    deleteLand(input: GeneralInput!): Land
    deleteGround(input: GeneralInput!): Ground
    deleteBuilding(input: GeneralInput!): Building
    deleteOwnerType(input: GeneralInput!): OwnerType
    deleteBuildingType(input: GeneralInput!): BuildingType
  }

`;

module.exports = {
  typeDefs,
}

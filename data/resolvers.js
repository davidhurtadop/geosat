const { prisma } = require('../prisma/lib/prisma');
const { v4: uuidv4 } = require('uuid');

// Get Info
const getOwners = prisma.owner.findMany();
const getOwnerTypes = prisma.owner_type.findMany();
const getLocations = prisma.location.findMany();
const getLocationTypes = prisma.location_type.findMany();
const getLands = prisma.land.findMany();
const getGrounds = prisma.ground.findMany();
const getGroundTypes = prisma.ground_type.findMany();
const getDocumentTypes = prisma.document_type.findMany();
const getBuildings = prisma.building.findMany();
const getBuildingTypes = prisma.building_type.findMany();

// Get Info by Id
function getOwnerById(_, args) {
  return prisma.owner.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getLocationById(_, args) {
  return prisma.location.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getLocationTypeById(_, args) {
  return prisma.location_type.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getLandById(_, args) {
  return prisma.land.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getGroundById(_, args) {
  return prisma.ground.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getGroundTypeById(_, args) {
  return prisma.ground_type.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getDocumentTypeById(_, args) {
  return prisma.document_type.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getBuildingById(_, args) {
  return prisma.building.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getOwnerTypeById(_, args) {  
  return prisma.owner_type.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};

function getBuildingTypeById(_, args) {
  return prisma.building_type.findUnique({
    where: {
      id: args.input.id || undefined,
    },
  });
};


// Add Info
function createOwner (_,args){
  console.log(args);
  return prisma.owner.create({
    data:{...args.input, id:uuidv4()}
  });
};

function createLocation (_,args){
  return prisma.location.create({
    data:{...args.input, id:uuidv4()}
  });
};

function createLand (_,args){
  return prisma.land.create({
    data:{...args.input, id:uuidv4()}
  });
};

function createGround (_,args){
  return prisma.ground.create({
    data:{...args.input, id:uuidv4()}
  });
};

function createBuilding (_,args){
  return prisma.building.create({
    data:{...args.input, id:uuidv4() }
  });
};

function createOwnerType(_, args) {
  return prisma.owner_type.create({
    data: { ...args.input, id: uuidv4() }
  });
};

function createBuildingType(_, args) {
  return prisma.building_type.create({
    data: { ...args.input, id: uuidv4() }
  });
};

// Update Info
function updateOwner(_,args) {
  return prisma.owner.update({
    where: {
      id: args.where.id
    },
    data: {
      ...args.input
    }
  });
};

function updateLocation(_,args) {
  return prisma.location.update({
    where: {
      id: args.where.id
    },
    data: {
      ...args.input
    }
  });
};

function updateLand(_,args) {
  return prisma.land.update({
    where: {
      id: args.where.id
    },
    data: {
      ...args.input
    }
  });
};

function updateGround(_,args) {
  return prisma.ground.update({
    where: {
      id: args.where.id
    },
    data: {
      ...args.input
    }
  });
};

function updateBuilding(_,args) {
  return prisma.building.update({
    where: {
      id: args.where.id
    },
    data: {
      ...args.input
    }
  });
};

function updateBuildingType(_,args) {
  return prisma.building_type.update({
    where: {
      id: args.where.id
    },
    data: {
      ...args.input
    }
  });
};

function updateOwnerType(_, args) {
  return prisma.owner_type.update({
    where: {
      id: args.where.id
    },
    data: {
      ...args.input
    }
  });
}

// Delete Info
function deleteOwner (_,args){
  return prisma.owner.delete({
    where: {
      id: args.input.id
    }
  });  
};
function deleteLocation (_,args){
  return prisma.location.delete({
    where: {
      id: args.input.id
    }
  });  
};
function deleteLand (_,args){
  return prisma.land.delete({
    where: {
      id: args.input.id
    }
  });  
};
function deleteGround (_,args){
  return prisma.ground.delete({
    where: {
      id: args.input.id
    }
  });  
};
function deleteBuilding (_,args){
  return prisma.building.delete({
    where: {
      id: args.input.id
    }
  });  
};

function deleteBuildingType(_,args) {
  return prisma.building_type.delete({
    where: {
      id: args.input.id
    }
  });
};

function deleteOwnerType(_,args) {
  return prisma.owner_type.delete({
    where: {
      id: args.input.id
    }
  });
};

const Query = {
  getOwners: () => getOwners,
  getOwnerTypes: () => getOwnerTypes,
  getLocations: () => getLocations,
  getLocationTypes: () => getLocationTypes,
  getLands: () => getLands,
  getGrounds: () => getGrounds,
  getGroundTypes: () => getGroundTypes,
  getDocumentTypes: () => getDocumentTypes,
  getBuildings: () => getBuildings,
  getBuildingTypes: () => getBuildingTypes,

  getOwnerById: (_,args) => getOwnerById(_,args),
  getOwnerTypeById: (_,args) => getOwnerTypeById (_,args),
  getLocationById: (_,args) => getLocationById(_,args),
  getLocationTypeById: (_,args) => getLocationTypeById(_,args),
  getLandById: (_,args) => getLandById(_,args),
  getGroundById: (_,args) => getGroundById(_,args),
  getGroundTypeById: (_,args) => getGroundTypeById(_,args),
  getDocumentTypeById: (_,args) => getDocumentTypeById(_,args),
  getBuildingById: (_,args) => getBuildingById(_,args),
  getBuildingTypeById: (_,args) => getBuildingTypeById (_,args),
}

const Mutation = {
  createOwner: (_,args) => createOwner(_,args),
  createLocation: (_,args) => createLocation(_,args),
  createLand: (_,args) => createLand(_,args),
  createGround: (_,args) => createGround(_,args),
  createBuilding: (_,args) => createBuilding(_,args),
  createBuildingType: (_,args) => createBuildingType(_,args),
  createOwnerType: (_,args) => createOwnerType(_,args),
  
  updateOwner: (_,args) => updateOwner(_,args),
  updateLocation: (_,args) => updateLocation(_,args),
  updateLand: (_,args) => updateLand(_,args),
  updateGround: (_,args) => updateGround(_,args),
  updateBuilding: (_,args) => updateBuilding(_,args),
  updateBuildingType: (_,args) => updateBuildingType(_,args),
  updateOwnerType: (_,args) => updateOwnerType(_,args),

  deleteOwner: (_,args) => deleteOwner(_,args),
  deleteLocation: (_,args) => deleteLocation(_,args),
  deleteLand: (_,args) => deleteLand(_,args),
  deleteGround: (_,args) => deleteGround(_,args),
  deleteBuilding: (_,args) => deleteBuilding(_,args),
  deleteBuildingType: (_,args) => deleteBuildingType(_,args),
  deleteOwnerType: (_,args) => deleteOwnerType(_,args),
}

const resolvers = {
  Query,
  Mutation
};

module.exports = {
  resolvers,
}
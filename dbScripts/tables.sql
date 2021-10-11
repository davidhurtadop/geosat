---------------------------------
-- DROP
---------------------------------
DROP TABLE IF EXISTS public.building;
DROP TABLE IF EXISTS public.ground;
DROP TABLE IF EXISTS public.land;
DROP TABLE IF EXISTS public.location;
DROP TABLE IF EXISTS public.owner;
DROP TABLE IF EXISTS public.document_type;
DROP TABLE IF EXISTS public.owner_type;
DROP TABLE IF EXISTS public.location_type;
DROP TABLE IF EXISTS public.ground_type;
DROP TABLE IF EXISTS public.building_type;

---------------------------------
-- CREATE
---------------------------------
CREATE TABLE public.document_type(  
    "id"        uuid NOT NULL,
    "name"      character varying(200) NOT NULL,
    CONSTRAINT "PK_DOCUMENT_TYPE" PRIMARY KEY ("id")
);

ALTER TABLE public.document_type OWNER to postgres;

COMMENT ON TABLE public.document_type
    IS 'Document Type';

CREATE TABLE public.owner_type(  
    "id"        uuid NOT NULL,
    "name"      character varying(200) NOT NULL,
    CONSTRAINT "PK_OWNER_TYPE" PRIMARY KEY ("id")
);

ALTER TABLE public.owner_type OWNER to postgres;

COMMENT ON TABLE public.owner_type
    IS 'Owner Type';

CREATE TABLE public.location_type(  
    "id"        uuid NOT NULL,
    "name"      character varying(200) NOT NULL,
    CONSTRAINT "PK_LOCATION_TYPE" PRIMARY KEY ("id")
);

ALTER TABLE public.location_type OWNER to postgres;

COMMENT ON TABLE public.location_type
    IS 'Location Type';

CREATE TABLE public.ground_type(  
    "id"        uuid NOT NULL,
    "name"      character varying(200) NOT NULL,
    CONSTRAINT "PK_ground_TYPE" PRIMARY KEY ("id")
);

ALTER TABLE public.ground_type OWNER to postgres;

COMMENT ON TABLE public.ground_type
    IS 'Ground Type';

CREATE TABLE public.building_type(  
    "id"        uuid NOT NULL,
    "name"      character varying(200) NOT NULL,
    CONSTRAINT "PK_BUILDING_TYPE" PRIMARY KEY ("id")
);

ALTER TABLE public.building_type OWNER to postgres;

COMMENT ON TABLE public.building_type
    IS 'Building Type';    

CREATE TABLE public."owner"
(
    "id" uuid NOT NULL,
    "firstName" character varying(200) NOT NULL,
    "lastName" character varying(200) NOT NULL,
    "ownerType" uuid NOT NULL,
    "documentType" uuid NOT NULL,
    "document" character varying(50) NOT NULL,
    "address" character varying(500) NOT NULL,
    "phoneNumber" character varying(20) NOT NULL,
    "email" character varying(200),
    "businessName" character varying(500),
    CONSTRAINT "PK_OWNER" PRIMARY KEY ("id")
);

ALTER TABLE public."owner"
    OWNER to postgres;

COMMENT ON TABLE public."owner"
    IS 'Owner';

CREATE TABLE public."location"
(
    "id" uuid NOT NULL,
    "name" character varying(300) NOT NULL,
    "locationType" uuid NOT NULL,
    "fatherId" uuid,
    CONSTRAINT "PK_LOCATION" PRIMARY KEY ("id")
);

ALTER TABLE public."location"
    OWNER to postgres;

COMMENT ON TABLE public."location"
    IS 'Location';

CREATE TABLE public."land"
(
    "id" uuid NOT NULL,
    "predialNumber" character varying(200) NOT NULL,
    "value" numeric(50) NOT NULL,
    "name" character varying(500) NOT NULL,
    "departmentId" uuid  NOT NULL,
    "cityId" uuid  NOT NULL,
    "ownerId" character varying(50),
    "creationDate" date,
    "deleteDate" date,
    "status" character varying(1) CHECK(status in ('A','I')),
    CONSTRAINT "PK_LAND" PRIMARY KEY ("id")
);

ALTER TABLE public."land"
    OWNER to postgres;

COMMENT ON TABLE public."land"
    IS 'Land';

CREATE TABLE public."ground"
(
    "id" uuid NOT NULL,
    "totalArea" numeric(10,2) NOT NULL,
    "value" numeric(50,2) NOT NULL,
    "groundType" uuid NOT NULL,
    "isNearWaterSource" boolean NOT NULL,
    "landId" uuid UNIQUE,
    "hasBuildings" boolean NOT NULL,
    "creationDate" date,
    "deleteDate" date,
    "status" character varying(1) CHECK(status in ('A','I')),    CONSTRAINT "PK_GROUND" PRIMARY KEY ("id")
);

ALTER TABLE public."ground"
    OWNER to postgres;

COMMENT ON TABLE public."ground"
    IS 'Ground';

CREATE TABLE public."building"
(
    "id" uuid NOT NULL,
    "totalArea" numeric(10,2) NOT NULL,
    "floors" numeric(3) NOT NULL,
    "buildingType" uuid NOT NULL,
    "address" character varying(500) NOT NULL,
    "landId" uuid,
    "creationDate" date,
    "deleteDate" date,
    "status" character varying(1) CHECK(status in ('A','I')),
    CONSTRAINT "PK_BUILDING" PRIMARY KEY ("id")
);

ALTER TABLE public."building"
    OWNER to postgres;

COMMENT ON TABLE public."building"
    IS 'Building';

---------------------------------
-- FK
---------------------------------
ALTER TABLE public.owner 
ADD CONSTRAINT FK_OWNER_DOCUMENT_TYPE 
FOREIGN KEY ("documentType") 
REFERENCES "document_type" ("id");

ALTER TABLE public.owner 
ADD CONSTRAINT FK_OWNER_OWNER_TYPE 
FOREIGN KEY ("ownerType") 
REFERENCES "owner_type" ("id");

ALTER TABLE public.location 
ADD CONSTRAINT FK_LOCATION_LOCATION 
FOREIGN KEY ("fatherId") 
REFERENCES "location" ("id");

ALTER TABLE public.location 
ADD CONSTRAINT FK_LOCATION_LOCATION_TYPE 
FOREIGN KEY ("locationType") 
REFERENCES "location_type" ("id");

ALTER TABLE public.land 
ADD CONSTRAINT FK_LAND_LOCATION_01
FOREIGN KEY ("departmentId") 
REFERENCES "location" ("id");

ALTER TABLE public.land 
ADD CONSTRAINT FK_LAND_LOCATION_02
FOREIGN KEY ("cityId") 
REFERENCES "location" ("id");

ALTER TABLE public.ground 
ADD CONSTRAINT FK_GROUND_LAND
FOREIGN KEY ("landId") 
REFERENCES "land" ("id");

ALTER TABLE public.ground 
ADD CONSTRAINT FK_GROUND_GROUND_TYPE
FOREIGN KEY ("groundType") 
REFERENCES "ground_type" ("id");

ALTER TABLE public.building 
ADD CONSTRAINT FK_BUILDING_BUILDING_TYPE
FOREIGN KEY ("buildingType") 
REFERENCES "building_type" ("id");

ALTER TABLE public.building 
ADD CONSTRAINT FK_BUILDING_LAND
FOREIGN KEY ("landId") 
REFERENCES "land" ("id");

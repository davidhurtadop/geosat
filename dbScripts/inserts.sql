---------------------------------
-- DELETE
---------------------------------
delete from location;
delete from document_type;
delete from owner_type;
delete from location_type;
delete from building_type;
delete from ground_type;

---------------------------------
-- INSERT
---------------------------------
insert into document_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'CC');
insert into document_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'NIT');

insert into owner_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Persona Natural');
insert into owner_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Peronsa Jurídica');

insert into building_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Industrial');
insert into building_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Comercial');
insert into building_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Residencial');

insert into ground_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Urbano');
insert into ground_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Rural');

insert into location_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'País');
insert into location_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Departamento');
insert into location_type values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Municipio');

commit;
insert into location values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Colombia',(select id from location_type where name = 'País'),null);
commit;
insert into location values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Antioquia',(select id from location_type where name = 'Departamento'),(select id from location where name = 'Colombia'));
commit;
insert into location values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Medellín',(select id from location_type where name = 'Municipio'),(select id from location where name = 'Antioquia'));
insert into location values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Envigado',(select id from location_type where name = 'Municipio'),(select id from location where name = 'Antioquia'));
insert into location values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Itagüí',(select id from location_type where name = 'Municipio'),(select id from location where name = 'Antioquia'));
insert into location values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Caldas',(select id from location_type where name = 'Municipio'),(select id from location where name = 'Antioquia'));
commit;
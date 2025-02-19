-- Enable the uuid-ossp extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a temporary table to store generated UUIDs
CREATE TEMP TABLE temp_regulated_entity_ids (id UUID);

-- Generate and store 50 UUIDs in the temporary table
INSERT INTO temp_regulated_entity_ids (id)
SELECT uuid_generate_v4() FROM generate_series(1, 200);

-- select * from temp_regulated_entity_ids;

-- Insert into the main table using stored UUIDs
INSERT INTO regulatedentityservice."regulatedEntity" (
    id,
    "clientCode",
    "entityType",
    name,
    address,
    zip,
    state,
    county,
    municipality,
    latitude,
    longitude,
    "clientMetaData",
    owners,
    "attributeMap",
    active,
    deleted,
    "createdBy",
    "updatedBy",
    "createdAt",
    "updatedAt",
    country,
    "externalId"
)
SELECT
    id,                                                            -- Use stored UUIDs
    'CLIENT-' || lpad((row_number() OVER ())::text, 3, '0'),       -- Fixed lpad() issue
    CASE WHEN row_number() OVER () % 2 = 0 THEN 'Type A' ELSE 'Type B' END,
    'Entity Name ' || row_number() OVER (),
    '1234 Main St, Apt ' || row_number() OVER (),
    'ZIP' || (10000 + row_number() OVER ())::text,
    'State ' || row_number() OVER (),
    'County ' || row_number() OVER (),
    'Municipality ' || row_number() OVER (),
    round((random() * 180 - 90)::numeric, 6)::double precision,    -- Fixed round() issue
    round((random() * 360 - 180)::numeric, 6)::double precision,   -- Fixed round() issue
    jsonb_build_object('sampleKey', 'sampleValue ' || row_number() OVER ()),
    'Owner ' || row_number() OVER (),
    jsonb_build_object('attrKey', row_number() OVER ()),
    true,
    false,
    uuid_generate_v4(),
    uuid_generate_v4(),
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    'Country ' || row_number() OVER (),
    'EXT-' || row_number() OVER ()
FROM temp_regulated_entity_ids;

------------------------------------------------------------------------------------------------------------
-- Enable the uuid-ossp extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a temporary table to store generated UUIDs for regulatedEntityInspectionType
CREATE TEMP TABLE temp_inspection_type_ids (id UUID);

-- Generate and store 200 UUIDs
INSERT INTO temp_inspection_type_ids (id)
SELECT uuid_generate_v4() FROM generate_series(1, 200);

-- Insert 200 records into regulatedEntityInspectionType
WITH numbered_inspection_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_inspection_type_ids
),
numbered_regulated_entity_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_regulated_entity_ids
)
INSERT INTO regulatedentityservice."regulatedEntityInspectionType" (
    id,
    "clientCode",
    "regulatedEntityId",
    "inspectionTypeCode",
    name,
    address,
    latitude,
    longitude,
    state,
    county,
    municipality,
    "mailingAddress",
    "attributeMap",
    "clientMetaData",
    active,
    deleted,
    "createdBy",
    "updatedBy",
    "createdAt",
    "updatedAt",
    "regStartDate",
    country,
    zip,
    "externalId"
)
SELECT
    ni.id,  -- Use unique primary key from temp_inspection_type_ids
    'INSPECT-' || LPAD(ni.rn::TEXT, 4, '0'),  -- Explicitly reference ni.rn
    nri.id,  -- Use unique foreign key from temp_regulated_entity_ids
    'ITC-' || (1000 + ni.rn)::TEXT,  -- Explicitly reference ni.rn
    'Inspection Type ' || ni.rn,
    'Inspection Address ' || ni.rn,
    ROUND((RANDOM() * 180 - 90)::NUMERIC, 6)::DOUBLE PRECISION,  -- Latitude
    ROUND((RANDOM() * 360 - 180)::NUMERIC, 6)::DOUBLE PRECISION,  -- Longitude
    'State ' || ni.rn,
    'County ' || ni.rn,
    'Municipality ' || ni.rn,
    'Mailing Address ' || ni.rn,
    jsonb_build_object('attrKey', 'attrValue ' || ni.rn),
    jsonb_build_object('metaKey', 'metaValue ' || ni.rn),
    TRUE,
    FALSE,
    uuid_generate_v4(),
    uuid_generate_v4(),
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    'Country ' || ni.rn,
    'ZIP-' || (90000 + ni.rn)::TEXT,
    'EXT-' || ni.rn
FROM numbered_inspection_ids ni
JOIN numbered_regulated_entity_ids nri ON ni.rn = nri.rn
LIMIT 200;


------------------------------------------------------------------------------------------------------------
-- Enable the uuid-ossp extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a temporary table to store generated UUIDs for regulatedEntityItem
CREATE TEMP TABLE temp_regulated_entity_item_ids (id UUID);

-- Generate and store 200 UUIDs
INSERT INTO temp_regulated_entity_item_ids (id)
SELECT uuid_generate_v4() FROM generate_series(1, 200);

-- Insert 200 records into regulatedEntityItem
WITH numbered_item_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_regulated_entity_item_ids
),
numbered_inspection_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_inspection_type_ids
),
numbered_regulated_entity_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_regulated_entity_ids
)
INSERT INTO regulatedentityservice."regulatedEntityItem" (
    id,
    "clientCode",
    "regulatedEntityInspectionTypeId",
    "regulatedEntityId",
    "keyName",
    "keyValue",
    "attributeMap",
    active,
    deleted,
    "createdBy",
    "updatedBy",
    "createdAt",
    "updatedAt",
    "externalId"
)
SELECT
    ni.id,  -- Unique primary key from temp_regulated_entity_item_ids
    'ITEM-' || LPAD(ni.rn::TEXT, 4, '0'),  -- Unique client code
    rit.id,  -- Unique foreign key from temp_inspection_type_ids
    re.id,   -- Unique foreign key from temp_regulated_entity_ids
    'KeyName ' || ni.rn,
    'KeyValue ' || ni.rn,
    jsonb_build_object('attrKey', 'attrValue ' || ni.rn),
    TRUE,
    FALSE,
    uuid_generate_v4(),
    uuid_generate_v4(),
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    'EXT-' || ni.rn
FROM numbered_item_ids ni
JOIN numbered_inspection_ids rit ON ni.rn = rit.rn
JOIN numbered_regulated_entity_ids re ON ni.rn = re.rn
LIMIT 200;

-----------------------------------------------------------------------------------------------------------
-- Enable the uuid-ossp extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a temporary table to store generated UUIDs for contacts
CREATE TEMP TABLE temp_contact_ids (id UUID);

-- Generate and store 200 UUIDs
INSERT INTO temp_contact_ids (id)
SELECT uuid_generate_v4() FROM generate_series(1, 200);

-- Insert 200 records into contacts
WITH numbered_contact_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_contact_ids
),
numbered_regulated_entity_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_regulated_entity_ids
),
numbered_inspection_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_inspection_type_ids
)
INSERT INTO regulatedentityservice.contacts (
    id,
    "regulatedEntityInspectionTypeId",
    "contactType",
    firstname,
    lastname,
    address,
    city,
    state,
    zip,
    "default",
    active,
    deleted,
    "createdBy",
    "updatedBy",
    "createdAt",
    "updatedAt",
    "workPhone",
    "workEmail",
    middlename,
    "clientMetaData",
    title,
    "regulatedEntityId"
)
SELECT
    t.id,  -- Primary key from temp_contact_ids
    COALESCE(rit.id, NULL),  -- Randomly associate with a regulatedEntityInspectionType (nullable)
    'Type ' || t.rn::int,
    'First' || t.rn,
    'Last' || t.rn,
    'Address ' || t.rn,
    'City ' || t.rn,
    'State ' || t.rn,
    'ZIP-' || (90000 + t.rn)::text,
    (random() < 0.2),  -- 20% chance for default contact
    TRUE,
    FALSE,
    uuid_generate_v4(),
    uuid_generate_v4(),
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    '123-456-789' || (10 + t.rn)::text,
    'email' || t.rn || '@example.com',
    'Middle' || t.rn,
    jsonb_build_object('metaKey', 'metaValue ' || t.rn),
    'Title ' || t.rn,
    re.id  -- Foreign key from temp_regulated_entity_ids
FROM numbered_contact_ids t
JOIN numbered_regulated_entity_ids re ON t.rn = re.rn  -- Join to get a random regulatedEntityId
LEFT JOIN numbered_inspection_ids rit ON t.rn = rit.rn  -- Randomly associate some contacts with a regulatedEntityInspectionType
LIMIT 200;

------------------------------------------------------------------------------------------------------------
-- Enable the uuid-ossp extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a temporary table to store generated UUIDs for contacts
CREATE TEMP TABLE temp_attachments_ids (id UUID);

-- Generate and store 200 UUIDs
INSERT INTO temp_attachments_ids (id)
SELECT uuid_generate_v4() FROM generate_series(1, 200);


WITH numbered_attachments_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_attachments_ids
),
numbered_regulated_entity_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_regulated_entity_ids
),
numbered_inspection_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_inspection_type_ids
),
numbered_item_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_regulated_entity_item_ids
)
INSERT INTO regulatedentityservice.attachments (
    id,
    "regulatedEntityInspectionTypeId",  -- Foreign key reference (nullable)
    "regulatedEntityItemId",  -- Foreign key reference (nullable)
    "mimeType",
    title,
    description,
    active,
    deleted,
    "createdBy",
    "updatedBy",
    "createdAt",
    "updatedAt",
    "metaData",
    annotations,
    "annotationTypes",
    "contextType",
    "regulatedEntityId"  -- Foreign key reference
)
SELECT
    t.id,  -- Primary key from temp_attachment_ids
    COALESCE(rit.id, NULL),  -- Randomly associate with a regulatedEntityInspectionType (nullable)
    rei.id,  -- Randomly associate with a regulatedEntityItem
    'application/pdf',  -- Default mimeType
    'Title ' || t.rn,
    'Description ' || t.rn,
    true,  -- Active
    false,  -- Deleted
    uuid_generate_v4(),  -- CreatedBy
    uuid_generate_v4(),  -- UpdatedBy
    CURRENT_TIMESTAMP,  -- CreatedAt
    CURRENT_TIMESTAMP,  -- UpdatedAt
    jsonb_build_object('metaKey', 'metaValue ' || t.rn),  -- MetaData
    '[]'::jsonb,  -- Default empty annotations
    '[]'::jsonb,  -- Default empty annotationTypes
    'Context ' || t.rn,  -- ContextType
    re.id  -- Foreign key from temp_regulated_entity_ids
FROM numbered_attachments_ids t
JOIN numbered_regulated_entity_ids re ON t.rn = re.rn  -- Join to get a random regulatedEntityId
LEFT JOIN numbered_inspection_ids rit ON t.rn = rit.rn  -- Randomly associate with regulatedEntityInspectionType
LEFT JOIN numbered_item_ids rei ON t.rn = rei.rn  -- Randomly associate with regulatedEntityItem
LIMIT 200;

-----------------------------------------------------------------------------------------------------------
WITH numbered_inspection_ids AS (
    SELECT id, ROW_NUMBER() OVER () AS rn FROM temp_inspection_type_ids
)
INSERT INTO regulatedentityservice."reitDetails" (
    "regulatedEntityInspectionTypeId",  -- Foreign key reference
    "lastInspectionId",
    "lastInspectionDate",
    "assignedToName",
    "assignedToStartDate",
    "assignedToTeamId",
    "createdBy",
    "updatedBy",
    "createdAt",
    "updatedAt",
    "assignedToId"
)
SELECT
    t.id,  -- Foreign key from temp_inspection_type_ids
    uuid_generate_v4(),  -- Random lastInspectionId
    CURRENT_TIMESTAMP - INTERVAL '1 day' * (random() * 365)::int,  -- Random lastInspectionDate within the last year
    'Assigned Name ' || t.rn,  -- Assigned to name
    CURRENT_TIMESTAMP - INTERVAL '1 day' * (random() * 365)::int,  -- Random assigned start date within the last year
    uuid_generate_v4(),  -- Random assignedToTeamId
    uuid_generate_v4(),  -- Random createdBy
    uuid_generate_v4(),  -- Random updatedBy
    CURRENT_TIMESTAMP,  -- createdAt
    CURRENT_TIMESTAMP,  -- updatedAt
    uuid_generate_v4()  -- Random assignedToId
FROM numbered_inspection_ids t
LIMIT 200;
-----------------------------------------------------------------------------------------------------------
INSERT INTO regulatedentityservice."covidData" (
    id,
    iso2,
    iso3,
    code3,
    "FIPS",
    county,
    state,
    country,
    lat,
    "long",
    "combinedKey",
    date,
    count,
    "createdAt"
)
SELECT
    (row_number() OVER ()) + 1000000,  -- Random id starting from 1000001
    'US',  -- Random iso2 code (ISO 3166-1 alpha-2)
    'USA',  -- Random iso3 code (ISO 3166-1 alpha-3)
    (random() * 999 + 1)::int,  -- Random code3 (1 to 999)
    (random() * 1000 + 1)::int,  -- Random FIPS (1 to 1000)
    'County ' || row_number() OVER (),  -- Random county name
    'State ' || row_number() OVER (),  -- Random state name
    'Country ' || row_number() OVER (),  -- Random country name
    round((random() * 180 - 90)::numeric, 6),  -- Random latitude (-90 to 90)
    round((random() * 360 - 180)::numeric, 6),  -- Random longitude (-180 to 180)
    'County ' || row_number() OVER () || ', State ' || row_number() OVER (),  -- Combined key
    CURRENT_DATE - INTERVAL '1 day' * (random() * 365)::int,  -- Random date within the last year
    (random() * 1000)::int,  -- Random count (0 to 1000)
    CURRENT_TIMESTAMP  -- createdAt
FROM generate_series(1, 200);
-----------------------------------------------------------------------------------------------------------
-- Create temp table for UUIDs of regulatedEntityInspectionType
-- Create temp table for UUIDs of regulatedEntityInspectionType
CREATE TEMP TABLE temp_risk_metric_ids AS
SELECT id
FROM regulatedentityservice."regulatedEntityInspectionType"
ORDER BY random()
LIMIT 200;

-- Insert 200 records into the riskMetric table
INSERT INTO regulatedentityservice."riskMetric" (
    id,
    "regulatedEntityInspectionTypeId",  -- Foreign key reference
    category,
    value,
    "createdBy",
    "updatedBy",
    "createdAt",
    "updatedAt"
)
SELECT
    uuid_generate_v4(),  -- Generate new UUID for each record
    t.id,  -- Randomly select a regulatedEntityInspectionTypeId from the temp table
    'Category ' || row_number() OVER (),  -- Random category name
    round((random() * 1000)::numeric, 2),  -- Random value between 0 and 1000 with 2 decimal places
    uuid_generate_v4(),  -- Random createdBy UUID
    uuid_generate_v4(),  -- Random updatedBy UUID
    CURRENT_TIMESTAMP,  -- createdAt
    CURRENT_TIMESTAMP   -- updatedAt
FROM temp_risk_metric_ids t;

-- Drop the temp table after inserting
-- DROP TABLE temp_risk_metric_ids;


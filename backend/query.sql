
-- Query para saber cuantos registros de VIDEO hay en la tabla 

SELECT
  count(idResourceType)
FROM
  tresource
WHERE
  idResourceType = "1"


-- Query para saber cuantos registros de PDF DOCUMENTACION hay en la tabla

  SELECT
  count(idResourceType)
FROM
  tresource
WHERE
  idResourceType = "2"

-- Query para saber cuantos registros de PDF Enunciado hay en la tabla
  SELECT
  count(idResourceType)
FROM
  tresource
WHERE
  idResourceType = "3"

-- Query para saber cuantos registros de PDF SOLUCION hay en la tabla
  SELECT
  count(idResourceType)
FROM
  tresource
WHERE
  idResourceType = "4"
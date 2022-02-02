INSERT INTO
  `patricio20220202`.`tresource_type` (`idResourceType`, `created`, `descrip`)
VALUES
  (1, NOW(), "Vídeo"),
  (2, NOW(), "PDF Documentación"),
  (3, NOW(), "PDF Enunciado"),
  (4, NOW(), "PDF Solución");
INSERT INTO
  `patricio20220202`.`tresource` (
    `idResource`,
    `created`,
    `descrip`,
    `idResourceType`
  )
VALUES
  (1, NOW(), "Example PDF Solution Nº1", 4),
  (2, NOW(), "Example PDF Documentacion Nº1", 2),
  (
    3,
    NOW(),
    "https://www.youtube.com/watch?v=db",
    1
  ),
  (4, NOW(), "Example PDF Enunciado Nº1", 3),
  (5, NOW(), "Example PDF Documentacion Nº2", 2),
  (
    6,
    NOW(),
    "https://www.youtube.com/watch?a",
    1
  );
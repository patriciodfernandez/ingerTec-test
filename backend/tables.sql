CREATE TABLE `tresource_type` (
  `idResourceType` int NOT NULL,
  `created` datetime DEFAULT NULL,
  `descrip` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idResourceType`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;


CREATE TABLE `tresource` (
  `idResource` int NOT NULL,
  `created` datetime DEFAULT NULL,
  `descrip` varchar(200) DEFAULT NULL,
  `idResourceType` int DEFAULT NULL,
  PRIMARY KEY (`idResource`),
  KEY `fk_idResourceType _idx` (`idResourceType`),
  CONSTRAINT `fk_idResourceType ` FOREIGN KEY (`idResourceType`) REFERENCES `tresource_type` (`idResourceType`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;


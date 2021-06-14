-- MySQL dump 10.13  Distrib 5.7.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: backoffice_feralbyte
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `id` varchar(36) NOT NULL,
  `name` varchar(45) NOT NULL,
  `numero` int(11) DEFAULT NULL,
  `stock` varchar(255) NOT NULL,
  `notas` varchar(255) NOT NULL,
  `kit_details` varchar(255) NOT NULL,
  `check_in` datetime NOT NULL DEFAULT current_timestamp(),
  `check_out` datetime NOT NULL DEFAULT current_timestamp(),
  `appetizer` varchar(100) NOT NULL,
  `side_dish` varchar(100) NOT NULL,
  `dessert` varchar(100) NOT NULL,
  `gaps` int(11) DEFAULT NULL,
  `spoons` int(11) DEFAULT NULL,
  `napkin` int(10) DEFAULT NULL,
  `cuvettes` int(11) DEFAULT NULL,
  `cover` int(11) DEFAULT NULL,
  `kitchen_paper_rolls` int(11) DEFAULT NULL,
  `rolls_toilet_paper` int(11) DEFAULT NULL,
  `mistolim` int(11) DEFAULT NULL,
  `dishwashing_detergent` int(11) DEFAULT NULL,
  `floor_detergent` int(11) DEFAULT NULL,
  `gloves` int(11) DEFAULT NULL,
  `masks` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES ('18d88b31-aff8-4b7b-8a1e-bcde5fe72ab1','Hospital',14,'tst','tst','tst','2021-05-12 21:15:00','2021-05-26 11:00:00','tst','tst','tst',4,5,NULL,NULL,NULL,6,NULL,NULL,NULL,5,NULL,NULL),('25b1bfa5-d8c1-45b4-8f7a-57840f85511c','Terço',100,'tsttsttst','tst','tst','2021-05-03 11:00:00','2021-05-17 11:00:00','tst-tst','tst','tst',NULL,1,1,1,1,1,1,1,1,1,1,1000),('282a76d9-6e5b-4625-a4ed-f63030e654a9','Baixa',34,'tste','notas123','teste teste','2021-03-31 15:29:05','2021-03-31 15:29:13','','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('3f9f7ece-e66d-4759-921e-e40b48122b32','Baixa',22222,'tst','tst','tst','2021-05-13 11:00:00','2021-05-27 11:00:00','tst','tst','tst',7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('4aac7594-f50f-4160-9e4f-a6bec444f000','Ju',80,'testeteste','tst','teste','2021-04-08 10:06:00','2021-04-15 11:06:00','','tst','teste',NULL,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),('5be1b7ad-8a36-4ab9-a1e8-f7333329001d','Baixa',333,'teste','notas','teste','2021-03-31 14:29:05','2021-03-31 14:29:13','','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,11),('7504c306-a54e-46cd-b390-f0dceaf3a1a5','Baixa',400,'tst aprese','tst','tst','2021-05-11 09:00:00','2021-05-12 10:00:00','tst','tst','tst',NULL,2,NULL,7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,600),('940ef9bc-9916-48a8-bd7b-c5009524d2d4','Terço',101010,'tst','tst','tst','2021-04-07 13:00:00','2021-04-20 11:00:00','tst','tst','tst',1,1,1,1,1,1,1,1,1,1,1,2),('ad95922a-de3d-4d49-b390-8a305dd5ea16','Hospital',200,'tst','tst','tst','2021-05-10 09:00:00','2021-05-12 13:00:00','tst','tst','tst',NULL,5,NULL,NULL,NULL,5,NULL,NULL,NULL,NULL,NULL,100),('e0de8e87-372f-4ee6-9ba8-0c4e50e624b6','Baixa',500,'tst','tst','tst apre','2021-05-11 11:00:00','2021-05-12 10:10:00','tst','tst apres','tst',NULL,6,8,NULL,NULL,NULL,7,NULL,NULL,NULL,NULL,500),('ebe0a1cf-765f-44cb-8d76-f7ad11df7669','Hospital',200,'teste','teste','teste','2021-05-20 11:00:00','2021-05-11 11:00:00','teste','teste','teste',7,9,1,6,5,9,4,10,14,45,4,78);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(36) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(45) CHARACTER SET utf8 NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `residence` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `resetPasswordToken` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `resetPasswordTokenExpires` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `notes` varchar(255) NOT NULL,
  `verified` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('04708bb4-2deb-4fb0-abbc-b4587fdac209','testeJwt@gmail.com','$2a$12$TpCwoLG8OSg7KDTa0Rjth.CnDGMGR/Bms07htC','jwt','jwt, 123','123456789',NULL,'2021-05-27 09:42:49','teste',1),('2face133-16e7-4641-8300-e9dc78c7b1ca','123@gmail.com','$2a$12$Cf6hJZOpA.JviOKUs8xEvero7TxTDvzii/vCPu','User','morada, 56','123432345',NULL,'2021-06-06 16:25:37','',1),('3269c712-d370-4fd9-a3cc-8dbfacd914f1','arrancatocos26@gmail.com','$2a$12$SuGUHmQKzfjT.5KHpuMt6O7NRw5R9uCKMBDdMU','Marco apresentacao','teste, 123','123456789',NULL,'2021-05-31 15:28:32','',NULL),('3c330237-0490-468e-aa1e-b31dd37e5c38','marco.nunes126@gmail.com','$2a$12$i6joDT8Z9IqGcgoNPTMViOFkuiMjggeu98oo2s','teste ','teste, 123','123456789',NULL,'2021-05-31 15:27:22','teste',1),('ff00a4dd-2b93-4d01-88e2-4660860ad1c1','','','bruno','brasil','324123432',NULL,'2021-06-01 13:24:07','teste',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-06 18:45:56

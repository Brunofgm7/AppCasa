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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES ('282a76d9-6e5b-4625-a4ed-f63030e654a9','Baixa',34,'tste','notas1'),('3f5f5007-f5f0-4087-8004-ac1185eb4f00','Ju',34,'teste','notas'),('4aac7594-f50f-4160-9e4f-a6bec444f000','Ju',80,'teste','tst'),('56ec1e8d-120e-4ccb-9609-12e6a8ab071f','Terço',676767,'testte','teste');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('04708bb4-2deb-4fb0-abbc-b4587fdac209','testeJwt@gmail.com','$2a$12$TpCwoLG8OSg7KDTa0Rjth.CnDGMGR/Bms07htC','jwt','jwt, 123','123456789',NULL,'2021-03-02 23:49:34'),('6e2329be-159b-48d0-a4b0-431464de7c55','testehash@gmail.com','$2a$12$IiKeMBEqpziSKoPcK4Uv5uuRK4PtWrpA47F.K/','hash','hash,123','123456789',NULL,'2021-02-05 11:48:33'),('b30b8d88-879c-4189-9c14-4f48362dc65e','testenodemailer2021@gmail.com','$2a$12$otg8Zvl3Er3H7qyLgh7IZOqUagxJt8.iOKw4U/','teste','teste, 123','123456789',NULL,'2021-02-08 12:13:38');
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

-- Dump completed on 2021-03-19 14:09:27

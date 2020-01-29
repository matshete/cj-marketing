# MySQL-Front 3.2  (Build 9.6)

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES */;

/*!40101 SET NAMES latin1 */;
/*!40103 SET TIME_ZONE='SYSTEM' */;

# Host: localhost    Database: cj_movies
# ------------------------------------------------------
# Server version 5.5.5-10.1.31-MariaDB

#
# Table structure for table movies
#

DROP TABLE IF EXISTS `movies`;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_title` varchar(100) NOT NULL,
  `movie_duration` varchar(100) NOT NULL,
  `movie_rating` int(10) NOT NULL,
  `date_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

#
# Dumping data for table movies
#

INSERT INTO `movies` VALUES (23,'the nun','01:45',4,'2020-01-29 23:55:25');
INSERT INTO `movies` VALUES (24,'spiderman','01:45',4,'2020-01-29 23:55:34');
INSERT INTO `movies` VALUES (25,'The hate you give','01:45',1,'2020-01-29 23:55:44');
INSERT INTO `movies` VALUES (26,'The First Sunday','01:45',2,'2020-01-29 23:55:53');
INSERT INTO `movies` VALUES (27,'Friday','01:45',4,'2020-01-29 23:56:03');
INSERT INTO `movies` VALUES (28,'Transporters 3','01:45',3,'2020-01-29 23:57:56');
INSERT INTO `movies` VALUES (54,'hackers','01:45',5,'2020-01-29 23:58:30');
INSERT INTO `movies` VALUES (55,'avengers','01:45',1,'2020-01-29 23:58:51');
INSERT INTO `movies` VALUES (56,'the first Date','01:45',4,'2020-01-29 23:59:11');
INSERT INTO `movies` VALUES (57,'The protector','01:45',4,'2020-01-29 23:59:35');


#
# Table structure for table users
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `surname` varchar(40) NOT NULL,
  `id_no` varchar(13) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `bio` text NOT NULL,
  `facebook` varchar(100) NOT NULL,
  `linkedin` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `admin` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

#
# Dumping data for table users
#

INSERT INTO `users` VALUES (32,'Emmanuel','','','emmanuel.molobela@gmail.com','$2y$10$awc1zdYE3QTG7cp5lskgu.nuxkeqS.uCAdu2qtki78kZxOBWuYv/.','','','','','',NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

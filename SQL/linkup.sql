-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2020 at 05:11 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `linkup`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE IF NOT EXISTS `accounts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text,
  `User_Name` text,
  `Email` text,
  `Phone` text,
  `password` text,
  `Profile_Pic` text,
  `Rank` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`ID`, `Name`, `User_Name`, `Email`, `Phone`, `password`, `Profile_Pic`, `Rank`) VALUES
(1, 'Kaleab_Teweldbrhan_Abay', 'kolo', 'kaleabteweld3@gmail.com', '+251900640160', 'kaleab1010', NULL, NULL),
(2, 'Main', 'LinkUp', 'main@LinkUp.link', '+251000000000', 'toortoor', NULL, NULL),
(7, 'nahom', 'alphameat', 'meatball647@gmail.com', '+251912121479', 'azwszxedxc_rfvktgbyhn', NULL, NULL),
(9, 'A2', 'wefw', 'a@.', '+251912121212', '12345678', NULL, NULL),
(10, 'a', 'm', '@.', '+251912124790', '12345678', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `download_mage`
--

CREATE TABLE IF NOT EXISTS `download_mage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `year` text NOT NULL,
  `loc` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `download_mage`
--

INSERT INTO `download_mage` (`ID`, `year`, `loc`) VALUES
(1, '2018', '/betta''b*habshea/downlaod/LinkUp_Addis_August_2018_Edition.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `main_events`
--

CREATE TABLE IF NOT EXISTS `main_events` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `event_name` text,
  `event_date` text,
  `event_time` text,
  `event_loc` text,
  `event_info` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `main_events`
--

INSERT INTO `main_events` (`ID`, `event_name`, `event_date`, `event_time`, `event_loc`, `event_info`) VALUES
(1, 'Live_jazz', '1/9/2018', '7:00pm-9:00pm', 'Sinkenesh_grill_bar', 'mot_bad'),
(3, 'Nebila_Abdulmelik_Photo_Exhibition', '1/8/2018', '8:00am-18:00pm', 'Alliance_Francaise', '_'),
(4, 'Afterwork_Live_#Jazz_Sessiona', '2/8/2018', '9:00am-6:30_pm_onwards', 'Villa_Verde', '_'),
(5, 'Sem_Ena_Werk_Literature_Night', '2/8/2018', '5:00_pm-8:00pm', 'Vamdas_Entertainment,', '_'),
(6, 'karaoke_night', '2/8/2018', '9:00pm_onwards', 'La_lyonnaise_bistrot', '_'),
(7, 'Annual_show', '2/8/2018', '6:00pm', 'Alle_School_of_Arts_&_Design', '_'),
(8, 'Nebila_Abdulmelik_Photo_Exhibition', '2/8/2018', '8:00am-18:00pm', 'Alliance_Francaise', '_'),
(9, 'Addis_Agora_Speakers_Club;_Session_35', '3/8/2018', '6:30pm-8:00pm', 'Caleb_Hotel', '_'),
(10, 'Mingle_#3', '3/8/2018', '5:00pm-11:00pm', 'The_Canteen_Restaurant', '_'),
(11, 'Cheza_Cheza_Night', '3/8/2018', '6:00pm', 'The_Vault_Addis', '_'),
(12, 'Nebila_Abdulmelik_Photo_Exhibition', '3/8/2018', '8:00am-18:00pm', 'Alliance_Francaise_', '_'),
(13, 'Ethiokids_Expo', '5/8/2018', '9:00_AM', 'Ghion_Hotel_', '_'),
(14, 'Ethiokids_Expo', '5/8/2018', '9:00_AM', 'Ghion_Hotel_', '_');

-- --------------------------------------------------------

--
-- Table structure for table `user_add_event`
--

CREATE TABLE IF NOT EXISTS `user_add_event` (
  `ID_us` int(11) NOT NULL AUTO_INCREMENT,
  `event_name_us` text,
  `event_date_us` text,
  `event_time_us` text,
  `event_loc_us` text,
  `event_info_us` text,
  PRIMARY KEY (`ID_us`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `user_add_event`
--

INSERT INTO `user_add_event` (`ID_us`, `event_name_us`, `event_date_us`, `event_time_us`, `event_loc_us`, `event_info_us`) VALUES
(4, 'Addis_Agora_Speakers_Club;_Session_35', '03/04/2020', '11:11-11:11', 'Sinkenesh_grill_bar', ''),
(5, 'Addis_Agora_Speakers_Club;_Session_3', '03/04/2020', '11:11-11:11', 'Sinkenesh_grill_bar', ''),
(6, 'Addis_Agora_Speakers_Club;_Session_3', '03/04/2020', '11:11-11:11', 'Sinkenesh_grill_bar', ''),
(7, 'kol9', '03/04/2020', '16:29-20:29', 'addis', 'hey_fuck_u'),
(8, 'kolo', '10/04/2020', '00:34-00:00', 'Alliance_Francaise', ''),
(9, 'udwgcui', '10/10/2020', '00:34-00:00', 'Alliance_Francaise', ''),
(10, 'udwgcui', '10/10/2020', '00:34-00:00', 'Alliance_Francaise', ''),
(11, 'udwgcui', '10/10/2020', '00:34-00:00', 'Alliance_Francaise', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

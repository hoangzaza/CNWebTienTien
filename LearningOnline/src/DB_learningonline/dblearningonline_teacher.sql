-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: dblearningonline
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `teacher` (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT,
  `teacher_name` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `url_icon` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `position` varchar(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `work_place` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `subject_id` int(11) NOT NULL,
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'Nguyễn Ngọc Anh','/resources/images/icon_teacher.png','Cử nhân','HỆ THỐNG GIÁO DỤC HOCMAI','gv.anhnn@hocmai.edu.vn','- Một vài dòng miêu tả về bản thân: Sống nhiệt huyết với tuổi trẻ, cởi mở với mọi người, luôn sẵn sàng chia sẻ. Ngủ ít để tiết kiệm thời gian .\r\n\r\n- Quan điểm sống: Sống hết mình, sống làm sao để khôn',1),(2,'Trần Thị Vân Anh','/resources/images/Tran_Thi_Van_Anh.png','Tiến Sĩ','Học viện Báo chí và Tuyên truyền','gv.anhttv@hocmai.edu.vn','- Nhiều năm kinh nghiệm dạy và luyện thi môn Ngữ văn cô có nhiều học sinh đỗ vào trường chuyên, đỗ cao trong các kỳ thi tuyển sinh vào lớp 6, lớp 10 vì vậy các kiến thức cô đưa ra trọng tâm, với mỗi k',3),(4,'Jenny Tú Anh','/resources/images/Bui_Tu_Anh.png','Cử nhân','Hệ thống Giáo dục HOCMAI','gv.anhbt@hocmai.edu.vn','- Năng động, trẻ trung, sôi nổi, nhiệt huyết, sáng tạo - là phong cách mà cô hướng tới vì thế trong mỗi bài giảng của mình cô luôn biến hóa một cách sinh động với nhiều phong cách, và nhiều hướng tiếp',6),(5,'Đoàn Kiều Anh','/resources/images/Doan_Kieu_Anh.png','Cử nhân','Hệ thống giáo dục HOC MAI','gv.anhdk@hocmai.edu.vn','- Về quan điểm trong giáo dục, cô thích câu nói của Can Jung:\"Không thể trồng cây ở những nơi thiếu ánh sáng, cũng không thể nuôi dạy trẻ với chút ít nhiệt tình.\" Vì vậy đối với giáo dục, đặc biệt là ',3),(6,'Bùi Thanh Bình','/resources/images/Bui_Thanh_Binh.png','Cử nhân','Hệ thống giáo dục Hoc Mai','gv.binhbtt@hocmai.edu.vn',' Với phong thái chậm rãi, tỉ mỉ đi sâu vào mọi ngóc ngách vấn đề của kiến thức, cô mong muốn học sinh không còn cảm thấy sợ học môn Toán từ đó sẽ dần yêu thích học môn Toán hơn.\r\n\r\n- Trong mỗi bài giả',1),(7,'Nguyễn Danh Chiến','/resources/images/Nguyen_Danh_Chien.png','Thạc sĩ','Trường THPT Cao Bá Quát - Hà Nội','gv.chiennd@hocmai.edu.vn','Năng động, nhiệt tình, thày tham gia nhiều khóa học trong nước và ngoài nước, trải nghiệm với nhiều vai trò khác nhau như: giáo viên, biên dịch viên, chuyên viên, quản lý.... Hiện nay thày tạm dừng ch',6);
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-25 21:08:43

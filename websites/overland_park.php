<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Lafferty - Overland Park</title>
		<?php
			include '../php/webHeader.php';
			echo $headerCode;
		?>
	</head>
	<body>
		<?php
			error_reporting(E_ERROR | E_PARSE | E_NOTICE);
			include '../php/webNavbar.php';

			echo $navbarCode;

		?>
		<div id="outerwrapper">
		<div id="History" class="tabcontent">
				<div class="table_pic">
					<a href="http://people.cs.ksu.edu/~rclafferty/prev_websites/overlandpark/index.html">
						<img src="../images/websites/overland_park.png" alt="History of Overland Park" width="420" height="270">
					</a>
				</div>
				<div class="table_text">
					<h2><a href="http://people.cs.ksu.edu/~rclafferty/prev_websites/overlandpark/index.html">History of Overland Park Project</a></h2>
					
					<p>This <a href="http://people.cs.ksu.edu/~rclafferty/prev_websites/overlandpark/index.html">History of Overland Park website</a> was created as an assignment for my CWEB 105 course at Johnson County Community College. This course used Dreamweaver CS6 to teach students the basics of HTML5 and CSS6. The class assignments focused on molding the style and formatting of websites, specifcally in in the manner you see in this website. The instructor provided us as students with pre-constructed text files containing information about John Overland Park, Betsy Lenexa, inventions of the late 1800s, and more that we used in order to create the web pages. This class focused a lot on HTML as relates to using Dreamweaver and not the HTML itself, but rightfully so. I quickly realized that Dreamweaver is a great tool for aiding in web development and I enjoyed using it.</p>
					<h3><em>What have I learned from this?</em></h3>
					<p>Through this course, I learned the basics of how to create a website as well as how to operate a program such as Dreamweaver. This course sparked my interest in web development and I have since continued to expand on that knowledge. Often, I implement what I have learned into my personal website.</p>
					<h3><em>Is there anything I'd do differently?</em></h3>
					<p>I would've explored deeper into the HTML/CSS itself when I was in this course. I'm learning a lot of what is available now. However, while taking this course, I thought the design was specific to Dreamweaver and so could only be done while developing in Dreamweaver. After learning this was incorrect, I began to explore more into further style ideas and features.</p>
				</div>
		</div>
		</div>
		<?php
			include '../php/footer.php';
			echo $footerCode;
		?>
	</body>
</html> 

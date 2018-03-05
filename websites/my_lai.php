<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Lafferty - My Lai</title>
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
		<div id="MyLai" class="tabcontent">
				<div class="table_pic">
					<a href="http://people.cs.ksu.edu/~rclafferty/prev_websites/my_lai/index.html">
						<img src="../images/websites/my_lai.png" alt="My Lai Massacre Project" width="420" height="270">
					</a>
					<!--<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
					<p><a href="http://people.cs.ksu.edu/~rclafferty/prev_websites/my_lai/index.html">Click here</a> to check it out</p>-->
				</div>
				<div class="table_text">
					<h2><a href="http://people.cs.ksu.edu/~rclafferty/prev_websites/my_lai/index.html">My Lai Massacre Project</a></h2>

					<p><a href="http://people.cs.ksu.edu/~rclafferty/prev_websites/my_lai/index.html">This website</a> was created as a final project for my CWEB 105 class at Johnson County Community College. In that class, I was tasked with researching a topic of my own interest and creating a full website using that research. I chose to research the My Lai (pronounced "mee lahy") Massacre during the Vietnam War. I am a bit of a "history buff" and had heard about this event shortly before the assignment. My research included information about key individuals, groups involved, events of the massacre, and the reprecussions that followed the event. I chose a black and white color scheme to reflect the ominous tone of the event.</p>
					<h3><em>What have I learned from this?</em></h3>
					<p>I was able to expand upon my knowledge of HTML5/CSS6 and actually explored some new style concepts that are included in this website, such as clickable links, that were not emphasized in previous assignments.</p>
					<h3><em>Is there anything I'd do differently?</em></h3>
					<p>I would've changed the style to look a bit more clean in the project. This includes changing the format of my sources table, in-text links, and more. However, I personally like how it turned out for the most part.</p>
				</div>
		</div>
		</div>

		<?php
			include '../php/footer.php';
			echo $footerCode;
		?>
	</body>
</html> 

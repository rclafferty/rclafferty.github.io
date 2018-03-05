<!DOCTYPE HTML>
<html>
	<head>
		<title>Lafferty - Websites</title>
		<?php
			include 'php/header.php';
			echo $headerCode;
		?>
	</head>
	<body>
		<?php
			error_reporting(E_ERROR | E_PARSE | E_NOTICE);
			include 'php/navbar.php';
			include 'php/title.php';

			echo $navbarCode;

			echo "<div id=\"outerwrapper\">";
			echo $titleCode;

		?>

			<div class="header">
				<h2>Websites</h2>
			</div>
			<div class="hover07_2 column2 hover_c">
				<div>
					<figure>
						<a href="about.php">
							<img alt="" src="images/websites/personal.png" height="230" width="380">
						</a>
					</figure>
					<span>
						<a href="about.php">My Personal Website</a><br><br>
						My personal website has played the role of both my HTML "playground" and also my online portfolio. I have always taken the time to hand-craft every part of the HTML5-verified code.
					</span>
				</div>

				<div>
					<figure>
						<a href="websites/overland_park.php">
							<img alt="" src="images/websites/overland_park.png" height="230" width="380">
						</a>
					</figure>
					<span>
						<a href="websites/overland_park.php">History of Overland Park</a><br><br>
						This was created for my CWEB 105 course at Johnson County Community College using Dreamweaver CS6. The assignment covered information about John Overland Park, Betsy Lenexa, inventions of the late 1800s, and more.
					</span>
				</div>

				<div>
					<figure>
						<a href="websites/my_lai.php">
							<img alt="" src="images/websites/my_lai.png" height="230" width="380">
						</a>
					</figure>
					<span>
						<a href="websites/my_lai.php">Report on My Lai Massacre</a><br><br>
						This was created as a final project for my CWEB 105 class at Johnson County Community College using Dreamweaver. I chose to research the My Lai Massacre during the Vietnam War, including information about key individuals, groups involved, events of the massacre, and the reprecussions that followed the event.
					</span>
				</div>
			</div>
		</div>

		
		<?php
			include 'php/footer.php';
			echo $footerCode;
		?>
	</body>
</html>
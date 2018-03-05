<!DOCTYPE HTML>
<html>
	<head>
		<title>Robert Casey Lafferty</title>
		<?php
			include 'php/header.php';
			echo $headerCode;
		?>
	</head>
	<body>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-108225602-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		  gtag('set', {'user_id': 'USER_ID'}); // Set the user ID using signed-in user_id.
		  ga('set', 'userId', 'USER_ID'); // Set the user ID using signed-in user_id.

		  gtag('config', 'UA-108225602-1');
		</script>

		<?php
			error_reporting(E_ERROR | E_PARSE | E_NOTICE);
			include 'php/navbar.php';
			include 'php/title.php';

			echo $navbarCode;

			echo "<div id=\"outerwrapper\">";
			echo $titleCode;

		?>
			<div class="header">
				<h2><a href="programming.php#games">Programming - Games</a></h2>
				<br>
			</div>
			<div class="hover07 column">
				<div>
					<figure>
						<a href="programming/games/cryocrypt.php">
							<img alt="" src="images/programming/cryocrypt.png" height="230" width="380">
						</a>
					</figure>
					<span>CryoCrypt Desktop Game (C#)</span>
				</div>

				<div>
					<figure>
						<a href="programming/games/securing_cyberville.php">
							<img alt="Securing Cyberville Promo Picture" src="images/programming/securing_cyberville.jpg" height="230" width="380">
						</a>
					</figure>
					<span>KSU Senior Project (C#)</span>
				</div>

				<div>
					<figure>
						<a href="programming/games/sand.php">
							<img alt="" src="images/programming/sand.png" height="230" width="380">
						</a>
					</figure>
					<span>Sand Desktop Game (C#)</span>
				</div>
			</div>

			<br><br><br><br>

			<div class="hover07 column">
				

				<div>
					<figure>
						<a href="programming/games/maze.php">
							<img alt="" src="images/programming/maze_1st_person.png" height="230" width="380">
						</a>
					</figure>
					<span>3D Maze Desktop Game (C#)</span>
				</div>
			</div>

			<br><br><br><br><hr><br><br>

			<div class="header">
				<h2><a href="programming.php#projects">Programming - Personal Projects</a></h2>
				<br>
			</div>
			<div class="hover07 column">
				<div>
					<figure>
						<a href="programming/personal/finance_tracker.php">
							<img alt="" src="images/programming/personal/finance_tracker.png" height="300" width="220">
						</a>
					</figure>
					<span>Finance Tracker (C#)</span>
				</div>
			
				<div>
					<figure>
						<a href="programming/personal/exp_calculator.php">
							<img alt="" src="images/programming/personal/exp_calculator.png" height="300" width="220">
						</a>
					</figure>
					<span>RS Experience Calculator (C#)</span>
				</div>
			</div>

			<br><br><br><br><hr>

			<div class="header">
				<h2><a href="websites.php">Websites</a></h2>
				<br>
			</div>
			<div class="hover07 column">
				<div>
					<figure>
						<a href="websites/overland_park.php">
							<img alt="" src="images/websites/overland_park.png" height="230" width="380">
						</a>
					</figure>
					<span>History of Overland Park</span>
				</div>
			
				<div>
					<figure>
						<a href="about.php">
							<img alt="" src="images/websites/personal.png" height="230" width="380">
						</a>
					</figure>
					<span>My Personal Website</span>
				</div>

				<div>
					<figure>
						<a href="websites/my_lai.php">
							<img alt="" src="images/websites/my_lai.png" height="230" width="380">
						</a>
					</figure>
					<span>Report on My Lai Massacre</span>
				</div>
			</div>


			<br><br>

		</div>
	</body>
</html>

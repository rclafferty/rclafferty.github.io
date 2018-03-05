<!DOCTYPE HTML>
<html>
	<head>
		<title>Lafferty - Programming</title>
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
				<div id="games">
					<h2>Games</h2>
				</div>
			</div>
			<div class="hover07_2 column2 hover_c">
				<div>
					<figure>
						<a href="programming/games/securing_cyberville.php">
							<img src="images/programming/securing_cyberville.jpg" alt="Securing Cyberville Promo Picture" width="380" height="230">
						</a>
					</figure>
					<span>
						<a href="programming/games/securing_cyberville.php">KSU Senior Project (C#)</a><br><br>
						Securing Cyberville was created as a senior project with one other person. The game is an educational video game that teaches everyday users about security threats.<br><br>
						Created during KSU CIS 590 Course
					</span>
				</div>
				
				<div>
					<figure>
						<a href="programming/games/cryocrypt.php">
							<img alt="" src="images/programming/cryocrypt.png" height="230" width="380">
						</a>
					</figure>
					<span>
						<a href="programming/games/cryocrypt.php">CryoCrypt Desktop Game (C#)</a><br><br>
						CryoCrypt is a futuristic puzzle game that requires the user to play to solve color-based puzzles to rescue stranded characters from failing life pods.<br><br>
						Created at KSU Game Jam 2015.
					</span>
				</div>
				<div>
					<figure>
						<a href="programming/games/sand.php">
							<img alt="" src="images/programming/sand.png" height="230" width="380">
						</a>
					</figure>
					<span>
						<a href="programming/gmaes/sand.php">Sand Desktop Game (C#)</a><br><br>
						Sand is a 2D game where two players fight to capture a jar of sand from each other while fending off enemy skeletons.<br><br>
						Created at Texas A&M Chillennium 2016.
					</span>
				</div>

				<div>
					<figure>
						<a href="programming/games/maze.php">
							<img alt="" src="images/programming/maze_1st_person.png" height="230" width="380">
						</a>
					</figure>
					<span>
						<a href="programming/games/maze.php">3D Maze Desktop Game (C#)</a><br><br>
						This 3D Maze game as created as a side project using Unity. It was created recently and is still a work-in-progress but so far I have a player-controlled ball in a standard maze.
					</span>
				</div>
			</div>

			<hr>

			<div class="header">
				<div id="projects">
					<h2>Personal Projects</h2>
				</div>
			</div>
			<div class="hover07_2 column2 hover_c">
				<div>
					<figure>
						<a href="programming/personal/finance_tracker.php">
							<img alt="" src="images/programming/personal/finance_tracker.png" height="300" width="220">
						</a>
					</figure>
					<span>
						<!--<h3><a href="programming/finance_tracker.php">Finance Tracker Application (C#)</a></h3>-->
						<a href="programming/personal/finance_tracker.php">Finance Tracker (C#)</a><br><br>
						An application to track a family's finances and give a report on individuals' expenses, budgets, and more.<br><br>
						[IN PROGRESS]
					</span>
				</div>
				<div>
					<figure>
						<a href="programming/personal/exp_calculator.php">
							<img alt="" src="images/programming/personal/exp_calculator.png" height="300" width="220">
						</a>
					</figure>
					<span>
						<a href="programming/personal/exp_calculator.php">Runescape Experience Calculator (C#)</a><br><br>
						An application to calculate the experience points needed for a Runescape player to level up all the different skills in the game.<br><br>
						[IN PROGRESS]
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
<!DOCTYPE HTML>
<html lang="en">
<head>
	<title>Robert Casey Lafferty About</title>
	<?php
		include 'php/print_header.php';
		echo $headerCode;
	?>
	<!--<meta name="keywords" content="Robert, Casey, Lafferty, Robert Lafferty, Casey Lafferty, Bob Lafferty, student, computer, science, computer science, cis, cs, cis student, cs student, kansas state university, kansas, state, university, ksu, k-state, cyber, defence, defense, cyber defense, cyber defence, security, cyber security, artificial, intelligence, artificial intelligence, ai, game, jam, game jam, dev, game dev, development, game development, teacher, teaching, assistant, teaching assistant, undergraduate, undergraduate ta, undergraduate teaching assistant, undergrad, ta, uta, virtual, choir, virtual choir, vc, music, cello, voice">-->
</head>
<body>
	<?php
			error_reporting(E_ERROR | E_PARSE | E_NOTICE);
			include 'php/navbar.php';
			include 'php/print_title.php';

			echo $navbarCode;

			echo "<div id=\"outerwrapper\">";
			echo $titleCode;

		?>
		
		<div id="academic">
			<h2>Academic Interests</h2>
		</div>

		<p>During my undergraduate career, I participated in the <a href="http://ksucyberdefencenews.blogspot.com">Cyber Defense Club</a> (CDC) at Kansas State University. This club exposes members to vulnerabilities in software and techniques to defend against them. In addition, I also enrolled in the Intro to Cyber Security (CIS 490) course at K-State. Combining that knowledge with the CDC gives me a solid foundation to expand upon.</p>
		
		<div class="header">
			<h2>Extra-Curricular Activities</h2>
		</div>

		<h3>ACM Programming Competition</h3>
		<p>Every semester, Kansas State University hosts their local Association for Computing Machinery (ACM) Programming Competition, which mirrors the structure of the regional and world competitions. I have had the privilege of competing in seven total K-State Association of Computing Machinery (ACM) programming competitions and two regional competitions. I was fortunate to place in the top five twice at the local competitions and in the top third both times in the regional competitions. I enjoyed the rush of the competitions and the learning experience that accompanied it.</p>

		<h3>Game Jams</h3>
		<p>Game development is a hobby inspired by my coursework and extra-curricular activities at K-State. I was a contender in the three K-State game jams, placing first in the first one. I enjoy competing because it is a great opportunity to highlight skills, network with colleagues and industry representatives, and learn new skills. In my first game jam, I had little experience in game development and absolutely no experience with game engines such as Unity or Unreal. I was fortunate to team up with someone who was familiar with Unity and learned a lot on the spot. In that same competition, we created <a href="programming/games/cryocrypt.php">CryoCrypt</a> and were awarded Best Art, Best Gameplay, and Best Overall.</p>
		<p>I also had the privilege of attending the <a href="http://www.chillennium.com/">Chillennium Game Jam</a> 2016 at Texas A&M University. This game jam is organized strictly by students for students and hosted by their Department of Visualization. It was a great opportunity to network with out-of-state students as well as companies based closer to Texas such as EA, Blizzard, Six Foot, and more. I personally had a blast and look forward to attending again in the future.</p>
		<h3>Boy Scouts of America</h3>
		<p>I was a part of the Boy Scouts of America for 16 years, starting with my Tiger cub group in August of 2000. Since then, I continued on into Boy Scouts in 2005, joined Venturing in 2009, and earned the rank of Eagle in September 2012. I stayed involved in Venturing as an adult advisor for Crew 75 in Manhattan, KS until May 2016. I enjoy staying involved because it is a great program and would like to see it continue.</p>

		<h3>Music Extracurriculars</h3>
		
		<p>As a music minor, I often found myself involved in music-related events, such as performing with community choirs, or music-related aspects of software development, to include audio and music for game development. In the 2015 holiday season, I auditioned and was chosen to be a part of <a href="http://ericwhitacre.com/glow">Disney's World of Color Honor Choir</a>. Many US singers submitted recordings of themselves singing individual parts of Glow, the song commissioned by Disney for this event, and submitted for selection. Roughly 700 recordings were chosen, combined into one (fantastic) video and projected onto a wall of water at California Adventure Park during the annual World of Color show. It was a great experience that I was also lucky enough to see it in-person.</p>
		<p>Another recent musical experience was the <a href="http://www.worldchoralfestival.com">World Choral Festival</a>. I had the pleasure of performing with singers from the USA, Ireland, England, Czech Republic, and a few other places for a week in Kansas City this summer (2016), which concluded with a final performance in the Kauffman Performing Arts Center. We performed songs from different composers in many different languages. It was a great bonding and networking experience for everyone involved. I look forward to participating again in the next one, which will be in Summer 2018.</p>

		<div id="more">
			<h2>More Information</h2>
		</div>
		
		<p>For more information about my work, check out my <a href="programming.php">programming</a> and <a href="websites.php">websites</a> pages. For more information about my experience and classwork, or how to contact me, download my <a href="documents/Robert_Casey_Lafferty_Resume.docx">resume</a>. I look forward to hearing from you!</p>
	<?php
		echo "</div>";
		include 'php/about_print_footer.php';
		echo $footerCode;
	?>
</body>
</html>

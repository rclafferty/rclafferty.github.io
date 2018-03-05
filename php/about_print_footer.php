<?php
	include 'date.php';
	$todayDate = $date;
	$footerCode = 	"<p>&nbsp;</p>" .
					"<footer>" .
						"<p><a href=\"about.php\">Click here for the normal view of this page</a></p>".
						"<p>Last Updated: " . $todayDate . "</p>" .
					"</footer>";
?>
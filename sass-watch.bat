@ECHO OFF

SET default_watch=styles
SET default_style=expanded
SET default_sourcemap=none

SET watch=%1
IF "%watch%"=="" (SET watch=%default_watch%)

SET style=%2
IF "%style%"=="" (SET style=%default_style%)

SET sourcemap=%3
IF "%sourcemap%"=="" (SET sourcemap=%default_sourcemap%)

sass --watch %watch% --style %style% --sourcemap=%sourcemap%
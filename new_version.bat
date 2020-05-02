@echo off
if "%1"=="" (
	echo No version number specified. Quitting.
	pause
) else (
	npm version %1 &&^
	git push --all &&^
	git push --tags &&^
	npm publish
)
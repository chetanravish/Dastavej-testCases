@echo off
echo ========================================
echo Running Dastavej API Regression Suite
echo ========================================

cd /d %~dp0..

npx newman run ^
postman/collections/Dastavej_Authentication_API.postman_collection.json ^
-e postman/environments/Dastavej_Production.postman_environment.json ^
--folder "API Regression" ^
-r cli,htmlextra,json ^
--reporter-json-export newman/reports/newman-report.json ^
--reporter-htmlextra-export newman/reports/newman-report.html

echo.
echo ========================================
echo Test Execution Completed
echo HTML Report Generated Successfully
echo ========================================
pause
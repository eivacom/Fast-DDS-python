@echo off
echo Building fastdds node package...
cd /d fastdds_javascript
call build_javascript.bat

echo Building fastdds hellow world node package...
cd /d fastdds_javascript_examples
call build_javascript.bat


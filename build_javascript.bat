@echo off
echo Cleaning up build directories...
rm -r .\build_swig\
rm -r .\build\

echo Running Conan build...
conan build . -pr:h=Visual-Studio-2022-v143-x64-RelWithDebInfo -pr:b=Visual-Studio-2022-v143-x64-RelWithDebInfo --build=missing

echo Running npm build...
npm run build


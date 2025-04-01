@echo off
echo Compiling SWIG wrapper 
call C:/Users/tvl/.conan2/p/b/swig4fe21ed3bac24/p/bin/swig.exe -I"C:/Program Files/eProsima/fastdds 3.1.2/include" -c++ -javascript -node src/swig/fastdds.i

echo Building node-gyp bundle
call npm run build
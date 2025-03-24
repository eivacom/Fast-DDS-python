@echo off
echo Compiling SWIG wrapper 
C:/Users/tvl/.conan2/p/b/swig4fe21ed3bac24/p/bin/swig.exe -I"C:/Program Files/eProsima/fastdds 3.1.2/include" -c++ -javascript -node master.i

echo Building node-gyp bundle
node-gyp rebuild --target=35.0.0 --arch=x64 --dist-url=https://electronjs.org/headers
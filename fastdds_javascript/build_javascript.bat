@echo off
echo Compiling SWIG wrapper 
C:/Users/tvl/.conan2/p/b/swig4fe21ed3bac24/p/bin/swig.exe -IC:/Users/tvl/.conan2/p/eiva-7e4aa1c6ead66/p/include -IC:/Users/tvl/.conan2/p/eiva-1aa07c1c70d2b/p/include -c++ -javascript -node src/swig/fastdds.i

echo Building node-gyp bundle
npm run build
@echo off
echo Compiling SWIG wrapper 
C:/Users/tvl/.conan2/p/b/swig4fe21ed3bac24/p/bin/swig.exe -IC:/Users/tvl/.conan2/p/b/eiva-cf579c7c05774/p/include -IC:/Users/tvl/.conan2/p/eiva-1aa07c1c70d2b/p/include -c++ -javascript -node master.i

echo Building node-gyp bundle
npm run build
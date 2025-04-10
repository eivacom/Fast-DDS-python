@echo off
setlocal enabledelayedexpansion

REM ==============================
REM Set environment
REM ==============================
echo Setting up MSVC x64 environment...
call "C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Auxiliary\Build\vcvars64.bat"
IF ERRORLEVEL 1 (
    echo Failed to set up MSVC environment.
    exit /b 1
)

REM ==============================
REM Create build directory
REM ==============================
if not exist build (
    mkdir build
)

REM ==============================
REM Run SWIG to generate C# files
REM ==============================
echo Running SWIG to generate C# wrapper...

set SWIG_PATH="C:\Users\tvl\.conan2\p\b\swig4fe21ed3bac24\p\bin\swig.exe"
set FASTDDS_INC="C:\Program Files\eProsima\fastdds 3.1.2\include"

%SWIG_PATH% -I%FASTDDS_INC% -c++ -csharp -outdir build master.i
IF ERRORLEVEL 1 (
    echo SWIG generation failed.
    exit /b 1
)

REM ==============================
REM Compile the wrapper
REM ==============================
echo Compiling C++ wrapper...

cl ^
    /c /EHsc /MD /GR /bigobj /Fo"build\\" ^
    master_wrap.cxx ^
    HelloWorldExample\HelloWorldPubSubTypes.cxx ^
    HelloWorldExample\HelloWorldTypeObjectSupport.cxx ^
    HelloWorldExample\LiveMapPubSubTypes.cxx ^
    HelloWorldExample\LiveMapTypeObjectSupport.cxx ^
    HelloWorldExample\VSLAMCorePubSubTypes.cxx ^
    HelloWorldExample\VSLAMCoreTypeObjectSupport.cxx ^
    /I"HelloWorldExample" ^
    /I%FASTDDS_INC%
IF ERRORLEVEL 1 (
    echo Compilation failed.
    exit /b 1
)

REM ==============================
REM Link the wrapper into a DLL
REM ==============================
echo Linking wrapper...

set FASTDDS_LIB="C:\Program Files\eProsima\fastdds 3.1.2\lib\x64Win64VS2019"
set OPENSSL_LIB="C:\Program Files\OpenSSL-Win64\lib\VC\x64\MD"
set WINSDK_LIB="C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\um\x64"

link ^
    /DLL /OUT:build\IdlsExample.dll ^
    build\master_wrap.obj ^
    build\HelloWorldPubSubTypes.obj ^
    build\HelloWorldTypeObjectSupport.obj ^
    build\LiveMapPubSubTypes.obj ^
    build\LiveMapTypeObjectSupport.obj ^
    build\VSLAMCorePubSubTypes.obj ^
    build\VSLAMCoreTypeObjectSupport.obj ^
    %FASTDDS_LIB%\libfastdds-3.1.lib ^
    %FASTDDS_LIB%\libfastcdr-2.2.lib ^
    %FASTDDS_LIB%\foonathan_memory-0.7.3.lib ^
    %OPENSSL_LIB%\libssl.lib ^
    %OPENSSL_LIB%\libcrypto.lib ^
    %WINSDK_LIB%\ShLwApi.Lib
IF ERRORLEVEL 1 (
    echo Linking failed.
    exit /b 1
)

echo.
echo ============================================
echo Build complete! Files are in the 'build' directory.
echo ============================================

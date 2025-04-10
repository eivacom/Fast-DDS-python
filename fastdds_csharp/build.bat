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

%SWIG_PATH% -I%FASTDDS_INC% -c++ -csharp -outdir build .\src\swig\fastdds.i
IF ERRORLEVEL 1 (
    echo SWIG generation failed.
    exit /b 1
)

REM ==============================
REM Compile the wrapper
REM ==============================
echo Compiling C++ wrapper...

cl /c /EHsc /MD /GR /bigobj /Fo"build\\" .\src\swig\fastdds_wrap.cxx /I"C:\Program Files\eProsima\fastdds 3.1.2\include"
IF ERRORLEVEL 1 (
    echo Compilation failed.
    exit /b 1
)

REM ==============================
REM Link the wrapper into a DLL
REM ==============================
echo Linking wrapper...

link /DLL /OUT:build\fastdds.dll build\fastdds_wrap.obj "C:\Program Files\eProsima\fastdds 3.1.2\lib\x64Win64VS2019\libfastdds-3.1.lib" "C:\Program Files\eProsima\fastdds 3.1.2\lib\x64Win64VS2019\libfastcdr-2.2.lib" "C:\Program Files\eProsima\fastdds 3.1.2\lib\x64Win64VS2019\foonathan_memory-0.7.3.lib" "C:\Program Files\OpenSSL-Win64\lib\VC\x64\MD\libssl.lib" "C:\Program Files\OpenSSL-Win64\lib\VC\x64\MD\libcrypto.lib" "C:\Program Files (x86)\Windows Kits\10\Lib\10.0.22621.0\um\x64\ShLwApi.Lib"
IF ERRORLEVEL 1 (
    echo Linking failed.
    exit /b 1
)

echo.
echo ============================================
echo Build complete! Files are in the 'build' directory.
echo ============================================

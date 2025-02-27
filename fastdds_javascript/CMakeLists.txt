cmake_minimum_required(VERSION 3.22)

# SWIG: use standard target name.
if(POLICY CMP0078)
  cmake_policy(SET CMP0078 NEW)
endif()

# SWIG: use SWIG_MODULE_NAME property.
if(POLICY CMP0086)
  cmake_policy(SET CMP0086 NEW)
endif()

project(fastdds_javascript VERSION 2.2.0)

# Set BUILD_TESTING to OFF by default.
if(NOT BUILD_TESTING)
    message(STATUS "Tests not compiled by default")
    set(BUILD_TESTING OFF CACHE BOOL "Enable testing" FORCE)
endif()

###############################################################################
# Dependencies
###############################################################################
set(SWIG_EXECUTABLE "C:/Users/tvl/.conan2/p/b/swig4fe21ed3bac24/p/bin/swig.exe")
find_package(SWIG)
if (NOT SWIG_FOUND)
    # Trick to find swig4.1 in Ubuntu noble.
    find_program(SWIG_EXECUTABLE NAMES swig4.1 swig)
    find_package(SWIG REQUIRED)
endif()

include(UseSWIG)
set(CMAKE_SWIG_FLAGS "")

find_package(Python3 COMPONENTS Interpreter Development REQUIRED)

# FastDDS dependencies
find_package(fastcdr REQUIRED)
find_package(fastdds 3 REQUIRED)

###############################################################################
# Project subdirectories
###############################################################################
add_subdirectory(src/swig)

###############################################################################
# Testing options
###############################################################################
enable_testing()
include(CTest)
if (BUILD_TESTING)
  add_subdirectory(test)
endif()

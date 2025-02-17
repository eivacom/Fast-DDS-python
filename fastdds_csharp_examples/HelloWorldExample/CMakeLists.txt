
cmake_minimum_required(VERSION 3.20)


###############################################################################
# Library for types defined in HelloWorld IDL
###############################################################################

message(STATUS "Configuring python wrapper for types in HelloWorld...")

###############################################################################
# Type library on C++

project(HelloWorld)

find_package(fastcdr REQUIRED)
find_package(fastdds 3 REQUIRED)

set(CMAKE_POSITION_INDEPENDENT_CODE ON)

#Create library for C++ types
add_library(${PROJECT_NAME} SHARED
        HelloWorldTypeObjectSupport.cxx
        HelloWorldPubSubTypes.cxx
        )
if(WIN32)
    target_compile_definitions(${PROJECT_NAME} PRIVATE EPROSIMA_USER_DLL_EXPORT)
endif(WIN32)
set_property(TARGET ${PROJECT_NAME} PROPERTY CXX_STANDARD 11)
target_include_directories(${PROJECT_NAME} PUBLIC
    ${PROJECT_SOURCE_DIR}
    )
target_link_libraries(${PROJECT_NAME}
    PUBLIC
    fastcdr
    fastdds::fastdds
    )

###############################################################################
# Python bindings for type
set(SWIG_EXECUTABLE "C:/Users/tvl/.conan2/p/b/swig4fe21ed3bac24/p/bin/swig.exe")
find_package(SWIG)
if (NOT SWIG_FOUND)
    # Trick to find swig4.1 in Ubuntu noble.
    find_program(SWIG_EXECUTABLE NAMES swig4.1 swig)
    find_package(SWIG REQUIRED)
endif()
include(UseSWIG)
set(CMAKE_SWIG_FLAGS "")

set(${PROJECT_NAME}_MODULE
    HelloWorldWrapper
    )

set(${PROJECT_NAME}_MODULE_FILES
    ${PROJECT_NAME}.i
    )

SET_SOURCE_FILES_PROPERTIES(
    ${${PROJECT_NAME}_MODULE_FILES}
    PROPERTIES CPLUSPLUS ON
    USE_TARGET_INCLUDE_DIRECTORIES TRUE
    )

SWIG_ADD_LIBRARY(${${PROJECT_NAME}_MODULE}
    TYPE SHARED
    LANGUAGE csharp
    SOURCES ${${PROJECT_NAME}_MODULE_FILES})

set_property(TARGET ${${PROJECT_NAME}_MODULE} PROPERTY CXX_STANDARD 11)
if(UNIX AND CMAKE_SIZEOF_VOID_P EQUAL 8)
    set_property(TARGET ${${PROJECT_NAME}_MODULE} PROPERTY SWIG_COMPILE_DEFINITIONS SWIGWORDSIZE64)
endif()

target_link_libraries(${${PROJECT_NAME}_MODULE}
    fastdds::fastdds
    ${PROJECT_NAME}
    )

# Find the installation path
#execute_process(COMMAND ${PYTHON_EXECUTABLE} -c "from distutils import sysconfig; print(sysconfig.get_python_lib(plat_specific=True, prefix='${CMAKE_INSTALL_PREFIX}'))"
#    OUTPUT_VARIABLE _ABS_PYTHON_MODULE_PATH
#    OUTPUT_STRIP_TRAILING_WHITESPACE
#    )
#
#get_filename_component (_ABS_PYTHON_MODULE_PATH ${_ABS_PYTHON_MODULE_PATH} ABSOLUTE)
#file (RELATIVE_PATH _REL_PYTHON_MODULE_PATH ${CMAKE_INSTALL_PREFIX} ${_ABS_PYTHON_MODULE_PATH})
#SET (PYTHON_MODULE_PATH
#    ${_REL_PYTHON_MODULE_PATH}/${PROJECT_NAME}
#    )
#
## Install
#install(TARGETS ${PROJECT_NAME}
#    RUNTIME DESTINATION bin/
#    LIBRARY DESTINATION lib/
#    ARCHIVE DESTINATION lib/
#    )
#install(TARGETS ${${PROJECT_NAME}_MODULE} DESTINATION ${PYTHON_MODULE_PATH})
#get_property(support_files TARGET ${${PROJECT_NAME}_MODULE} PROPERTY SWIG_SUPPORT_FILES)
#install(FILES ${support_files} DESTINATION ${PYTHON_MODULE_PATH} RENAME __init__.py)


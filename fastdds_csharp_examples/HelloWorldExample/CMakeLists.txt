# Copyright 2022 Proyectos y Sistemas de Mantenimiento SL (eProsima).
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

###############################################################################
# Compile python wrapper with SWIG
###############################################################################

message(STATUS "Configuring FastDDS wrapper for CSharp...")

set(LIB_INSTALL_DIR lib/ CACHE PATH "Installation directory for libraries")
file(GLOB_RECURSE DDS_TYPE_SOURCES_CXX "*.cxx")
file(GLOB_RECURSE DDS_TYPE_SOURCES_CPP "*.cpp")
add_library(dds_types ${DDS_TYPE_SOURCES_CXX} ${DDS_TYPE_SOURCES_CPP})


target_link_libraries(dds_types PUBLIC fastdds::fastdds)

set(${PROJECT_NAME}_MODULE
    fastdds_idl
    )

set(${PROJECT_NAME}_FILE
    ${CMAKE_CURRENT_BINARY_DIR}/${${PROJECT_NAME}_MODULE}.i
    )

file(GENERATE
    OUTPUT ${${PROJECT_NAME}_FILE}
    INPUT ${${PROJECT_NAME}_MODULE}.i
    )

set_source_files_properties(${${PROJECT_NAME}_FILE} PROPERTIES
    CPLUSPLUS ON
    USE_TARGET_INCLUDE_DIRECTORIES TRUE
    INCLUDE_DIRECTORIES ${CMAKE_CURRENT_SOURCE_DIR}
    )

option(BUILD_DOCUMENTATION "Use doxygen to create product documentation" OFF)
if (BUILD_DOCUMENTATION)
    set(CMAKE_SWIG_FLAGS "-doxygen")
endif (BUILD_DOCUMENTATION)

swig_add_library(${PROJECT_NAME}
    TYPE SHARED
    LANGUAGE csharp
    SOURCES
    ${${PROJECT_NAME}_FILE}
    )

if(UNIX AND CMAKE_SIZEOF_VOID_P EQUAL 8)
    set_property(TARGET ${PROJECT_NAME} PROPERTY
        SWIG_COMPILE_DEFINITIONS SWIGWORDSIZE64
        )
endif()

if(MSVC OR MSVC_IDE)
    target_compile_options(${PROJECT_NAME} PRIVATE /bigobj)
endif()

target_include_directories(${PROJECT_NAME} PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}
)
target_link_libraries(${PROJECT_NAME}
    fastcdr
    fastdds::fastdds
    dds_types
    )


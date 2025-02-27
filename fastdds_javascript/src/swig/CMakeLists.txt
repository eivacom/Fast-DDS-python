message(STATUS "Configuring FastDDS wrapper for JavaScript...")

# Set installation directory for libraries
set(LIB_INSTALL_DIR lib/ CACHE PATH "Installation directory for libraries")

# Set module name
set(MODULE_NAME fastdds)

# Set SWIG interface file path
set(SWIG_INTERFACE_FILE
    ${CMAKE_CURRENT_SOURCE_DIR}/${MODULE_NAME}.i
    )

# Include directories for Node.js and N-API
include_directories("C:/Users/tvl/AppData/Local/node-gyp/Cache/18.16.0/include/node")
include_directories("C:/source/Repos/Fast-DDS-python/node_modules/node-addon-api")

# Set SWIG file properties
set_source_files_properties(${SWIG_INTERFACE_FILE} PROPERTIES
    CPLUSPLUS ON
    USE_TARGET_INCLUDE_DIRECTORIES TRUE
    )

# Configure SWIG
set(CMAKE_SWIG_FLAGS "-node" "-c++")

# Add SWIG library
swig_add_library(${MODULE_NAME}
    TYPE MODULE
    LANGUAGE javascript
    SOURCES ${SWIG_INTERFACE_FILE}
    )

# Platform-specific settings
if(UNIX AND CMAKE_SIZEOF_VOID_P EQUAL 8)
    set_property(TARGET ${MODULE_NAME} PROPERTY
        SWIG_COMPILE_DEFINITIONS SWIGWORDSIZE64
        )
endif()

if(MSVC OR MSVC_IDE)
    target_compile_options(${MODULE_NAME} PRIVATE /bigobj)
    # Add Windows-specific link flags if needed
    set_target_properties(${MODULE_NAME} PROPERTIES
        LINK_FLAGS "/DELAYLOAD:node.exe"
        )
endif()

# Link libraries
target_link_libraries(${MODULE_NAME}
    fastcdr
    fastdds::fastdds
    "C:/Users/tvl/AppData/Local/node-gyp/Cache/18.16.0/x64/node.lib"
    )

# Set the output directory
set_target_properties(${MODULE_NAME} PROPERTIES
    LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
    RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
    )

# Installation
install(TARGETS ${MODULE_NAME}
    LIBRARY DESTINATION ${LIB_INSTALL_DIR}
    RUNTIME DESTINATION ${LIB_INSTALL_DIR}
    )

# Install the JavaScript wrapper file
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/${MODULE_NAME}.js
    DESTINATION ${LIB_INSTALL_DIR}
    )
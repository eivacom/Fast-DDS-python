# FindNode.cmake
# This module finds the Node.js headers and libraries
#
# It sets the following variables:
#  NODE_FOUND - True if Node.js was found
#  NODE_INCLUDE_DIRS - The Node.js include directories
#  NODE_LIBRARIES - The libraries needed to use Node.js

include(FindPackageHandleStandardArgs)

# Find node executable
find_program(NODE_EXECUTABLE 
  NAMES node nodejs
  DOC "Node.js interpreter"
)

if(NODE_EXECUTABLE)
  # Execute node to determine include path
  execute_process(
    COMMAND ${NODE_EXECUTABLE} -e "console.log(require('path').dirname(process.execPath))"
    OUTPUT_VARIABLE NODE_EXEC_PATH
    OUTPUT_STRIP_TRAILING_WHITESPACE
  )

  # Get Node.js version
  execute_process(
    COMMAND ${NODE_EXECUTABLE} --version
    OUTPUT_VARIABLE NODE_VERSION
    OUTPUT_STRIP_TRAILING_WHITESPACE
  )
  
  # Extract include directories
  execute_process(
    COMMAND ${NODE_EXECUTABLE} -e "console.log(require('node-addon-api').include)"
    OUTPUT_VARIABLE NODE_ADDON_API_DIR
    OUTPUT_STRIP_TRAILING_WHITESPACE
    ERROR_QUIET
  )

  # Find node includes
  find_path(NODE_INCLUDE_DIRS
    NAMES node.h
    PATHS
      ${NODE_EXEC_PATH}/include/node
      /usr/include/node
      /usr/include/nodejs
      /usr/local/include/node
      /usr/local/include/nodejs
    DOC "Node.js header files"
  )
  
  # If node-addon-api was found, add it to the include dirs
  if(NODE_ADDON_API_DIR)
    list(APPEND NODE_INCLUDE_DIRS ${NODE_ADDON_API_DIR})
  endif()
endif()

# If you need to link against any Node.js libraries
# (usually not needed for addons)
# find_library(NODE_LIBRARIES NAMES node nodejs)

# Set NODE_FOUND based on whether we found the necessary components
find_package_handle_standard_args(Node
  FOUND_VAR NODE_FOUND
  REQUIRED_VARS NODE_EXECUTABLE NODE_INCLUDE_DIRS
  VERSION_VAR NODE_VERSION
)

mark_as_advanced(NODE_EXECUTABLE NODE_INCLUDE_DIRS NODE_LIBRARIES)
{
  "targets": [
    {
      "target_name": "fastdds",
      "sources": [
        "./build_swig/src/swig/CMakeFiles/fastdds.dir/fastddsJAVASCRIPT_wrap.cxx"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
        "C:/Users/tvl/.conan2/p/eiva-eb917848503e2/p/include",
        "C:/Users/tvl/.conan2/p/eiva-1aa07c1c70d2b/p/include"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],
      "libraries": [
        "C:/Users/tvl/.conan2/p/eiva-1aa07c1c70d2b/p/lib/libfastcdr-2.2.lib",
        "C:/Users/tvl/.conan2/p/eiva-eb917848503e2/p/lib/libfastdds-3.1.lib"
      ],
    }
  ]
}
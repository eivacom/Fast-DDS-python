{
  "targets": [
    {
      "target_name": "fastdds",
      "sources": [
        "./build_swig/src/swig/CMakeFiles/fastdds.dir/fastddsJAVASCRIPT_wrap.cxx",
        "./fastdds_csharp_examples/HelloWorldExample/HelloWorldPubSubTypes.cxx",
        "./fastdds_csharp_examples/HelloWorldExample/HelloWorldTypeObjectSupport.cxx"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
        "C:/Users/tvl/.conan2/p/eiva-eb917848503e2/p/include",
        "C:/Users/tvl/.conan2/p/eiva-1aa07c1c70d2b/p/include",
        "C:/source/Repos/Fast-DDS-python/fastdds_javascript_examples/HelloWorldExample"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "msvs_settings": {
        "VCCLCompilerTool": {
          "RuntimeLibrary": 3,
          "ExceptionHandling": 1,
          "AdditionalOptions": [
            "/bigobj",
            "/GR",
            "/MD"
          ]
        }
      },
      "defines": [
        "NAPI_DISABLE_CPP_EXCEPTIONS",
        "FASTDDS_NO_AUTOLINK",
        "FASTRTPS_NO_LIB"
      ],      
      "libraries": [
        "C:/Users/tvl/.conan2/p/eiva-1aa07c1c70d2b/p/lib/libfastcdr-2.2.lib",
        "C:/Users/tvl/.conan2/p/eiva-eb917848503e2/p/lib/libfastdds-3.1.lib",
        "C:/Users/tvl/.conan2/p/foonaad5c88c228e49/p/lib/foonathan_memory-0.7.3.lib",
        "C:/Users/tvl/.conan2/p/tinyx4d92bd199a1ef/p/lib/tinyxml2.lib",
        "C:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/ShLwApi.Lib", # PathMatchSpecA
      ],
    }
  ]
}
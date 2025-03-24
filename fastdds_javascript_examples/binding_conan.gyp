{
  "variables": {
    "fastdds_include_path": "C:/Users/tvl/.conan2/p/b/eiva-cf579c7c05774/p/include",
    "fastcdr_include_path": "C:/Users/tvl/.conan2/p/eiva-1aa07c1c70d2b/p/include",
    "fastdds_lib_path": "C:/Users/tvl/.conan2/p/b/eiva-cf579c7c05774/p/lib/libfastdds-3.1.lib",
    "fastcdr_lib_path": "C:/Users/tvl/.conan2/p/eiva-1aa07c1c70d2b/p/lib/libfastcdr-2.2.lib",
    "foonathan_memory_lib_path": "C:/Users/tvl/.conan2/p/foonaad5c88c228e49/p/lib/foonathan_memory-0.7.3.lib",
    "tinyxml2_lib_path": "C:/Users/tvl/.conan2/p/tinyx4d92bd199a1ef/p/lib/tinyxml2.lib",
    "shlwapi_lib_path": "C:/Program Files (x86)/Windows Kits/10/Lib/10.0.22621.0/um/x64/ShLwApi.Lib", # PathMatchSpecA
  },
  "targets": [
    {
      "target_name": "hello_world",
      "sources": [
        "master_wrap.cxx",
        "HelloWorldExample/HelloWorldPubSubTypes.cxx",
        "HelloWorldExample/HelloWorldTypeObjectSupport.cxx"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
        "<(fastdds_include_path)",
        "<(fastcdr_include_path)",
        "HelloWorldExample"
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
        "<(fastcdr_lib_path)",
        "<(fastdds_lib_path)",
        "<(foonathan_memory_lib_path)",
        "<(tinyxml2_lib_path)",
        "<(shlwapi_lib_path)", # PathMatchSpecA
      ],
    }
  ]
}
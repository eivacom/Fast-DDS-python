{
  "variables": {
    "fastdds_include_path": "C:/Program Files/eProsima/fastdds 3.1.2/include",
    "fastdds_lib_path": "C:/Program Files/eProsima/fastdds 3.1.2/lib/x64Win64VS2019/libfastdds-3.1.lib",
    "fastcdr_lib_path": "C:/Program Files/eProsima/fastdds 3.1.2/lib/x64Win64VS2019/libfastcdr-2.2.lib",
    "foonathan_memory_lib_path": "C:/Program Files/eProsima/fastdds 3.1.2/lib/x64Win64VS2019/foonathan_memory-0.7.3.lib",
    "openssl_lib_path": "C:/Program Files/OpenSSL-Win64/lib/VC/x64/MD/libssl.lib",
    "crypto_lib_path": "C:/Program Files/OpenSSL-Win64/lib/VC/x64/MD/libcrypto.lib",
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
        "<(openssl_lib_path)",
        "<(crypto_lib_path)",
        "<(shlwapi_lib_path)", # PathMatchSpecA
      ],
    }
  ]
}
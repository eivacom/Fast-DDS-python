%module(directors="1", threads="1") fastdds_idl
 
//%import "../../fastdds_csharp/src/swig/fastdds.i"

// HelloWorld example
//%include "HelloWorldExample/HelloWorld.i"
//%include "HelloWorldExample/HelloWorldPubSubTypes.i"
 
// VSLAM
%include "VSLAMCore.i"
%include "VSLAMCorePubSubTypes.i"
%include "LiveMap.i"
%include "LiveMapPubSubTypes.i"
 
 
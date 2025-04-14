%module(directors="1", threads="1") fastdds_idl

%apply void *VOID_INT_PTR { void * }

// VSLAM
%include "VSLAMCore.i"
%include "VSLAMCorePubSubTypes.i"
%include "LiveMap.i"
%include "LiveMapPubSubTypes.i"
 
 
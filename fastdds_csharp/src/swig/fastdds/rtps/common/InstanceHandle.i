// Copyright 2022 Proyectos y Sistemas de Mantenimiento SL (eProsima).
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

%{
#include "fastdds/rtps/common/InstanceHandle.hpp"

// Define a hash method in global scope for InstanceHandle_t types
// This is necessary if we want other classes to hash an internal InstanceHandle_t
long hash(const eprosima::fastdds::rtps::InstanceHandle_t& handle)
{
    long ret = 0;
    for (unsigned int i = 0; i < 16; ++i)
    {
        ret = (ret * 31) ^ handle.value[i];
    }
    return ret;
}

%}

// SWIG does not support type conversion operators correctly unless converted to a normal method
%rename(get_guid) eprosima::fastdds::rtps::InstanceHandle_t::operator const GUID_t&;

%ignore eprosima::fastdds::rtps::InstanceHandleValue_t::operator [] const;
%ignore eprosima::fastdds::rtps::operator <<(std::ostream&, const InstanceHandle_t&);
%ignore eprosima::fastdds::rtps::operator >>(std::istream&, InstanceHandle_t&);
%rename(read_pointer_cast) eprosima::fastdds::rtps::InstanceHandleValue_t::operator const octet* () const;
%rename(write_pointer_cast) eprosima::fastdds::rtps::InstanceHandleValue_t::operator octet* ();
%ignore eprosima::fastdds::rtps::InstanceHandleValue_t::operator==;
%ignore eprosima::fastdds::rtps::InstanceHandleValue_t::operator<;

// Template for std::vector<InstanceHandle_t>
%template(InstanceHandleVector) std::vector<eprosima::fastdds::rtps::InstanceHandle_t>;
%typemap(doctype) std::vector<eprosima::fastdds::rtps::InstanceHandle_t>"InstanceHandleVector";

%csmethodmodifiers eprosima::fastdds::rtps::InstanceHandle_t::get_hash "private";
%csmethodmodifiers eprosima::fastdds::rtps::InstanceHandle_t::get_string "private";

%typemap(csinterfaces) eprosima::fastdds::rtps::InstanceHandle_t %{ global::System.IDisposable, global::System.IEquatable<InstanceHandle_t> %}
%typemap(cscode) eprosima::fastdds::rtps::InstanceHandle_t
%{
    public override bool Equals(object obj)
    {
        return obj is InstanceHandle_t other && Equals(other);
    }

    public override string ToString() {
        return get_string();
    }
    
    public override int GetHashCode() {
        return get_hash();
    }

    public static bool operator ==(InstanceHandle_t h1, InstanceHandle_t h2)
    {
        if (ReferenceEquals(p1, p2)) return true;
        if (p1 is null || p2 is null) return false;
        return h1.Equals(h2);
    }
    
    public static bool operator !=(InstanceHandle_t h1, InstanceHandle_t h2)
    {
        return !(h1 == h2);
    }
%}

// Declare the comparison operators as internal to the class
%extend eprosima::fastdds::rtps::InstanceHandle_t {
    bool Equals(InstanceHandle_t other) {
        return *self == other;
    }

    std::string get_string() const
    {
        std::ostringstream out;
        out << *$self;
        return out.str();
    }

    // Define the hash method using the global one
    long get_hash() const
    {
        return hash(*$self);
    }
}

%typemap(csbody) eprosima::fastdds::rtps::InstanceHandle_t %{
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal InstanceHandle_t(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  public static global::System.Runtime.InteropServices.HandleRef getCPtr(InstanceHandle_t obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  internal static global::System.Runtime.InteropServices.HandleRef swigRelease(InstanceHandle_t obj) {
    if (obj != null) {
      if (!obj.swigCMemOwn)
        throw new global::System.ApplicationException("Cannot release ownership as memory is not owned");
      global::System.Runtime.InteropServices.HandleRef ptr = obj.swigCPtr;
      obj.swigCMemOwn = false;
      obj.Dispose();
      return ptr;
    } else {
      return new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
    }
  }
%}


%include "fastdds/rtps/common/InstanceHandle.hpp"


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
#include "fastdds/rtps/common/Guid.hpp"

// Define a hash method in global scope for GUID_t types
// This is necessary if we want other classes to hash an internal GUID_t
long hash(const eprosima::fastdds::rtps::GUID_t& guid)
{
    return (hash(guid.guidPrefix) * 31) ^ hash(guid.entityId);
}
%}

// SWIG does not support type conversion operators correctly unless converted to a normal method
%rename(get_instance_handle) eprosima::fastdds::rtps::GUID_t::operator const InstanceHandle_t&;

// Ignore the global comparison operators and make them class-internal
%ignore eprosima::fastdds::rtps::operator==;
%ignore eprosima::fastdds::rtps::operator!=;
%ignore eprosima::fastdds::rtps::operator<;
%ignore eprosima::fastdds::rtps::operator <<(std::ostream&, const GUID_t&);
%ignore eprosima::fastdds::rtps::operator >>(std::istream&, GUID_t&);

%typemap(csinterfaces) eprosima::fastdds::rtps::GUID_t %{ global::System.IDisposable, global::System.IEquatable<GUID_t> %}
%typemap(cscode) eprosima::fastdds::rtps::GUID_t
%{
    public override bool Equals(object obj)
    {
        return obj is GUID_t other && Equals(other);
    }

    public override string ToString() {
        return get_string();
    }
    
    public override int GetHashCode() {
        return get_hash();
    }

    public static bool operator ==(GUID_t g1, GUID_t g2)
    {
        return g1.Equals(g2);
    }
    
    public static bool operator !=(GUID_t g1, GUID_t g2)
    {
        return !(g1 == g2);
    }
%}

// Declare the comparison operators as internal to the class
%extend eprosima::fastdds::rtps::GUID_t {
    bool Equals(GUID_t other) {
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

%include "fastdds/rtps/common/Guid.hpp"
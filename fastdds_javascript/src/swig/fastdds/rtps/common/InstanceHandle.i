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

%include "fastdds/rtps/common/InstanceHandle.hpp"



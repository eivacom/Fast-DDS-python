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
#include "fastdds/rtps/common/GuidPrefix_t.hpp"

// Define a hash method in global scope for GuidPrefix_t types
// This is necessary if we want other classes to hash an internal GuidPrefix_t
long hash(const eprosima::fastdds::rtps::GuidPrefix_t& prefix)
{
    long ret = 0;
    for (unsigned int i = 0; i < eprosima::fastdds::rtps::GuidPrefix_t::size; ++i)
    {
        ret = (ret * 31) ^ prefix.value[i];
    }
    return ret;
}

%}


%ignore eprosima::fastdds::rtps::operator <<(std::ostream&, const GuidPrefix_t&);
%ignore eprosima::fastdds::rtps::operator >>(std::istream&, GuidPrefix_t&);

%ignore eprosima::fastdds::rtps::GuidPrefix_t::operator==;
%ignore eprosima::fastdds::rtps::GuidPrefix_t::operator!=;
%ignore eprosima::fastdds::rtps::GuidPrefix_t::operator<;


%include "fastdds/rtps/common/GuidPrefix_t.hpp"
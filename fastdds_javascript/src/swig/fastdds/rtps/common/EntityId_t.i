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
#include "fastdds/rtps/common/EntityId_t.hpp"

long hash(const eprosima::fastdds::rtps::EntityId_t& id)
{
    long ret = 0;
    for (unsigned int i = 0; i < eprosima::fastdds::rtps::EntityId_t::size; ++i)
    {
        ret = (ret * 31) ^ id.value[i];
    }
    return ret;
}

%}

// Overloaded constructor ignored
%ignore eprosima::fastdds::rtps::EntityId_t::EntityId_t(EntityId_t &&);
%ignore eprosima::fastdds::rtps::operator <<(std::ostream&, const EntityId_t&);
%ignore eprosima::fastdds::rtps::operator >>(std::istream&, EntityId_t&);
%ignore eprosima::fastdds::rtps::operator==;
%ignore eprosima::fastdds::rtps::operator!=;
%ignore eprosima::fastdds::rtps::EntityId_t::operator<;

%ignore std::hash<eprosima::fastdds::rtps::EntityId_t>;
%ignore std::hash<eprosima::fastdds::rtps::EntityId_t>::operator();
%ignore std::hash<>;

%include "fastdds/rtps/common/EntityId_t.hpp"








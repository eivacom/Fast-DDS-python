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

%csmethodmodifiers eprosima::fastdds::rtps::EntityId_t::get_hash "private";
%csmethodmodifiers eprosima::fastdds::rtps::EntityId_t::get_string "private";

%typemap(csinterfaces) eprosima::fastdds::rtps::EntityId_t %{ global::System.IDisposable, global::System.IEquatable<EntityId_t> %}
%typemap(cscode) eprosima::fastdds::rtps::EntityId_t
%{
    public override bool Equals(object obj)
    {
        return obj is EntityId_t other && Equals(other);
    }

    public override string ToString() {
        return get_string();
    }
    
    public override int GetHashCode() {
        return get_hash();
    }
%}

%extend eprosima::fastdds::rtps::EntityId_t {
    bool Equals(EntityId_t other) {
        return *self == other;
    }

    std::string get_string() const
    {
        std::ostringstream out;
        out << *$self;
        return out.str();
    }

    int get_hash() const
    {
        return std::hash<eprosima::fastdds::rtps::EntityId_t>{}(*$self);
    }
}


%include "fastdds/rtps/common/EntityId_t.hpp"








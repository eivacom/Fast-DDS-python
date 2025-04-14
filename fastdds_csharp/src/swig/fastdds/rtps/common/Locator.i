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
#include "fastdds/rtps/common/Locator.hpp"
%}

// Ignore overloaded constructor and methods that have no effect on target language
%ignore eprosima::fastdds::rtps::Locator_t::Locator_t(Locator_t&&);
%ignore eprosima::fastdds::rtps::operator <(const Locator_t&, const Locator_t&); // C# Specific
%ignore eprosima::fastdds::rtps::operator <<(std::ostream&, const Locator_t&);
%ignore eprosima::fastdds::rtps::operator >>(std::istream&, Locator_t&);
%ignore eprosima::fastdds::rtps::operator ==(const Locator_t&, const Locator_t&);
%ignore eprosima::fastdds::rtps::operator !=(const Locator_t&, const Locator_t&);

%ignore eprosima::fastdds::rtps::Locator_t::get_address();

%include "fastdds/rtps/common/Locator.hpp"


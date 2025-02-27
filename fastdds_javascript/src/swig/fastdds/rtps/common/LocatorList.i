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
#include "fastdds/rtps/common/LocatorList.hpp"
#include "fastdds/rtps/common/LocatorsIterator.hpp"
%}

// Ignore deprecated methods
%ignore eprosima::fastdds::rtps::LocatorList::contains;

// Ignore overloaded constructor that have no effect on target language
%ignore eprosima::fastdds::rtps::LocatorList::LocatorList(LocatorList&&);
%ignore eprosima::fastdds::rtps::operator <<(std::ostream&, const LocatorList&);
%ignore eprosima::fastdds::rtps::operator >>(std::istream&, LocatorList&);

// Compilation errors due to these functions
%ignore eprosima::fastdds::rtps::Locators::operator ==(const LocatorsIterator& other) const;
%ignore eprosima::fastdds::rtps::Locators::operator !=(const LocatorsIterator& other) const;

%ignore eprosima::fastdds::rtps::LocatorListIterator;
%ignore eprosima::fastdds::rtps::LocatorListConstIterator;

// Ignore `operator==` and `operator!=` for `LocatorsIterator`
%ignore eprosima::fastdds::rtps::LocatorsIterator::operator==;
%ignore eprosima::fastdds::rtps::LocatorsIterator::operator!=;

// Ignore `operator==` and `operator!=` for `LocatorList`
%ignore eprosima::fastdds::rtps::LocatorList::operator==;
%ignore eprosima::fastdds::rtps::LocatorList::operator!=;

%ignore eprosima::fastdds::rtps::LocatorList::begin() const;
%ignore eprosima::fastdds::rtps::LocatorList::end() const;

// Todo should override?
%ignore eprosima::fastdds::rtps::LocatorList::copy_to(eprosima::fastdds::ResourceLimitedVector<Locator>&) const;

%include "fastdds/rtps/common/LocatorsIterator.hpp"
%include "fastdds/rtps/common/LocatorList.hpp"


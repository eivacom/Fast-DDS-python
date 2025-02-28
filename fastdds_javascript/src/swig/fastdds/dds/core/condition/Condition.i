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
#include "fastdds/dds/core/condition/Condition.hpp"
#include "fastdds/dds/core/condition/StatusCondition.hpp"
#include "fastdds/dds/core/condition/GuardCondition.hpp"
#include "fastdds/dds/subscriber/ReadCondition.hpp"
%}

// Ignore StatusCondition constructor
%ignore eprosima::fastdds::dds::StatusCondition::StatusCondition;
%ignore eprosima::fastdds::dds::StatusCondition::~StatusCondition;
// Ignore ReadCondition constructor
%ignore eprosima::fastdds::dds::ReadCondition::ReadCondition;
%ignore eprosima::fastdds::dds::ReadCondition::~ReadCondition;


%extend eprosima::fastdds::dds::StatusCondition
{
    std::string ToString()
    {
        return "StatusCondition";
    }

    bool Equals(eprosima::fastdds::dds::StatusCondition* other)
    {
        return other == self;
    }
}

%extend eprosima::fastdds::dds::GuardCondition
{
    std::string ToString()
    {
        return "GuardCondition";
    }

    bool Equals(eprosima::fastdds::dds::GuardCondition* other)
    {
        return other == self;
    }
}

%extend eprosima::fastdds::dds::ReadCondition
{
    std::string ToString()
    {
        return "ReadCondition";
    }

    bool Equals(eprosima::fastdds::dds::ReadCondition* other)
    {
        return other == self;
    }
}

// Add explicit casting support
%extend eprosima::fastdds::dds::Condition {
    static eprosima::fastdds::dds::StatusCondition* as_StatusConditions(eprosima::fastdds::dds::Condition* obj) {
        return dynamic_cast<eprosima::fastdds::dds::StatusCondition*>(obj);
    }
}

// Template for ConditionSeq
%template(ConditionSeq) std::vector<eprosima::fastdds::dds::Condition*>;

%include "fastdds/dds/core/condition/Condition.hpp"
%include "fastdds/dds/core/condition/StatusCondition.hpp"
%include "fastdds/dds/core/condition/GuardCondition.hpp"
%include "fastdds/dds/subscriber/InstanceState.hpp"
%include "fastdds/dds/subscriber/SampleState.hpp"
%include "fastdds/dds/subscriber/ViewState.hpp"
%include "fastdds/dds/subscriber/ReadCondition.hpp"

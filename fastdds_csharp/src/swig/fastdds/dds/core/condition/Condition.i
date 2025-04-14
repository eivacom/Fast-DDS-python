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

%csmethodmodifiers eprosima::fastdds::dds::Condition::ToString "public override"

%exception eprosima::fastdds::dds::Condition::to_status_condition()
{
    try
    {
        $action
    }
    catch(std::bad_cast ex)
    {
        SWIG_CSharpSetPendingException(SWIG_CSharpInvalidCastException, "Bad cast of Condition");
    }
}

%exception eprosima::fastdds::dds::Condition::to_guard_condition()
{
    try
    {
        $action
    }
    catch(std::bad_cast ex)
    {
        SWIG_CSharpSetPendingException(SWIG_CSharpInvalidCastException, "Bad cast of Condition");
    }
}

%exception eprosima::fastdds::dds::Condition::to_read_condition()
{
    try
    {
        $action
    }
    catch(std::bad_cast ex)
    {
        SWIG_CSharpSetPendingException(SWIG_CSharpInvalidCastException, "Bad cast of Condition");
    }
}

%extend eprosima::fastdds::dds::Condition
{
    std::string ToString()
    {
        if (nullptr != dynamic_cast<eprosima::fastdds::dds::StatusCondition*>(self))
        {
            return "StatusCondition";
        }
        else if (nullptr != dynamic_cast<eprosima::fastdds::dds::GuardCondition*>(self))
        {
            return "GuardCondition";
        }
        else if (nullptr != dynamic_cast<eprosima::fastdds::dds::ReadCondition*>(self))
        {
            return "ReadCondition";
        }

        return "None";
    }

    eprosima::fastdds::dds::StatusCondition* to_status_condition()
    {
        eprosima::fastdds::dds::StatusCondition* status_cond =
            dynamic_cast<eprosima::fastdds::dds::StatusCondition*>(self);

        if (nullptr == status_cond)
        {
            throw std::bad_cast();
        }

        return status_cond;
    }

    eprosima::fastdds::dds::GuardCondition* to_guard_condition()
    {
        eprosima::fastdds::dds::GuardCondition* guard_cond =
            dynamic_cast<eprosima::fastdds::dds::GuardCondition*>(self);

        if (nullptr == guard_cond)
        {
            throw std::bad_cast();
        }

        return guard_cond;
    }

    eprosima::fastdds::dds::ReadCondition* to_read_condition()
    {
        eprosima::fastdds::dds::ReadCondition* read_cond =
            dynamic_cast<eprosima::fastdds::dds::ReadCondition*>(self);

        if (nullptr == read_cond)
        {
            throw std::bad_cast();
        }

        return read_cond;
    }
}

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

// Template for ConditionSeq
%template(ConditionSeq) std::vector<eprosima::fastdds::dds::Condition*>;

%include "fastdds/dds/core/condition/Condition.hpp"
%include "fastdds/dds/core/condition/StatusCondition.hpp"
%include "fastdds/dds/core/condition/GuardCondition.hpp"
%include "fastdds/dds/subscriber/InstanceState.hpp"
%include "fastdds/dds/subscriber/SampleState.hpp"
%include "fastdds/dds/subscriber/ViewState.hpp"
%include "fastdds/dds/subscriber/ReadCondition.hpp"

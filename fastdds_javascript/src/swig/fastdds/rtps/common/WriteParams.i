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
#include "fastdds/rtps/common/WriteParams.hpp"
%}

// Ignore overloaded constructor and methods that have no effect on target language
%ignore eprosima::fastdds::rtps::WriteParams::WriteParams(WriteParams &&);
%ignore eprosima::fastdds::rtps::WriteParams::sample_identity(SampleIdentity &&);
%ignore eprosima::fastdds::rtps::WriteParams::related_sample_identity(SampleIdentity &&);

// Rename the getter method to sample_identity
%rename("get_sample_identity") eprosima::fastdds::rtps::WriteParams::sample_identity() const;

// Rename the setter method to sample_identity
%rename("set_sample_identity") eprosima::fastdds::rtps::SampleIdentity::sample_identity();

// Rename the getter method to related_sample_identity
%rename("get_related_sample_identity") eprosima::fastdds::rtps::WriteParams::related_sample_identity() const;

// Rename the setter method to related_sample_identity
%rename("set_related_sample_identity") eprosima::fastdds::rtps::SampleIdentity::related_sample_identity();

// Rename the getter method to related_source_timestamp
%rename("get_source_timestamp") eprosima::fastdds::rtps::WriteParams::source_timestamp() const;

// Rename the setter method to related_source_timestamp
%rename("set_source_timestamp") eprosima::fastdds::rtps::SampleIdentity::source_timestamp();

// Rename the getter method to related_source_timestamp
%rename("get_source_timestamp") eprosima::fastdds::rtps::WriteParams::source_timestamp(const Time_t&);

// Rename the setter method to related_source_timestamp
%rename("set_source_timestamp") eprosima::fastdds::rtps::SampleIdentity::source_timestamp(Time_t&&);

%include "fastdds/rtps/common/WriteParams.hpp"

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
#include "fastdds/dds/topic/qos/TopicQos.hpp"
%}

%ignore eprosima::fastdds::dds::TopicQos::representation;

%ignore eprosima::fastdds::dds::TopicQos::operator ==(const TopicQos&) const;

// Ignore setter TODO should extend getter and setter
%ignore eprosima::fastdds::dds::TopicQos::ownership();
%ignore eprosima::fastdds::dds::TopicQos::lifespan();
%ignore eprosima::fastdds::dds::TopicQos::transport_priority();
%ignore eprosima::fastdds::dds::TopicQos::resource_limits();
%ignore eprosima::fastdds::dds::TopicQos::history();
%ignore eprosima::fastdds::dds::TopicQos::destination_order();
%ignore eprosima::fastdds::dds::TopicQos::reliability();
%ignore eprosima::fastdds::dds::TopicQos::liveliness();
%ignore eprosima::fastdds::dds::TopicQos::latency_budget();
%ignore eprosima::fastdds::dds::TopicQos::deadline();
%ignore eprosima::fastdds::dds::TopicQos::durability_service();
%ignore eprosima::fastdds::dds::TopicQos::durability();
%ignore eprosima::fastdds::dds::TopicQos::topic_data();

%include "fastdds/dds/topic/qos/TopicQos.hpp"

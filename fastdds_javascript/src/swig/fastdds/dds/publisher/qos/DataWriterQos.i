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
#include "fastdds/dds/publisher/qos/DataWriterQos.hpp"
%}

%ignore eprosima::fastdds::dds::DataWriterQos::representation;
%ignore eprosima::fastdds::dds::DataWriterQos::throughput_controller;

%ignore eprosima::fastdds::dds::DataWriterQos::operator ==(const DataWriterQos&) const;
%ignore eprosima::fastdds::dds::RTPSReliableWriterQos::operator ==(const RTPSReliableWriterQos&) const;

// Ignore setter TODO should extend getter and setter
%ignore eprosima::fastdds::dds::DataWriterQos::data_sharing();
%ignore eprosima::fastdds::dds::DataWriterQos::writer_resource_limits();
%ignore eprosima::fastdds::dds::DataWriterQos::endpoint();
%ignore eprosima::fastdds::dds::DataWriterQos::reliable_writer_qos();
%ignore eprosima::fastdds::dds::DataWriterQos::properties();
%ignore eprosima::fastdds::dds::DataWriterQos::publish_mode();
%ignore eprosima::fastdds::dds::DataWriterQos::writer_data_lifecycle();
%ignore eprosima::fastdds::dds::DataWriterQos::ownership_strength();
%ignore eprosima::fastdds::dds::DataWriterQos::ownership();
%ignore eprosima::fastdds::dds::DataWriterQos::user_data();
%ignore eprosima::fastdds::dds::DataWriterQos::lifespan();
%ignore eprosima::fastdds::dds::DataWriterQos::transport_priority();
%ignore eprosima::fastdds::dds::DataWriterQos::resource_limits();
%ignore eprosima::fastdds::dds::DataWriterQos::history();
%ignore eprosima::fastdds::dds::DataWriterQos::destination_order();
%ignore eprosima::fastdds::dds::DataWriterQos::reliability();
%ignore eprosima::fastdds::dds::DataWriterQos::liveliness();
%ignore eprosima::fastdds::dds::DataWriterQos::latency_budget();
%ignore eprosima::fastdds::dds::DataWriterQos::deadline();
%ignore eprosima::fastdds::dds::DataWriterQos::durability_service();
%ignore eprosima::fastdds::dds::DataWriterQos::durability();

%include "fastdds/dds/publisher/qos/DataWriterQos.hpp"

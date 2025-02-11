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
#include "fastdds/dds/subscriber/qos/DataReaderQos.hpp"
%}

%ignore eprosima::fastdds::dds::DataReaderQos::operator ==(const DataReaderQos&) const;
%ignore eprosima::fastdds::dds::RTPSReliableReaderQos::operator ==(const RTPSReliableReaderQos&) const;
%ignore eprosima::fastdds::dds::ReaderResourceLimitsQos::operator ==(const ReaderResourceLimitsQos&) const;

// Ignore setter TODO should extend getter and setter
%ignore eprosima::fastdds::dds::DataReaderQos::data_sharing();
%ignore eprosima::fastdds::dds::DataReaderQos::reader_resource_limits();
%ignore eprosima::fastdds::dds::DataReaderQos::endpoint();
%ignore eprosima::fastdds::dds::DataReaderQos::properties();
%ignore eprosima::fastdds::dds::DataReaderQos::representation();
%ignore eprosima::fastdds::dds::DataReaderQos::type_consistency();
%ignore eprosima::fastdds::dds::DataReaderQos::reliable_reader_qos();
%ignore eprosima::fastdds::dds::DataReaderQos::durability_service();
%ignore eprosima::fastdds::dds::DataReaderQos::lifespan();
%ignore eprosima::fastdds::dds::DataReaderQos::reader_data_lifecycle();
%ignore eprosima::fastdds::dds::DataReaderQos::time_based_filter();
%ignore eprosima::fastdds::dds::DataReaderQos::ownership();
%ignore eprosima::fastdds::dds::DataReaderQos::user_data();
%ignore eprosima::fastdds::dds::DataReaderQos::resource_limits();
%ignore eprosima::fastdds::dds::DataReaderQos::history();
%ignore eprosima::fastdds::dds::DataReaderQos::destination_order();
%ignore eprosima::fastdds::dds::DataReaderQos::reliability();
%ignore eprosima::fastdds::dds::DataReaderQos::liveliness();
%ignore eprosima::fastdds::dds::DataReaderQos::latency_budget();
%ignore eprosima::fastdds::dds::DataReaderQos::deadline();
%ignore eprosima::fastdds::dds::DataReaderQos::durability();

%include "fastdds/dds/subscriber/qos/DataReaderQos.hpp"

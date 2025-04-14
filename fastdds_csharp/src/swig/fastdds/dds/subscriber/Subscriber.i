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
#include "fastdds/dds/subscriber/Subscriber.hpp"
%}

%ignore eprosima::fastdds::dds::Subscriber::Subscriber;
%ignore eprosima::fastdds::dds::Subscriber::~Subscriber;

// Ignore setter TODO should extend getter and setter
%ignore eprosima::fastdds::dds::Subscriber::get_default_datareader_qos();


%include "fastdds/dds/subscriber/Subscriber.hpp"

// Extend the Subscriber class to add our new method
%extend eprosima::fastdds::dds::Subscriber {
    eprosima::fastdds::dds::DataReader* create_datareader(
        eprosima::fastdds::dds::Topic* topic,
            const eprosima::fastdds::dds::DataReaderQos& reader_qos,
            eprosima::fastdds::dds::DataReaderListener* listener = nullptr,
            const eprosima::fastdds::dds::StatusMask& mask = StatusMask::all(),
            std::shared_ptr<fastdds::rtps::IPayloadPool> payload_pool = nullptr) {
        return $self->create_datareader(
            topic,
            reader_qos,
            listener,
            mask,
            payload_pool);
    }
}

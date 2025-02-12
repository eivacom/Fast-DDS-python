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

// This class contains a 'const char*' member that may leak on destruction
// However, converting it to a 'char*' does not
// SWIG is very special)
%{
#include "fastdds/dds/core/policy/QosPolicies.hpp"
%}

%ignore eprosima::fastdds::dds::WireProtocolConfigQos::throughput_controller;

// TODO (richiware) review when api
// SWIG does not support templates in the generated binding,
// because not all output languages support them
// We must explicitly declare the specializations of the templates
%template(TransportDescriptorInterfaceShrPtr) std::shared_ptr<eprosima::fastdds::rtps::TransportDescriptorInterface>;
%template(TransportDescriptorInterfaceVector) std::vector<std::shared_ptr<eprosima::fastdds::rtps::TransportDescriptorInterface>>;
// The 'enum' here is very important, or SWIG will create a faulty wrapper
//    * Enums are mapped as integer constants
//    * The template expects a class type
//    * Trying to push a mapped enum value (integer) will result on an error because it is not the expected type
%template(DataRepresentationIdVector) std::vector<enum eprosima::fastdds::dds::DataRepresentationId>;

// The class PartitionQosPolicy::const_iterator does not have default constructor
// This tells SWIG it must wrap the constructors or the compilation will fail
%feature("valuewrapper") eprosima::fastdds::dds::PartitionQosPolicy::const_iterator;

// Once flattened, these give very unusual errors
%ignore eprosima::fastdds::dds::PartitionQosPolicy::const_iterator::operator->;

// Need to create a custom name for the flattened iterator
// since other classes also define the same inner class
%rename (PartitionQosPolicy_const_iterator) eprosima::fastdds::dds::PartitionQosPolicy::const_iterator;

// Ignore overloaded constructor that have no effect on target language
%ignore eprosima::fastdds::dds::TypeIdV1::TypeIdV1(TypeIdV1 &&);
%ignore eprosima::fastdds::dds::TypeObjectV1::TypeObjectV1(TypeObjectV1 &&);
%ignore eprosima::fastdds::dds::xtypes::TypeInformationParameter::TypeInformationParameter(TypeInformationParameter &&);

namespace eprosima {
namespace fastdds {
namespace dds {
    struct ParticipantResourceLimitsQos : public fastdds::rtps::RTPSParticipantAllocationAttributes {};
    struct PropertyPolicyQos : public fastdds::rtps::PropertyPolicy {};
}
}
}

%ignore eprosima::fastdds::dds::DurabilityQosPolicy::operator ==(const DurabilityQosPolicy&) const;
%ignore eprosima::fastdds::dds::DeadlineQosPolicy::operator ==(const DeadlineQosPolicy&) const;
%ignore eprosima::fastdds::dds::QosPolicy::operator ==(const QosPolicy &) const;
%ignore eprosima::fastdds::dds::EntityFactoryQosPolicy::operator ==(const EntityFactoryQosPolicy&) const;
%ignore eprosima::fastdds::dds::LatencyBudgetQosPolicy::operator ==(const LatencyBudgetQosPolicy&) const;
%ignore eprosima::fastdds::dds::LivelinessQosPolicy::operator ==(const LivelinessQosPolicy&) const;
%ignore eprosima::fastdds::dds::ReliabilityQosPolicy::operator ==(const ReliabilityQosPolicy&) const;
%ignore eprosima::fastdds::dds::OwnershipQosPolicy::operator ==(const OwnershipQosPolicy&) const;
%ignore eprosima::fastdds::dds::DestinationOrderQosPolicy::operator ==(const DestinationOrderQosPolicy&) const;
%ignore eprosima::fastdds::dds::GenericDataQosPolicy::operator ==(const GenericDataQosPolicy&) const;
%ignore eprosima::fastdds::dds::GenericDataQosPolicy::operator ==(const collection_type&) const;
%ignore eprosima::fastdds::dds::TimeBasedFilterQosPolicy::operator ==(const TimeBasedFilterQosPolicy&) const;
%ignore eprosima::fastdds::dds::PresentationQosPolicy::operator ==(const PresentationQosPolicy&) const;
%ignore eprosima::fastdds::dds::Partition_t::operator ==(const Partition_t&) const;
%ignore eprosima::fastdds::dds::Partition_t::operator !=(const Partition_t&) const;
%ignore eprosima::fastdds::dds::PartitionQosPolicy::const_iterator::operator ==(const self_type&) const;
%ignore eprosima::fastdds::dds::PartitionQosPolicy::const_iterator::operator !=(const self_type&) const;
%ignore eprosima::fastdds::dds::PartitionQosPolicy::operator ==(const PartitionQosPolicy&) const;
%ignore eprosima::fastdds::dds::HistoryQosPolicy::operator ==(const HistoryQosPolicy&) const;
%ignore eprosima::fastdds::dds::DeadlineQosPolicy::operator ==(const DeadlineQosPolicy&) const;
%ignore eprosima::fastdds::dds::ResourceLimitsQosPolicy::operator ==(const ResourceLimitsQosPolicy&) const;
%ignore eprosima::fastdds::dds::DurabilityServiceQosPolicy::operator ==(const DurabilityServiceQosPolicy&) const;
%ignore eprosima::fastdds::dds::LifespanQosPolicy::operator ==(const LifespanQosPolicy&) const;
%ignore eprosima::fastdds::dds::OwnershipStrengthQosPolicy::operator ==(const OwnershipStrengthQosPolicy&) const;
%ignore eprosima::fastdds::dds::TransportPriorityQosPolicy::operator ==(const TransportPriorityQosPolicy&) const;
%ignore eprosima::fastdds::dds::PublishModeQosPolicy::operator ==(const PublishModeQosPolicy&) const;
%ignore eprosima::fastdds::dds::DataRepresentationQosPolicy::operator ==(const DataRepresentationQosPolicy&) const;
%ignore eprosima::fastdds::dds::TypeConsistencyEnforcementQosPolicy::operator ==(const TypeConsistencyEnforcementQosPolicy&) const;
%ignore eprosima::fastdds::dds::DisablePositiveACKsQosPolicy::operator ==(const DisablePositiveACKsQosPolicy&) const;
%ignore eprosima::fastdds::dds::WireProtocolConfigQos::operator ==(const WireProtocolConfigQos&) const;
%ignore eprosima::fastdds::dds::TransportConfigQos::operator ==(const TransportConfigQos&) const;
%ignore eprosima::fastdds::dds::RTPSEndpointQos::operator ==(const RTPSEndpointQos&) const;
%ignore eprosima::fastdds::dds::WriterResourceLimitsQos::operator ==(const WriterResourceLimitsQos&) const;
%ignore eprosima::fastdds::dds::DataSharingQosPolicy::operator ==(const DataSharingQosPolicy&) const;

// Ignore setter TODO should extend getter and setter
%ignore eprosima::fastdds::dds::DataSharingQosPolicy::data_sharing_listener_thread();
%ignore eprosima::fastdds::dds::GenericDataQosPolicy::data_vec();

// SWIG does not support templates in the generated binding,
// because not all output languages support them
// We must explicitly declare the specializations of the templates
resource_limited_vector_template(OctetResourceLimitedVector, eprosima::fastdds::rtps::octet)

%include "fastdds/dds/core/policy/QosPolicies.hpp"

%exception eprosima::fastdds::dds::PartitionQosPolicy::__getitem__
{
    try
    {
        $action
    }
    catch(std::out_of_range)
    {
        SWIG_exception(SWIG_IndexError, "Index out of bounds");
    }
}

%extend eprosima::fastdds::dds::PartitionQosPolicy
{
    size_t __len__() const
    {
        return self->size();
    }

    std::string __getitem__(int i)
    {
        if (self->size() <= i)
        {
            throw std::out_of_range("Index out of bounds");
        }

        auto it = self->begin();
        for (int count = 0; count < i; ++count)
        {
            it++;
        }

        return std::string((*it).name());
    }
};

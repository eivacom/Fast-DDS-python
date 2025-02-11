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
#include "fastdds/utils/collections/ResourceLimitedVector.hpp"
%}

%include "exception.i"

// These methods return references.
// This is usually supported by SWIG, however, this being a template, and the returns being typedefs,
// it seems that SWIG handles them differently and compilation fails
// when trying to create a pointer to a reference and/or calling new for a reference
// We rewrite them in terms of pointer results
%ignore eprosima::fastdds::ResourceLimitedVector::at;
%ignore eprosima::fastdds::ResourceLimitedVector::front;
%ignore eprosima::fastdds::ResourceLimitedVector::back;
%ignore eprosima::fastdds::ResourceLimitedVector::push_back;
%ignore eprosima::fastdds::ResourceLimitedVector::operator const collection_type&;

// Initializer lists are note supported in SWIG. Ignore the method
%ignore eprosima::fastdds::ResourceLimitedVector::assign(std::initializer_list<value_type>);

// Casting to the inner 'collection_type' makes no sense in the target language
// and SWIG does not support it in any case
%ignore eprosima::fastdds::ResourceLimitedVector::operator const collection_type&;

%exception eprosima::fastdds::ResourceLimitedVector::operator[] {
    try {
        $action
    }
    catch (std::out_of_range) {
        SWIG_CSharpSetPendingExceptionArgument(SWIG_CSharpArgumentOutOfRangeException, "Index out of bounds", "");
        return $null;
    }
}

%include "fastdds/utils/collections/ResourceLimitedVector.hpp"

%define resource_limited_vector_template(name_, value_type_)

%template(name_) eprosima::fastdds::ResourceLimitedVector<value_type_>;

%enddef

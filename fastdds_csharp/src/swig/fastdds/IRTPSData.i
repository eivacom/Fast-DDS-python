// Copyright 2024 Proyectos y Sistemas de Mantenimiento SL (eProsima).
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

// Hack to generate an empty inteface file
%typemap(csclassmodifiers) IRTPSData "public interface"
%typemap(csinterfaces) IRTPSData "";         // No interface injection
%typemap(csdispose) IRTPSData "";            // No Dispose override
%typemap(csdisposing) IRTPSData "";         // No disposing(bool)
%nodefaultctor IRTPSData;                    // No default constructor

%typemap(csbody) IRTPSData 
%{
   System.IntPtr GetHandle();
%}

%inline %{
    class IRTPSData 
    {
    };
%}




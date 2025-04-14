%module IRTPSMessage
%{
/* no C++ includes needed */
%}

%csdirective %{
    public interface IRTPSMessage
    {
        System.Runtime.InteropServices.HandleRef GetHandle();
    }
%}

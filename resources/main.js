var data = [
            { "desc": "Category", "value": "c", "result": "loggerName" },
            { "desc": "FQCN", "value": "C", "result": "path.to.ClassName" },
            { "desc": "Date", "value": "d", "result": "yyyy-MM-dd HH:mm:ss,sss" },
            { "desc": "Date with format", "value": "d{yyyy-MM-dd HH:mm:ss,sss}", "result": "yyyy-MM-dd HH:mm:ss,sss" },
            { "desc": "File name", "value": "F", "result": "ClassName.java", "warning": "extremely slow" },
            { "desc": "Caller location infomation", "value": "l", "result": "path.to.ClassName.methodName(ClassName.java:number)", "warning": "extremely slow" },
            { "desc": "Line number", "value": "L", "result": "number", "warning": "extremely slow" },
            { "desc": "Message", "value": "m", "result": "log message" },
            { "desc": "Method name", "value": "M", "result": "methodName", "warning": "extremely slow" },
            { "desc": "Line seperator", "value": "n", "result": "\n or \r\n" },
            { "desc": "Priority", "value": "p", "result": "DEBUG" },
            { "desc": "Milliseconds elapsed", "value": "r", "result": "number" },
            { "desc": "Thread name", "value": "t", "result": "thread-name" },
            { "desc": "NDC (nested diagnostic context)", "value": "x", "result": "message from ndc" },
            { "desc": "MDC (mapped diagnostic context)", "value": "X", "result": "{{key, value}}" },
            ];

function _$ (id) {
  return document.getElementById(id);
}

$(document).ready(function () {
    var eles = "";
    for (var i = 0; i < data.length; i++) {
        eles += "<div value='" + data[i].value + "' result='" + data[i].result+ "'>" + data[i].desc + "</div>";
    }
    $("#left-copy-1tomany").append(eles)
    
    dragula([_$('left-copy-1tomany'), _$('right-copy-1tomany')], {
      copy: function (el, source) {
        return source === _$('left-copy-1tomany');
      },
      accepts: function (el, target) {
        return target !== _$('left-copy-1tomany');
      }
    });
})
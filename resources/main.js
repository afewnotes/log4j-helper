var data = [
            { "desc": "Space", "value": " ", "result": " " },
            { "desc": "Category", "value": "%c", "result": "loggerName" },
            { "desc": "FQCN", "value": "%C", "result": "path.to.ClassName" },
            { "desc": "Date with format", "value": "%d{yyyy-MM-dd HH:mm:ss,sss}", "result": "1970-01-01 00:00:00,000" },
            { "desc": "File name", "value": "%F", "result": "ClassName.java", "warning": "extremely slow" },
            { "desc": "Caller location infomation", "value": "%l", "result": "path.to.ClassName.methodName(ClassName.java:number)", "warning": "extremely slow" },
            { "desc": "Line number", "value": "%L", "result": "number", "warning": "extremely slow" },
            { "desc": "Message", "value": "%m", "result": "log message" },
            { "desc": "Method name", "value": "%M", "result": "methodName", "warning": "extremely slow" },
            { "desc": "Line seperator", "value": "%n", "result": "" },
            { "desc": "Priority", "value": "%p", "result": "DEBUG" },
            { "desc": "Milliseconds elapsed", "value": "%r", "result": "number" },
            { "desc": "Thread name", "value": "%t", "result": "thread-name" },
            { "desc": "NDC (nested diagnostic context)", "value": "%x", "result": "message from ndc" },
            { "desc": "MDC (mapped diagnostic context)", "value": "%X", "result": "{{key, value}}" },
            ];

function _$ (id) {
  return document.getElementById(id);
}

$(document).ready(function () {
    $('#logTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });
  
    var eles = "";
    for (var i = 0; i < data.length; i++) {
        eles += "<div value='" + data[i].value + "' result='" + data[i].result+ "'>" + data[i].desc + "</div>";
    }
    eles += "<div value='custom'>Custom <input placeholder='conversion char or others' /></div>"
    $("#source").append(eles)
    
    var d = dragula([_$('source'), _$('target')], {
      copy: function (el, source) {
        return source === _$('source');
      },
      accepts: function (el, target) {
        return target !== _$('source');
      },
      direction: 'horizontal',
      removeOnSpill: true
    });
    
    d.on('drop', function(el, target, source, sibling) {
      reCalc()
    });
    
    d.on('remove', function(el, container, source) {
      reCalc()
    });
    
});

function reCalc() {
  var t = $('#target').find('div');
  var result = "", preview = "";
  for (var i = 0; i < t.length; i++) {
    var v = t[i].getAttribute('value');
    if (v === 'custom') {
      var el = $(t[i]).find('input').val();
      result += el;
      preview += el;
    } else {
      result += v;
      preview += t[i].getAttribute('result');
    }
  }
  
  $('#result').val(result);
  $('#preview').val(preview);
}
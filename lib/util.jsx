var message = function(mess) {
  alert(mess);
};

// if (__FILE__ == $0) みたいなの
if ($.stack.replace(/[\[\]\n]/g,"") == new File($.fileName).name) {
    
  // includeされたときは実行されない
  message(app.version);
    
}

var message = function(mess) {
  alert(mess);
};

// if (__FILE__ == $0) みたいなの
try {
  var s = $.stack.replace(/^\[/,"").replace(/\]\n$/,"");
  var f = new File($.fileName).name;  
  if (s == f) {
    
    
  // includeされたときは実行されない
    message(app.version);
    
  }
  else {
    alert($.stack + " で実行したよ");
  }
}
catch(e){
  alert(e);
}
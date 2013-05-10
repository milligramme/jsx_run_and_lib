# rubyの \_\_FILE\_\_ == $0 みたいのをjsxで

$.stack と $.fileName を比較して、#include されたときは実行しない、単体実行したときは実行する分岐を実現する

ライブラリのおしりに記述して単体でテストするなど

    if ($.stack.replace(/[\[\]\n]/g,"") == new File($.fileName).name) {
    
      // 関数テストとか
      // _function_();
    
    }
    
## 動作
* OSX InDesign CS3, CS4, CS5, CS5.5, CS6
* OSX ExtendScript Toolkit 2, CS4, CS5, CS5.5, CS6
(function ($) {
  var tables = new Array();
  $.JquerySql = function () {

      this.query = function (sql) {     //this.sql方法，加上了this，就是公有方法了，外部可以访问。
          if(false == sqlCheck(sql)){
            console.log("Sql语法错误！");
            return "001";
          }
          sql = sqlFilter(sql);   //对sql进行过滤，把多个空格变成一个空格
          console.log(sql);
          
          //创建表
          if(sql.indexOf("create table ") >=0){
            if(false == createTable(sql)){
              return "002"; //创建表失败
            }else{
              return "000"; //操作成功
            }
          }
          
          //插入数据
          
      };
  };
  
  //sql语句进行语法检测
  function sqlCheck(sql){
    return true;
  }
  
  //sql语句过滤，把多个空格变成一个空格
  function sqlFilter(sql){
    return sql;
  }
  //获取创建表的所有字段和类型
  function createTable(sql){
    console.log("cteate:"+sql);
    try{
      //获取表名字
      var table = sql.substring(sql.indexOf(" table ") + 7,sql.indexOf("("));
      console.log(table);
      //获取创建表的所有字段和类型
      var str_colums = sql.substring(sql.indexOf("(") + 1,sql.indexOf(")"));
      colums = str_colums.split(",");
      console.log(str_colums);
      for(i = 0; i < colums.length ; i++){
        console.log(colums[i]);
      }

    }catch(e){
      console.log("error");
      console.log(e);
      return false;
    }
    
    
  }
})(jQuery);
(function ($) {
  var tables = new Array();
  $.JquerySql = function () {

      this.query = function (sql) {     //this.sql������������this�����ǹ��з����ˣ��ⲿ���Է��ʡ�
          if(false == sqlCheck(sql)){
            console.log("Sql�﷨����");
            return "001";
          }
          sql = sqlFilter(sql);   //��sql���й��ˣ��Ѷ���ո���һ���ո�
          console.log(sql);
          
          //������
          if(sql.indexOf("create table ") >=0){
            if(false == createTable(sql)){
              return "002"; //������ʧ��
            }else{
              return "000"; //�����ɹ�
            }
          }
          
          //��������
          
      };
  };
  
  //sql�������﷨���
  function sqlCheck(sql){
    return true;
  }
  
  //sql�����ˣ��Ѷ���ո���һ���ո�
  function sqlFilter(sql){
    return sql;
  }
  //��ȡ������������ֶκ�����
  function createTable(sql){
    console.log("cteate:"+sql);
    try{
      //��ȡ������
      var table = sql.substring(sql.indexOf(" table ") + 7,sql.indexOf("("));
      console.log(table);
      //��ȡ������������ֶκ�����
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
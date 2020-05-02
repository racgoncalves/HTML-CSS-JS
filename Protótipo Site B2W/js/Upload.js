
$(document).ready(function() {

  // Files

  $('#file01').change(function(e) {
    $('#label01').html($("#file01").val());
  })

  $('#file02').change(function(e) {
    $('#label02').html($("#file02").val());
  })

  $('#file03').change(function(e) {
    $('#label03').html($("#file03").val());
  })

  $('#file04').change(function(e) {
    $('#label04').html($("#file04").val());
  })

  // Botão Upload

  $('#upload01').click(function(){

    if ($("#file01").val() != ""){

      $('#label01').html("ARQUIVO CARREGADO");
      up01 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true){$("#botao").attr("disabled", false);}
    }
  })

  $('#upload02').click(function(){

    if ($("#file02").val() != ""){

      $('#label02').html("ARQUIVO CARREGADO");
      up02 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true){$("#botao").attr("disabled", false);}
    }
  })

  $('#upload03').click(function(){

    if ($("#file03").val() != ""){

      $('#label03').html("ARQUIVO CARREGADO");
      up03 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true){$("#botao").attr("disabled", false);}
    }
  })

  $('#upload04').click(function(){

    if ($("#file04").val() != ""){

      $('#label04').html("ARQUIVO CARREGADO");
      up04 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true){$("#botao").attr("disabled", false);}
    }
  })

  // Botão Final

  $("#botao").attr("disabled", true);

  $("#botao").click(function(){
    location.href="4-Final.html";
  })

})

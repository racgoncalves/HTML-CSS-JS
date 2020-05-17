
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

  $('#file05').change(function(e) {
    $('#label05').html($("#file05").val());
  })

  $('#file06').change(function(e) {
    $('#label06').html($("#file06").val());
  })

  $('#file07').change(function(e) {
    $('#label07').html($("#file07").val());
  })

  $('#file08').change(function(e) {
    $('#label08').html($("#file08").val());
  })

  $('#file09').change(function(e) {
    $('#label09').html($("#file09").val());
  })

  // Botão Upload

  $('#upload01').click(function(){

    if ($("#file01").val() != ""){

      $('#label01').html("ARQUIVO CARREGADO");
      up01 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true && up05 == true){$("#botao").attr("disabled", false);}
    }
  })

  $('#upload02').click(function(){

    if ($("#file02").val() != ""){

      $('#label02').html("ARQUIVO CARREGADO");
      up02 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true && up05 == true){$("#botao").attr("disabled", false);}
    }
  })

  $('#upload03').click(function(){

    if ($("#file03").val() != ""){

      $('#label03').html("ARQUIVO CARREGADO");
      up03 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true && up05 == true){$("#botao").attr("disabled", false);}
    }
  })

  $('#upload04').click(function(){

    if ($("#file04").val() != ""){

      $('#label04').html("ARQUIVO CARREGADO");
      up04 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true && up05 == true){$("#botao").attr("disabled", false);}
    }
  })

  $('#upload05').click(function(){

    if ($("#file05").val() != ""){

      $('#label05').html("ARQUIVO CARREGADO");
      up05 = true;
      if(up01 == true && up02 == true && up03 == true && up04 == true){$("#botao").attr("disabled", false);}
    }
  })

  $('#upload06').click(function(){

    if ($("#file06").val() != ""){

      $('#label06').html("ARQUIVO CARREGADO");
    }
  })

  $('#upload07').click(function(){

    if ($("#file07").val() != ""){

      $('#label07').html("ARQUIVO CARREGADO");
    }
  })

  $('#upload08').click(function(){

    if ($("#file08").val() != ""){

      $('#label08').html("ARQUIVO CARREGADO");
    }
  })

  $('#upload09').click(function(){

    if ($("#file09").val() != ""){

      $('#label09').html("ARQUIVO CARREGADO");
    }
  })

  // Botão Final

  $("#botao").attr("disabled", true);

  $("#botao").click(function(){
    location.href="4-Final.html";
  })

})

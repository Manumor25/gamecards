$("#btnCargar").click(function (event) {
    event.preventDefault();
  
    var nombre= $("#txtnombre").val();
 
    var url = "https://pokeapi.co/api/v2/pokemon/"+nombre;
    console.log(url)
      fetch(url)
          .then(response => response.json())
          .then(data => 
              {
                // console.log(data);
                var $nombre=$('<h1>').text(data.forms[0].name); 
                var $tipo= $('<p>').text(data.types[0].type.name); 
                var $hp = $('<h3>').text(data.stats[0].stat.name);
                var $hp_stat = $('<p>').text(data.stats[0].base_stat);
                var $ataque = $('<h3>').text(data.stats[1].stat.name);
                var $ataque_stat = $('<p>').text(data.stats[1].base_stat);
                var $defensa = $('<h3>').text(data.stats[2].stat.name);
                var $defensa_stat = $('<p>').text(data.stats[2].base_stat);
                var $sped = $('<h3>').text(data.stats[5].stat.name);
                var $sped_stat = $('<p>').text(data.stats[5].base_stat);


                  // para limpiar el contedor antes de desplegar
                $("#info").empty();
                $('#info')
                     .append($nombre)
                     .append($tipo)
                     .append($hp)
                     .append($hp_stat)
                     .append($ataque)
                     .append($ataque_stat)
                     .append($defensa)
                     .append($defensa_stat)
                     .append($sped)
                     .append($sped_stat)
                     
              })
          .catch(error => console.error(error));
  
  });
  
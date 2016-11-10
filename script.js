$(document).ready(function() {

  
/*Katelyn's jquery here*/
 //P2
  "use strict";
  $('#p2 .action').on('click', function() {
           $("#p2 div.html").html($('#p2 .hidden').html());
         });

  
  
  /*Adding my javascript here*/
  $("#p3 .action").on("click", function() {
    $('#p3 article div.example').removeClass('hide');
    $('#p3 article .alignCenter').removeClass('hide');
    $('#p3 article .addHide').addClass('hide');
    $('#p3 article div.example').toggleClass('CSSexample1 CSSexample2');
  });
  
  
/*Video here*/
  var videos = document.querySelectorAll("video");
         for (var i = 0, l = videos.length; i < l; i++) {
           var video = videos[i];
           var src = video.src || (function() {
             var sources = video.querySelectorAll("source");
             for (var j = 0, sl = sources.length; j < sl; j++) {
               var source = sources[j];
               var type = source.type;
               var isMp4 = type.indexOf("mp4") !== -1;
               if (isMp4) {
				   return source.src;
			   }
             }
             return null;
           })();
           if (src) {
             var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
             if (isYoutube) {
               var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
               id = (id.length > 1) ? id.splice(1) : id;
               id = id.toString();
               var mp4url = "https://youtu.be/TLjmDQ0yhk0?t=25s";
               video.src = mp4url + id;
             }
           }
         } 
/*Video End*/  
  

  /*called action but actually home*/
  $("#p5 .action").on("click", function() {
    $(this).parent('section').removeClass('right left center').addClass('right');
    var $foo = $(this).attr("data-nextPage");
    $foo = "#" + $foo;
    $($foo).removeClass('right left center').addClass('center');
  });

  $('#transparent').click(function() {
    $('#toggleme').toggleClass('transparent1');
  });

  $('#round').click(function() {
    $('#toggleme').toggleClass('round1');
  });

  $('#dropShadow').click(function() {
    $('#toggleme').toggleClass('dropShadow1');
  });

  $('#txtShadow').click(function() {
    $('.listItems').toggleClass('txtShadow1');
  });

  $('#colorGradient').click(function() {
    $('#toggleme').toggleClass('colorGradient1');
  });

  $('#fancyBorder').click(function() {
    $('#toggleme').toggleClass('fancyBorder1');
  });

  $('#skew').click(function() {
    $('#toggleme').toggleClass('skew1');
  });

  $('#rotate').click(function() {
    $('#toggleme').toggleClass('rotate1');
  });

  $('#matrix').click(function() {
    $('#toggleme').toggleClass('matrix1');
  });

  $('#translate').click(function() {
    $('#toggleme').toggleClass('translate1');
  });

  $('#scale').click(function() {
    $('#toggleme').toggleClass('scale1');
  });

  /*Page 13 starts here */
  
  window.onload = function() {
    var canvas = document.getElementById("canvas13");
    var ctx = canvas.getContext("2d");
    var W = window.outerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //snowflake particles
    var mp = 95; //max particles
    var particles = [];
    for (var i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W, //x-coordinate
        y: Math.random() * H, //y-coordinate
        r: Math.random() * 5 + 1, //radius
        d: Math.random() * mp //density
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      for (var i = 0; i < mp; i++) {
        var p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    }

    //Function to move the snowflakes
    var angle = 0;

    function update() {
      angle += 0.01;
      for (var i = 0; i < mp; i++) {
        var p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        //Sending flakes back from the top when it exits
        if (p.x > W + 1 || p.x < -5 || p.y > H) {
          particles[i] = {
            x: Math.random() * W,
            y: -10,
            r: p.r,
            d: p.d
          };
        }
      }
    }
    setInterval(draw, 43);
  };
  
  
/*Page 15*/
  $("#p15 .action").on("click", function() {
    $('#p15 article span.hide').removeClass('hide');
    $('#p15 article .new').addClass('old');
    $('#p15 article .addHide').addClass('hide');
    $('#p15 article .small').addClass('big');
    $('#p15 article .pushRight').addClass('font');
    $('#p15 article .remove').removeClass('pushRight italic uppercase old small');
  });
 
/*P19 -- MAP -- starts here */
  var mapCanvas = document.getElementById('map');
  var map = new google.maps.Map(mapCanvas, {
    center: new google.maps.LatLng(39.14, -76.72),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  var layer = new google.maps.FusionTablesLayer({
    map: map,
    query: {
      select: "col7",
      from: "1iRTh1BTOpMOrBpTZKVaRbp-mDj_wH_sTamzKYmXE",
    },
    styles:[{
     polygonOptions: {
        fillColor: '#00FF00',
        fillOpacity: 0.3
      }
    }, {
      where: 'Dead < 1',
      markerOptions: {
        iconName: "large_green"
      }
    }, {
      where: 'Dead > 0',
      markerOptions: {
        iconName: "large_yellow"
      }
    }, {
      where: 'Dead > 1',
      markerOptions: {
        iconName: "large_red"
      }
    }]
  });
  layer.setMap(map);
  
  var styles = [{
    stylers: [{
      visibility: 'simplified'
    }, ]
  }, {
    featureType: "road",
    elementType: "geometry",
    stylers: [{
      visibility: "simplified"
    }, {
      color: "#747472"
    }, {
      weight: 1.5
    }]
  }, {
    featureType: "road",
    elementType: "labels",
    stylers: [{
      visibility: "off"
    }]
  }, {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{
      visibility: "off"
    }]
  }, {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{
      visibility: "on"
    }, {
      color: "#ff9999"
    }]
  }, {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{
      visibility: "on"
    }, {
      color: "#ff6666"
    }]
  }, {
    elementType: "labels.text.fill",
    stylers: [{
      color: "#FFD500"
    }, {
      visibility: "on"
    }, {
      weight: 6
    }]
  }, {
    elementType: "labels.text.stroke",
    stylers: [{
      visibility: "on"
    }, {
      color: "#444443"
    }, {
      "weight": 1
    }]
  }];

  map.setOptions({
    styles: styles
  });
  
  /*P21*/
var data = [{
    name: 2010,
    value: 171
  }, {
    name: 2011,
    value: 150
  }, {
    name: 2012,
    value: 181
  }, {
    name: 2013,
    value: 189
  }, {
    name: 2014,
    value: 160
  }, {
    name: 2015,
    value: 289
  }];

var margin = {top: 30, right: 30, bottom: 40, left: 60},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .domain(data.map(function(d) { return d.name; }))
    .rangeRoundBands([0, width], 0.1);

var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Add data
chart.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .attr("width", x.rangeBand());


// y axis and label
chart.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -250)
    .attr("y", -margin.bottom)
    .attr("dy", "-.5em")
    
    .text("Total Shooting Homicides");
// x axis and label
chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
  .append("text")
    .attr("x", width / 2)
    .attr("y", margin.bottom - 14)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Year");
// chart title
chart.append("text")
  .text("Baltimore Shooting Homicides Per Year")
  .attr("x", 85)
  .attr("y", -5)
  .attr("class","title");

  $(".back").on("click", function() {
    $(this).parent('section').removeClass('right left center').addClass('right');
    var $foo = $(this).attr("data-prevPage");
    $foo = "#" + $foo;
    $($foo).removeClass('right left center').addClass('center');
  });

  $(".next").on("click", function() {
    $(this).parent('section').removeClass('right left center').addClass('left');
    var $foo = $(this).attr("data-nextPage");
    $foo = "#" + $foo;
    $($foo).removeClass('right left center').addClass('center');
  });

   $(".home").on("click", function() {
    $(".slide").removeClass('right left center').addClass('right');
    $("#cover").attr('class', 'slide center');
  });

  
}); /*Closes entire function*/
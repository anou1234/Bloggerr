fetch("/js/all.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
    function appendData(data){
      var div=document.getElementById("nav-brand");
      div.innerHTML=data.navbrand;

      var div1=document.getElementById("toggle-icons");
      div1.innerHTML=data.toggleicons;

      var div2=document.getElementById("nav-items");
      div2.innerHTML=data.navitems;

      var div3=document.getElementById("social");
      div3.innerHTML=data.social;

      var div13=document.getElementById("about-us");
      div13.innerHTML=data.aboutus;

      var div14=document.getElementById("footer-newsletter");
      div14.innerHTML=data.footernewsletter;

      var div15=document.getElementById("instagram");
      div15.innerHTML=data.instagram;

      var div16=document.getElementById("follow");
      div16.innerHTML=data.follow;

      var div16=document.getElementById("move-up");
      div16.innerHTML=data.moveup;}
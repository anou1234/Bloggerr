
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
      div16.innerHTML=data.moveup;

      var div17=document.getElementById("editorbackground");
      div17.innerHTML=data.editorbackground;

      var div18=document.getElementById("writeuplogin");
      div18.innerHTML=data.writeuplogin;

      var div19=document.getElementById("writeupsubject");
      div19.innerHTML=data.writeupsubject;

      var div20=document.getElementById("writeupmsg");
      div20.innerHTML=data.writeupmsg;

      var div21=document.getElementById("writeupbtn");
      div21.innerHTML=data.writeupbtn;


    }
        // var element=document.getElementById("writeupbtn");
        // var Bhtml=element.outerHTML;
        // var data={"writeupbtn":Bhtml};
        // var json= JSON.stringify(data)
        // // // // var html=JSON.parse(json)
        // console.log(json);

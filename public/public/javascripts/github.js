var github=function(){function t(t){return $("<div/>").text(t).html()}function r(r,a){var n=0,e="",o=$(r)[0];for(n=0;n<a.length;n++)e+='<li><a href="'+a[n].html_url+'">'+a[n].name+"</a><p>"+t(a[n].description||"")+"</p></li>";o.innerHTML=e}return{showRepos:function(t){$.ajax({url:"https://api.github.com/users/"+t.user+"/repos?sort=pushed&callback=?",dataType:"jsonp",error:function(r){$(t.target+" li.loading").addClass("error").text("Error loading feed")},success:function(a){var n=[];if(a&&a.data){for(var e=0;e<a.data.length;e++)t.skip_forks&&a.data[e].fork||n.push(a.data[e]);t.count&&n.splice(t.count),r(t.target,n)}}})}}}();
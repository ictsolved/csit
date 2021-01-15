---
layout: compress
---

{% capture resources %}
{% assign semesters = "first,second,third,fourth,fifth,sixth,seventh,eighth" | split: "," %}
[
    {% for semester in semesters %}
    {
        "semester":"{{ semester }}",
        "contents":[
            {% for page in site.pages %}
            {% assign sem = page.semester | replace: " Semester", "" | downcase %}
            {% if semester == sem %}
            {
                "subject": "{{ page.title }}",
                "resources": {{ page.resources | jsonify }}
            }
            {% unless forloop.last %},{% endunless %}
            {% endif %}
            {% endfor %}
        ]

    }
    {% unless forloop.last %},{% endunless %}
    {% endfor %}
    ]
    
{% endcapture %}
var resources = {{ resources }};
window.onload = function() {
    setTimeout(function() {
      if ( typeof(window.google_jobrunner) === "undefined" ) {
       document.getElementById('container').innerHTML=`
<section class="blog-area bg-color3">
    <div class="blog-wrapper section-spacing">
        <div class="container">
            <div class="error-page text-center">
            <p style="font-size:64px;color:red;"><i class="fa fa-exclamation-circle"></i></p>
                <p>It seems like you have AdBlock enabled.</p>
                <p>We get it! Ads are annoying but they help keep this website up and running. <br/>
                Please consider disabling your ad block software or whitelist our domain so only our ads are displayed.</p>
            </div>
        </div>
    </div>
</section>
       `;
       document.getElementById('title').scrollIntoView();
       document.body.style = 'overflow:visible;';
      }
    }, 10000);
  };

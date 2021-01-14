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

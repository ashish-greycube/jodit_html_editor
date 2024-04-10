## Jodit

Replace Quill Text Editor With Jodit HTML Editor on ERPNext Version 11,12 at 
1. WebPage 
2. WebForm
3. Item doctype  > Website Description field
4. Newsletter > Message field
5. Item Group > Content field

### What it does ?

* Hides Text Editor (Quill) field
* Creates a new HTML field to render Jodit on doctype UI
* Ultimately, stores value in hidden TextEditor field

### Limitations
* All Jodit Limitation apply which includes- doesn't support Fontawesome-icons.

### Installation Steps

Step 1) One time to get app

`bench get-app https://github.com/ashish-greycube/jodit_html_editor`

Step 2) to install app on any instance/site

`bench --site [sitename] install-app jodit_html_editor`


### Screeenshots

#### Jodit HTML Controls
![Jodit Controls](https://github.com/ashish-greycube/jodit_html_editor/blob/master/JoditControls.PNG)

#### Jodit HTML Code Playground 
![Jodit Codeview](https://github.com/ashish-greycube/jodit_html_editor/blob/master/JoditCodeView.PNG)

#### License

MIT

<hr>

#### Contact Us  

<a href="https://greycube.in"><img src="https://greycube.in/files/greycube_logo09eade.jpg" width="250" height="auto"></a> <br>
1<sup>st</sup> ERPNext [Certified Partner](https://frappe.io/api/method/frappe.utils.print_format.download_pdf?doctype=Certification&name=PARTCRTF00002&format=Partner%20Certificate&no_letterhead=0&letterhead=Blank&settings=%7B%7D&_lang=en#toolbar=0)
<sub> <img src="https://greycube.in/files/certificate.svg" width="20" height="20"> </sub>
& winner of the [Best Partner Award](https://frappe.io/partners/india/greycube-technologies) <sub> <img src="https://greycube.in/files/award.svg" width="25" height="25"> </sub>

<h5>
<sub><img src="https://greycube.in/files/link.svg" width="20" height="auto"> </sub> <a href="https://greycube.in"> greycube.in</a><br>
<sub><img src="https://greycube.in/files/8665305_envelope_email_icon.svg" width="20" height="18"> </sub> <a href="mailto:sales@greycube.in"> 
 sales@greycube.in</a><br>
<sub><img src="https://greycube.in/files/linkedin1.svg" width="20" height="18"> </sub> <a href="https://www.linkedin.com/company/greycube-technologies"> LinkedIn</a><br>
<sub><img src="https://greycube.in/files/blog.svg" width="20" height="18"> </sub><a href="https://greycube.in/blog"> Blogs</a> </h5>

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

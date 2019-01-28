frappe.ui.form.on('Web Form', {

    refresh: function (frm) {
        let editor = Jodit.instances.jeditor_webform
        if (editor) {
            editor.value = frm.doc.introduction_text || "";
        }
    },

    onload: function (frm) {
        if (!Jodit.instances.jeditor_webform) {
           
            $('<textarea id="jeditor_webform"></textarea>').appendTo(frm.fields_dict.jodit_editor.wrapper);
            var ele = document.getElementById('jeditor_webform');
            var editor = new Jodit(ele);
            console.log("onload");

            editor.value = frm.doc.introduction_text || "";
            ele.addEventListener('change', function () {
                frm.set_value("introduction_text", this.value);
            });
        }
        console.log("onload");
    }
});
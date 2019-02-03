frappe.ui.form.on('Web Page', {

    refresh: function (frm) {
        let editor = Jodit.instances.jeditor_webpage
        if (editor) {
            editor.value = frm.doc.main_section || "";
        }
    },

    onload: function (frm) {
        if (!Jodit.instances.jeditor_webpage) {
            $('<textarea id="jeditor_webpage"></textarea>').appendTo(frm.fields_dict.jodit_editor.wrapper);
            var ele = document.getElementById('jeditor_webpage');
            var editor = new Jodit(ele);
            

            editor.value = frm.doc.main_section || "";
            ele.addEventListener('change', function () {
                frm.set_value("main_section", this.value);
            });
        }
        
    }
});
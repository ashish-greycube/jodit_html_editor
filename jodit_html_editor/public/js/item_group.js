frappe.ui.form.on('Item Group', {

    refresh: function (frm) {
        let editor = Jodit.instances.jeditor_webpage
        if (editor) {
            editor.value = frm.doc.description || "";
        }
    },

    onload: function (frm) {
        if (!Jodit.instances.jeditor_webpage) {
            $('<textarea id="jeditor_webpage"></textarea>').appendTo(frm.fields_dict.jodit_editor.wrapper);
            var ele = document.getElementById('jeditor_webpage');
            var editor = new Jodit(ele);
            

            editor.value = frm.doc.description || "";
            ele.addEventListener('change', function () {
                frm.set_value("description", this.value);
            });
        }
        
    }
});
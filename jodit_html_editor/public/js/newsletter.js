frappe.ui.form.on('Newsletter', {

    refresh: function (frm) {
        let editor = Jodit.instances.jeditor_webpage
        if (editor) {
            editor.value = frm.doc.message || "";
        }
    },

    onload: function (frm) {
        if (!Jodit.instances.jeditor_webpage) {
            $('<textarea id="jeditor_webpage"></textarea>').appendTo(frm.fields_dict.jodit_editor.wrapper);
            var ele = document.getElementById('jeditor_webpage');
            var editor = new Jodit(ele);
            

            editor.value = frm.doc.message || "";
            ele.addEventListener('change', function () {
                frm.set_value("message", this.value);
            });
        }
        
    }         
});
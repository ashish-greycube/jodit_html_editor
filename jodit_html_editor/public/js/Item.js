frappe.ui.form.on('Item', {

    refresh: function (frm) {
        
        let editor = Jodit.instances.jeditor_item
        if (editor) {
            editor.value = frm.doc.web_long_description || "";
        }
    },

    onload: function (frm) {
        if (!Jodit.instances.jeditor_item) {
           
            $('<textarea id="jeditor_item"></textarea>').appendTo(frm.fields_dict.jodit_editor.wrapper);
            var ele = document.getElementById('jeditor_item');
            var editor = new Jodit(ele);
            

            editor.value = frm.doc.web_long_description || "";
            ele.addEventListener('change', function () {
                frm.set_value("web_long_description", this.value);
            });
        }
        
    }
});
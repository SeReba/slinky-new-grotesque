Ext.define('Notebook.view.product.Edit',{
    extend: 'Ext.window.Window',
    layout: 'fit',
    title: 'Категорія',
    resizable: false,
    closable: false,     
    modal: true,
    width: 250,
    height: 135,    
    items: [
        {
            xtype: 'container',
            id: 'nb-cat-edt-win-container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            }, 
            margin: 5,
            items: [
                {
                    xtype: 'container',
                    id: 'nb-cat-edt-win-message',
                    padding: '0 0 5 0',
                    style: {
                        color: '#bcbcbc'
                    },
                    html: ''
                },
                {
                    xtype: 'textfield',
                    id: 'nb-cat-edt-win-cat-name',
                    width: 100,
                    labelWidth: 40,
                    fieldLabel: 'Назва',
                    allowBlank: false,
                    vtype: 'cyralphanum'
                },
                {
                    xtype: 'checkbox',
                    id: 'nb-cat-edt-win-no-parent',
                    boxLabel: 'додати в корінь',
                    margin: '0 0 0 47'
                }
            ]
        }
    ],
    buttonAlign: 'right',
    buttons: [
        {
            id: 'nb-cat-edt-win-save',
            text: 'Зберегти'
        },
        {
            id: 'nb-cat-edt-win-cancel',
            text: 'Відмінити'
        }
    ]
});



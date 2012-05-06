Ext.define('Notebook.view.warranty.Form',{
    extend: 'Ext.container.Container',
    alias: 'widget.warranty-form',
    region: 'center',    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    padding: '10',
    initComponent: function () {
        this.items=[
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },                
                defaults: {
                    labelWidth: 50,
                    margin: '0 5 0 0'
                },
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Виріб',
                        width: 300                        
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: '№ п\п',
                        width: 150                        
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Прийнято',
                        labelWidth: 60,
                        width: 200 
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Видано',
                        labelWidth: 60,
                        width: 200 
                    }                    
                ]
            },  
//Відомості про клієнта
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretchmax'
                },
                defaults: {
                    margin: '0 5 0 0',
                    labelWidth: 100
                },
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Відомості про клієнта',
                        width: 460,
                        items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Власник',
                                width: 435                                          
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Адреса',
                                width: 435                                           
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Домашній тел.',
                                width: 435                                           
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Робочій тел.',
                                width: 435                                           
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Мобільний тел.',
                                width: 435 
                            },
                            {
                                xtype: 'datefield',
                                fieldLabel: 'Повідомлено',
                                width: 250                                           
                            }                            
                        ]
                    },
//Скарги                    
                    {
                        xtype: 'fieldset',
                        title: 'Скарги',
                        width: 460, 
                        defaults: {
                            labelWidth: 70
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Скарги',
                                width: 435                                 
                            },
                            {
                                xtype: 'textarea',
                                fieldLabel: 'Виконана робота',
                                width: 435,
                                height: 105
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Примітки',
                                width: 435                                 
                            }                            
                        ]
                    }
                ]
            },
//Відомості про гарантію            
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretchmax'
                },
                defaults: {
                    margin: '0 5 0 0'
                },
                items: [
                    {
                        xtype: 'fieldset',
                        layout: {
                            type: 'hbox',
                            align: 'stretchmax'
                        },                        
                        title: 'Відомості про гарантію',
                        width: 930,
                        items: [
                            {
                                xtype: 'container',
                                margin: '0 17 0 0',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Гарантія',
                                        labelWidth: 70,
                                        width: 435                                 
                                    },
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Свідоцтво',
                                        labelWidth: 70,
                                        width: 435                                 
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                items: [                                
                                    {
                                        xtype: 'textarea',
                                        fieldLabel: 'Примітки',
                                        labelWidth: 70,
                                        width: 435,
                                        height: 50
                                    }
                                ]
                            }                            
                        ]
                    },
                ]
            },
//Комплектність                        
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretchmax'
                },
                defaults: {
                    margin: '0 5 0 0'
                },
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Комплектність',
                        width: 460,
                        items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'checkbox',
                                        margin: '0 5 0 0'
                                    },
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Термінал №',
                                        labelWidth: 150,
                                        width: 415                                          
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'checkbox',
                                        margin: '0 5 0 0'
                                    },
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Акамулятор №',
                                        labelWidth: 150,
                                        width: 415                                           
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'checkbox',
                                        margin: '0 5 0 0'
                                    },
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'ЗП від електромережі №',
                                        labelWidth: 150,
                                        width: 415                                           
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'checkbox',
                                        margin: '0 5 0 0'
                                    },
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'ЗП від прикурювача №',
                                        labelWidth: 150,
                                        width: 415                                           
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox'
                                },
                                margin: '0 0 5 0',
                                items: [
                                    {
                                        xtype: 'checkbox',
                                        margin: '0 10 0 0',
                                        boxLabel: 'Антена'
                                    },
                                    {
                                        xtype: 'checkbox',
                                        margin: '0 10 0 0',
                                        boxLabel: 'Чохол'
                                    },
                                    {
                                        xtype: 'checkbox',
                                        margin: '0 10 0 0',
                                        boxLabel: 'Шнури'
                                    }                                    
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox'
                                },
                                margin: '0 0 5 0',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        margin: '0 0 0 11',
                                        fieldLabel: 'Мобільний телефон',
                                        labelWidth: 150,
                                        width: 415                                           
                                    }
                                ]
                            }                            
                        ]
                    },
//Інші відомості                    
                    {
                        xtype: 'container',
                        layout: {
                            type: 'vbox'
                        },
                        defaults: {
                            labelWidth: 80
                        },
                        items: [
                            {
                                xtype: 'fieldset',
                                title: 'Інші відомості',
                                width: 460,
                                items: [
                                    {
                                        xtype: 'combobox',
                                        fieldLabel: 'Відправлено',
                                        width: 435                                           
                                    },
                                    {
                                        xtype: 'datefield',
                                        fieldLabel: 'Відправлено',
                                        width: 200                                           
                                    } ,
                                    {
                                        xtype: 'datefield',
                                        fieldLabel: 'Отримано',
                                        width: 200                                           
                                    },                                            
                                    {
                                        xtype: 'radiogroup',
                                        columns: 1,
                                        margin: '15 0 0 0',
                                        items: [
                                            {
                                                boxLabel: 'Платний ремонт',
                                                inputValue: 1,
                                                name: 'rb'
                                            },
                                            {
                                                boxLabel: 'Гарантійний ремонт',
                                                inputValue: 2,
                                                name: 'rb'
                                            },
                                            {
                                                boxLabel: 'В очікуванні',
                                                inputValue: 3,
                                                name: 'rb'
                                            }                                            
                                        ]
                                    }                                    
                                ]
                            }                           
                        ]
                    }
                ]
            },
//Майстер та ціни            
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                margin: '5 0 0 0',
                defaults: {
                    margin: '0 0 0 5',
                    labelWidth: 70
                },
                items: [
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Майстер'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Запчастини',
                        width: 203                                           
                    }, 
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Робота',
                        margin: '0 0 0 13',
                        width: 200                                           
                    },                     
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Гарантія до',
                        width: 200                                           
                    }                   
                ]
            },
//Кнопки            
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                style: {
                    borderTop: '1px solid #0B486B',
                    marginTop: '5px',
                    paddingTop: '5px'
                },
                items: [
                    {
                        xtype: 'button',
                        text: 'Прийом',
                        id: 'ololo'
                    },
                    {
                        xtype: 'button',
                        text: 'Видача'
                    },
                    {
                        xtype: 'button',
                        text: 'Пошук'
                    }                  
                ]
            }
        ];
        this.callParent();
    }    
});



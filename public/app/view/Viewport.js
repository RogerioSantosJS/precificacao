Ext.define('App.view.Viewport', {
    extend: 'Ext.Viewport',
    requires: [
        
    ],
    
    layout: 'border',

    constructor: function(config) {
        var me = this,
            acl = App.app.acl,
            menu = [];

        menu.push({
            xtype: 'displayfield',
            value: '<b>Solicitação de Precificação</b>'
        });

        // console.log(acl.menu.solicitacaoAlteracao.indexOf(USUARIO.usuario_sistema))
        if(!USUARIO && USUARIO != '""'){
            window.location.href = BASEURL + '/login';
        }
        
        if(acl.menu.solicitacaoAlteracao.indexOf(USUARIO.usuario_sistema) !== -1)
        menu.push({ 
            text: 'Alteração de Preço',
            name: 'pvsolicitacaoalteracao',
            handler: function(){
                App.app.fireEvent('menumasterclick', 'pvsolicitacaoalteracao');
            }
        });

        if(acl.menu.solicitacaoCadastro.indexOf(USUARIO.usuario_sistema) !== -1)
        menu.push({ 
            text: 'Cadastro de Preço',
            name: 'pvsolicitacaocadastro',
            handler: function(){
                App.app.fireEvent('menumasterclick', 'pvsolicitacaocadastro');
            }
        });

        menu.push('-');
        
        Ext.applyIf(me, {
            items: [
                {
                    region: 'north',
                    xtype: 'toolbar',
                    padding: 2,
                    items: [
                        {
                            iconCls: 'fa fa-bars',
                            itemId: 'mastermenu',
                            menu: menu
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
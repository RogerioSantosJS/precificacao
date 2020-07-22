Ext.define('App.controller.ApplicationController', {
    extend: 'Ext.app.Controller',

    requires: [
        
    ],

    control: {
        // '#mastermenu > menuitem': {
        //     click: function(item){
        //         console.log(item)
        //     }
        // }
    },

    routes: {
        'login': { action: 'loginAction' },
        'home': { action: 'homeAction' },
        'pvsolicitacaoalteracao': { action: 'pvsolicitacaoalteracaoAction' },
        'pvsolicitacaocadastro': { action: 'pvsolicitacaocadastroAction' }
    },
    
    getViewport: function(){
        return App.getApplication().getMainView();
    },
    
    addOrActiveCard: function(xtype){
        var viewport = this.getViewport(),
            viewportCard = viewport.down('#applicationcard');
        
        var page = viewportCard.down(xtype);
        if(!page){
            page = viewportCard.add({ xtype: xtype });
        }
        
        viewportCard.setActiveItem(page);
    },
    
    init: function() {
        var me = this;

        App.app.on('menumasterclick', function(item){
            me.redirectTo(item);
        });

        // Se não tiver logado
        me.mainAction();
    },
    
    loginAction: function(){
        var me = this;

        
        Ext.MessageBox.show({
            msg: 'Verificando a permissão de acesso...',
            progressText: 'Saving...',
            width: 300,
            wait: {
                interval: 200
            }
        });
        
        Ext.Ajax.request({
            url: BASEURL +'/api/index/login',
            method: 'POST',
            success: function (response) {
                var result = Ext.decode(response.responseText);
                Ext.MessageBox.hide();

                if(!result.success){
                    new Noty({
                        theme: 'relax',
                        layout: 'bottomRight',
                        type: 'error',
                        closeWith: [],
                        text: 'Acesso negado. Tente logar no agilize.'
                    }).show();
                }

                if(result.success){
                    App.app.usuario = result.usuario;
                    me.redirectTo('main');
                }
            }
        });
    },

    mainAction: function(){
        var me = this,
            viewport = me.getViewport();
        
        if(viewport){
            viewport.add({
                itemId: 'applicationtabs',
                region: 'center',
                xtype: 'tabpanel',
                layout: 'fit'
            });
        }
    },

    homeAction: function(){
        var me = this,
            viewport = me.getViewport();

            
    },
    
    pvsolicitacaoalteracaoAction: function(){
        var me = this;
        me.addMasterTab('pvsolicitacaoalteracaomain');
    },

    pvsolicitacaocadastroAction: function(){
        var me = this;
        me.addMasterTab('pvsolicitacaocadastromain');
    },

    addMasterTab: function(xtype){
        var me = this,
            viewport = me.getViewport(),
            viewportTabs = viewport.down('#applicationtabs'),
            tab = viewportTabs.down(xtype);

        if(!tab){
            tab = viewportTabs.add({
                closable: true,
                xtype: xtype,
                listeners: {
                    destroy: function(){
                        me.redirectTo('home');
                    }
                }
            });
        };
        
        viewportTabs.setActiveItem(tab);
    }
    
});

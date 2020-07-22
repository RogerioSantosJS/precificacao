Ext.Loader.setConfig({enabled: true, disableCaching: true});

Ext.application({
    name: 'App',
    appFolder: 'app',

    paths: {
        'Ext.ux': 'app/ux'
    },

    requires: [
        'Ext.ux.util.Format',
        'App.view.Viewport',
        'App.controller.PvSolicitacaoAlteracaoController',
        'App.controller.PvSolicitacaoCadastroController'
    ],
    
    controllers: [
        'ApplicationController',
        'PvSolicitacaoAlteracaoController',
        'PvSolicitacaoCadastroController'
    ],
    
    mainView: 'App.view.Viewport',

    defaultToken: 'home',

    acl: {
        menu: {
            solicitacaoAlteracao: [
                'EVERTON','ANDREPB',
                'TAVARES','FELIPE',
                'LIDIANEVC','FERNANDOMA',
                'BRUNA','ANDRELUIZ','LOPESIMP',
                'RAFAELPE', 'ROGERIOADM', 'COSTAVC', 
                'NEYAL', 'HYGORRG',
                'GIUSEPPE', 'ROBERLANIO', 
                'GOMESMT', 'ADRIANO',
                'MAURO',
                'CARVALHO', 'JOAOLUCAS',
                'FERNANDOMA',
                'FRANCINETE',
                'THYAGO', 'VANESSA', // MB
                'PATRICK',
                'VINICIUS',
                'WESLEYGO',
                'ROBERTOGO',
                'LIMAOPE',
                'RENAN',
                'IBRAIM'
            ],
            solicitacaoCadastro: [
                'EVERTON','ANDREPB',
                'TAVARES','FELIPE',
                'LIDIANEVC','FERNANDOMA',
                'BRUNA','ANDRELUIZ','LOPESIMP',
                'RAFAELPE', 'ROGERIOADM', 'COSTAVC', 
                'NEYAL', 'HYGORRG',
                'GIUSEPPE', 'ROBERLANIO', 
                'GOMESMT', 'ADRIANO',
                'MAURO', 'LUISMA', 
                'CARVALHO', 'JOAOLUCAS',
                'FERNANDOMA',
                'FRANCINETE',
                'THYAGO', 'VANESSA', // MB
                'PATRICK',
                'VINICIUS',
                'WESLEYGO',
                'ROBERTOGO',
                'LIMAOPE',
                'RENAN',
                'IBRAIM'
            ]
        }
    },
    
    launch: function() {
        if(!USUARIO && USUARIO != '""')
        window.location.href = BASEURL + '/login';

    }

});
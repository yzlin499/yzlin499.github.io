var listVue = new Vue({
    el: '#list',
    data: {
        windowsSystems: [
            {name: 'windows 95'},
            {name: 'windows 98'},
            {
                name: 'windows NT',
                other: ['windows NT Workstation', 'windows NT Server']
            },
            {
                name: 'windows 2000',
                other: ['windows 2000 Professional', 'windows 2000 Server', 'windows 2000 Advance Server']
            },
            {name: 'windows xp'},
            {name: 'windows vista'},
            {name: 'windows 7'},
            {name: 'windows 8'},
            {name: 'windows 10'}
        ]
    }
});


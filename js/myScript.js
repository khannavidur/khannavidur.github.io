jQuery(function($, undefined) {

    var
        commands 					= {
            'name' 					: {
                'display_value' 	: 'Vidur Khanna',
                'meaning' 			: 'will display my name'
                },
            'education' 			: {
                'display_value' 	: 'School - St. Theresa\'s Convent School, Karnal\nCollege - Computer Engineering, NIT Kurukshetra(2015)',
                'meaning' 			: 'will tell you about my education'
            },
            '10thmarks'             :{
                'display_value'     : '94%',
                'meaning'           : 'will tell you about my 10th standard\'s marks'
            },
            '12thmarks'             :{
                'display_value'     : '90.4%',
                'meaning'           : 'will tell you about my 12th standard\'s marks'
            }
        };

    $('#term_demo').terminal(function(command, term){
        //list all commands
        if(command === 'man'){
            Object.keys(commands).forEach(function(key){
                term.echo("[" + key + "] - " + commands[key].meaning);
            });
        } else{
             if(commands.hasOwnProperty(command)){
            term.echo(commands[command].display_value);
            }else{
                if(command === '')
                    term.echo('To see, Type');
                else
                    term.echo('command `' + command + '` not found ... type `man` to see all available commands');
            }
        }
       
    }, {
        greetings   : 'Vidur Khanna',
        name        : 'js_demo',
        prompt      : 'VK> '
    });

});
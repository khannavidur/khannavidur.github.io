jQuery(function($, undefined) {

    var
        commands                    = {
            'name'                  : {
                'display_value'     : 'Vidur Khanna',
                'meaning'           : 'will display my name'
                },
            'education'             : {
                'display_value'     : 'School - St. Theresa\'s Convent School, Karnal\nGraduation - Computer Engineering, NIT Kurukshetra(2015)',
                'meaning'           : 'will tell you about my education'
            },
            '10thmarks'             :{
                'display_value'     : '94%',
                'meaning'           : 'will tell you about my 10th standard\'s marks'
            },
            '12thmarks'             :{
                'display_value'     : '90.4%',
                'meaning'           : 'will tell you about my 12th standard\'s marks'
            },
            'openSource'            :{
                'display_value'     : ' - Elastic Search Wrapper​ for Node JS, under Paytm.\n - Binary Search for Tiny-range​ numbers with the nearest neighbours support, under Paytm.\n - MYSQL Wrapper ​for Node JS to provide ​Pagination​.\n - Found a ​bug in bootstrap ​and raised the issue with their team​.\n - Bash Script for ​Yoda Tongue ​utilizing Mashable API and then added it to the Jarvis, a Hubot for Paytm’s Slack​',
                'meaning'           : 'will tell you about my open source contributions'
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
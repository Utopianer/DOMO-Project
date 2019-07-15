
            $('#selectLanguageDropdown').localizationTool({
                'defaultLanguage' : 'en_GB', /* (optional) although must be defined if you don't want en_GB */
                'showFlag': true,            /* (optional) show/hide the flag */
                'showCountry': false,         /* (optional) show/hide the country name */
                'showLanguage': true,        /* (optional) show/hide the country language */
                'languages' : {              /* (optional) define **ADDITIONAL** custom languages */
                    'italian' : {
                        'country': 'Italy',
                        'language' : 'Italian',
                        'countryTranslated': 'Italia',
                        'languageTranslated': 'Italiano',
                        'flag' : {
                            'url' : 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Farm-Fresh_italy.png', /* url of flag image */
                            'class' : 'italian-flag' /* (optional) class to assign to the flag (e.g., for css styling) */
                        }
                    },
                    'german' : {
                        'country' : 'Germany',
                        'language' : 'German',
                        'languageTranslated' : 'Deutsch',
                        'flag': {
                            'url' : 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Germanyflag.png'
                        }
                    },
                }
            });

(function(){
    var modules={
        "panel-main-cbd-insomnia":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child-cbd-insomnia":              {url:"$H/m/panel-child.html"},
        "panel-library-cbd-insomnia":    		{url:"$H/m/panel-library.html",router:1},
        "panel-export-screening-cbd-insomnia":   {url:"$H/m/export/panel-export-screened.html",router:1},
        "panel-export-enrolled-cbd-insomnia":    {url:"$H/m/export/panel-export-enrolled.html",router:1},
        "export-data":		                {url:"$H/m/export/export-data.html",Table:"export-cbd-insomnia",form_module:"export-form"},
        "export-form":		                {url:"$H/m/export/export-form.html",Table:"export-cbd-insomnia"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"cbd-insomnia-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-cbd-insomnia",
                                                questionnaire_setup:"online-questionnaire-setup-cbd-insomnia",
                                                online_questionnaire:"online-questionnaire-app-cbd-insomnia",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                                                participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB"
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"cbd-insomnia-participant"},

        "online-questionnaire-setup-cbd-insomnia": {url:"$H/m/oq-setup.html",Table:"cbd-insomnia-participant"},
        "online-questionnaire-app-cbd-insomnia":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"cbd-insomnia-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"cbd-insomnia-notes"},

        "randomisation-table-data-cbd-insomnia":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-cbd-insomnia",form_module:"randomisation-table-form-cbd-insomnia"},
        "randomisation-table-form-cbd-insomnia":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-cbd-insomnia"},

        "file-notes-data-cbd-insomnia":		{url:"$H/m/library/file-notes-data.html",Table:"file-notes-cbd-insomnia",form_module:"file-notes-form-cbd-insomnia",task_name:"Unscheduled - File Notes"},
        "file-notes-form-cbd-insomnia":		{url:"$H/m/library/file-notes-form.html",Table:"file-notes-cbd-insomnia",task_name:"Unscheduled - File Notes"},
        "adverse-event-data-cbd-insomnia":		{url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-cbd-insomnia",form_module:"adverse-event-form-cbd-insomnia",task_name:"Unscheduled - Adverse Event"},
        "adverse-event-form-cbd-insomnia":		{url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-cbd-insomnia",task_name:"Unscheduled - Adverse Event"},
        "consent-data-cbd-insomnia":		        {url:"$H/m/library/consent-data.html",Table:"consent-cbd-insomnia",form_module:"consent-form-cbd-insomnia",task_name:"Self Report Screening - Consent"},
        "consent-form-cbd-insomnia":		        {url:"$H/m/library/consent-form.html",Table:"consent-cbd-insomnia",task_name:"Self Report Screening - Consent"},
        "gds-data-cbd-insomnia":		{url:"$H/m/library/gds-data.html",Table:"gds-cbd-insomnia",form_module:"gds-form-cbd-insomnia",task_name:"Self Report Screening - Geriatric Depression Scale"},
        "gds-form-cbd-insomnia":		{url:"$H/m/library/gds-form.html",Table:"gds-cbd-insomnia",task_name:"Self Report Screening - Geriatric Depression Scale"},
        "isi-data-cbd-insomnia":	    {url:"$H/m/library/isi-data.html",Table:"isi-cbd-insomnia",form_module:"isi-form-cbd-insomnia",task_name:"Self Report Screening - Insomnia Severity Index"},
        "isi-form-cbd-insomnia":	    {url:"$H/m/library/isi-de-form.html",Table:"isi-cbd-insomnia",task_name:"Self Report Screening - Insomnia Severity Index"},
        "medical-history-data-cbd-insomnia":	    {url:"$H/m/library/medical-history-data.html",Table:"medical-history-cbd-insomnia",form_module:"medical-history-form-cbd-insomnia",task_name:"Self Report Screening - Medical History Questionnaire"},
        "medical-history-form-cbd-insomnia":	    {url:"$H/m/library/medical-history-form.html",Table:"medical-history-cbd-insomnia",task_name:"Self Report Screening - Medical History Questionnaire"},
        "medication-data-cbd-insomnia":	    {url:"$H/m/library/medications-data.html",Table:"medication-cbd-insomnia",form_module:"medication-form-cbd-insomnia",task_name:"Self Report Screening - Medication Questionnaire"},
        "medication-form-cbd-insomnia":	    {url:"$H/m/library/medications-form.html",Table:"medication-cbd-insomnia",task_name:"Self Report Screening - Medication Questionnaire"},
        "lifestyle-data-cbd-insomnia":	    {url:"$H/m/library/lifestyle-data.html",Table:"lifestyle-cbd-insomnia",form_module:"lifestyle-form-cbd-insomnia",task_name:"Self Report Screening - Lifestyle questionnaire"},
        "lifestyle-form-cbd-insomnia":	    {url:"$H/m/library/lifestyle-form.html",Table:"lifestyle-cbd-insomnia",task_name:"Self Report Screening - Lifestyle questionnaire"},
        "ethnicity-data-cbd-insomnia":	    {url:"$H/m/library/ethnicity-data.html",Table:"ethnicity-cbd-insomnia",form_module:"ethnicity-form-cbd-insomnia",task_name:"Self Report Screening - Ethnicity questionnaire"},
        "ethnicity-form-cbd-insomnia":	    {url:"$H/m/library/ethnicity-form.html",Table:"ethnicity-cbd-insomnia",task_name:"Self Report Screening - Ethnicity questionnaire"},
        "education-data-cbd-insomnia":	    {url:"$H/m/library/education-data.html",Table:"education-cbd-insomnia",form_module:"education-form-cbd-insomnia",task_name:"Self Report Screening - Education questionnaire"},
        "education-form-cbd-insomnia":	    {url:"$H/m/library/education-form.html",Table:"education-cbd-insomnia",task_name:"Self Report Screening - Education questionnaire"},
        "wristox-s-data-cbd-insomnia":	    {url:"$H/m/library/wristox-data.html",Table:"wristox-cbd-insomnia",form_module:"wristox-s-form-cbd-insomnia",task_name:"Screening - Wristox"},
        "wristox-s-form-cbd-insomnia":	    {url:"$H/m/library/wristox-form.html",Table:"wristox-cbd-insomnia",task_name:"Screening - Wristox"},
        "mmse-s-data-cbd-insomnia":	    {url:"$H/m/library/mmse-data.html",Table:"mmse-cbd-insomnia",form_module:"mmse-s-form-cbd-insomnia",task_name:"Screening - Mini‐Mental State Examination Score"},
        "mmse-s-form-cbd-insomnia":	    {url:"$H/m/library/mmse-form.html",Table:"mmse-cbd-insomnia",task_name:"Screening - Mini‐Mental State Examination Score"},

        "date-s-data-cbd-insomnia":                {url:"$H/m/library/date-data.html",Table:"date-s-cbd-insomnia",form_module:"date-s-form-cbd-insomnia",task_name:"Screening - Visit Date"},
        "date-s-form-cbd-insomnia":                {url:"$H/m/library/date-form.html",Table:"date-s-cbd-insomnia",task_name:"Screening - Visit Date"},
        "dsm-s-data-cbd-insomnia":                {url:"$H/m/library/dsm-data.html",Table:"dsm-s-cbd-insomnia",form_module:"dsm-s-form-cbd-insomnia",task_name:"Screening - DSM-IV M.I.N.I"},
        "dsm-s-form-cbd-insomnia":                {url:"$H/m/library/dsm-form.html",Table:"dsm-s-cbd-insomnia",task_name:"Screening - DSM-IV M.I.N.I"},
        "wtars-s-data-cbd-insomnia":                {url:"$H/m/library/wtars-data.html",Table:"wtars-s-cbd-insomnia",form_module:"wtars-s-form-cbd-insomnia",task_name:"Screening - Wechsler Test of Adult Reading Score"},
        "wtars-s-form-cbd-insomnia":                {url:"$H/m/library/wtars-form.html",Table:"wtars-s-cbd-insomnia",task_name:"Screening - Wechsler Test of Adult Reading Score"},
        "ravlts-s-data-cbd-insomnia":                {url:"$H/m/library/ravlts-data.html",Table:"ravlts-s-cbd-insomnia",form_module:"ravlts-s-form-cbd-insomnia",task_name:"Screening - Rey Auditory Verbal Learning Test Scores"},
        "ravlts-s-form-cbd-insomnia":                {url:"$H/m/library/ravlts-form.html",Table:"ravlts-s-cbd-insomnia",task_name:"Screening - Rey Auditory Verbal Learning Test Scores"},
        "tmts-s-data-cbd-insomnia":                {url:"$H/m/library/tmts-data.html",Table:"tmts-s-cbd-insomnia",form_module:"tmts-s-form-cbd-insomnia",task_name:"Screening - Trail Making Test Scores"},
        "tmts-s-form-cbd-insomnia":                {url:"$H/m/library/tmts-form.html",Table:"tmts-s-cbd-insomnia",task_name:"Screening - Trail Making Test Scores"},
        "stroop-s-data-cbd-insomnia":		            {url:"$H/m/library/stroop-data.html",Table:"stroop-s-cbd-insomnia",form_module:"stroop-s-form-cbd-insomnia",task_name:"Screening - Stroop Data Entry"},
        "stroop-s-form-cbd-insomnia":		            {url:"$H/m/library/stroop-form.html",Table:"stroop-s-cbd-insomnia",task_name:"Screening - Stroop Data Entry"},
//        "stroop-colour-s-data-cbd-insomnia":		            {url:"$H/m/neurocog/stroop-colour-data.html",Table:"stroop-colour-s-cbd-insomnia",form_module:"stroop-colour-s-form-cbd-insomnia",task_name:"Screening - Stroop Colour"},
//        "stroop-colour-s-form-cbd-insomnia":		            {url:"$H/m/neurocog/stroop-colour-form.html",Table:"stroop-colour-s-cbd-insomnia",task_name:"Screening - Stroop Colour"},

        "date-ssn-data-cbd-insomnia":                {url:"$H/m/library/date-data.html",Table:"date-ssn-cbd-insomnia",form_module:"date-ssn-form-cbd-insomnia",task_name:"Sleep Study - Visit Date"},
        "date-ssn-form-cbd-insomnia":                {url:"$H/m/library/date-form.html",Table:"date-ssn-cbd-insomnia",task_name:"Sleep Study - Visit Date"},
        "anthropometry-ssn-data-cbd-insomnia":                {url:"$H/m/library/anthropometry-data.html",Table:"anthropometry-ssn-cbd-insomnia",form_module:"anthropometry-ssn-form-cbd-insomnia",task_name:"Sleep Study - Anthropometry"},
        "anthropometry-ssn-form-cbd-insomnia":                {url:"$H/m/library/anthropometry-form.html",Table:"anthropometry-ssn-cbd-insomnia",task_name:"Sleep Study - Anthropometry"},
        "hads-ssn-data-cbd-insomnia":                {url:"$H/m/library/hads-data.html",Table:"hads-ssn-cbd-insomnia",form_module:"hads-ssn-form-cbd-insomnia",task_name:"Sleep Study - Hospital Anxiety and Depression Scale"},
        "hads-ssn-form-cbd-insomnia":                {url:"$H/m/library/hads-form.html",Table:"hads-ssn-cbd-insomnia",task_name:"Sleep Study - Hospital Anxiety and Depression Scale"},
        "me-ssn-data-cbd-insomnia":                {url:"$H/m/library/me-data.html",Table:"me-ssn-cbd-insomnia",form_module:"me-ssn-form-cbd-insomnia",task_name:"Sleep Study - Horne and Ӧstberg Morningness‐Eveningness Questionnaire"},
        "me-ssn-form-cbd-insomnia":                {url:"$H/m/library/me-form.html",Table:"me-ssn-cbd-insomnia",task_name:"Sleep Study - Horne and Ӧstberg Morningness‐Eveningness Questionnaire"},
        "psqi-ssn-data-cbd-insomnia":                {url:"$H/m/library/psqi-data.html",Table:"psqi-ssn-cbd-insomnia",form_module:"psqi-ssn-form-cbd-insomnia",task_name:"Sleep Study - Pittsburgh Sleep Quality Index"},
        "psqi-ssn-form-cbd-insomnia":                {url:"$H/m/library/psqi-form.html",Table:"psqi-ssn-cbd-insomnia",task_name:"Sleep Study - Pittsburgh Sleep Quality Index"},
        "ffs-ssn-data-cbd-insomnia":                {url:"$H/m/library/ffs-data.html",Table:"ffs-ssn-cbd-insomnia",form_module:"ffs-ssn-form-cbd-insomnia",task_name:"Sleep Study - Flinders Fatigue Scale Score"},
        "ffs-ssn-form-cbd-insomnia":                {url:"$H/m/library/ffs-form.html",Table:"ffs-ssn-cbd-insomnia",task_name:"Sleep Study - Flinders Fatigue Scale Score"},
        "ess-ssn-data-cbd-insomnia":                {url:"$H/m/library/ess-data.html",Table:"ess-ssn-cbd-insomnia",form_module:"ess-ssn-form-cbd-insomnia",task_name:"Sleep Study - Epworth Sleepiness Scale (ESS)"},
        "ess-ssn-form-cbd-insomnia":                {url:"$H/m/library/ess-form.html",Table:"ess-ssn-cbd-insomnia",task_name:"Sleep Study - Epworth Sleepiness Scale (ESS)"},
        "kss-ssne-data-cbd-insomnia":                {url:"$H/m/library/kss-data.html",Table:"kss-ssne-cbd-insomnia",form_module:"kss-ssne-form-cbd-insomnia",task_name:"Sleep Study - Karolinska Sleepiness Scale (Evening)"},
        "kss-ssne-form-cbd-insomnia":                {url:"$H/m/library/kss-form.html",Table:"kss-ssne-cbd-insomnia",task_name:"Sleep Study - Karolinska Sleepiness Scale (Evening)"},
        "kss-ssnm-data-cbd-insomnia":                {url:"$H/m/library/kss-data.html",Table:"kss-ssnm-cbd-insomnia",form_module:"kss-ssnm-form-cbd-insomnia",task_name:"Sleep Study - Karolinska Sleepiness Scale (Morning)"},
        "kss-ssnm-form-cbd-insomnia":                {url:"$H/m/library/kss-form.html",Table:"kss-ssnm-cbd-insomnia",task_name:"Sleep Study - Karolinska Sleepiness Scale (Morning)"},

        "iapsl-ssn-data-cbd-insomnia":                {url:"$H/m/library/iapsl-data.html",Table:"iapsl-ssn-cbd-insomnia",form_module:"iapsl-ssn-form-cbd-insomnia",task_name:"Sleep Study - International Affective Picture System task evening learning"},
        "iapsl-ssn-form-cbd-insomnia":                {url:"$H/m/library/iapsl-form.html",Table:"iapsl-ssn-cbd-insomnia",task_name:"Sleep Study - International Affective Picture System task evening learning"},
        "iapsr1-ssne-data-cbd-insomnia":                {url:"$H/m/library/iapsr1-data.html",Table:"iapsr1-ssne-cbd-insomnia",form_module:"iapsr1-ssne-form-cbd-insomnia",task_name:"Sleep Study - International Affective Picture System task evening recognition"},
        "iapsr1-ssne-form-cbd-insomnia":                {url:"$H/m/library/iapsr1-form.html",Table:"iapsr1-ssne-cbd-insomnia",task_name:"Sleep Study - International Affective Picture System task evening recognition"},
        "iapsr2-ssnm-data-cbd-insomnia":                {url:"$H/m/library/iapsr2-data.html",Table:"iapsr2-ssnm-cbd-insomnia",form_module:"iapsr2-ssnm-form-cbd-insomnia",task_name:"Sleep Study - International Affective Picture System task morning recognition"},
        "iapsr2-ssnm-form-cbd-insomnia":                {url:"$H/m/library/iapsr2-form.html",Table:"iapsr2-ssnm-cbd-insomnia",task_name:"Sleep Study - International Affective Picture System task morning recognition"},
        "pupillometry-ssn-data-cbd-insomnia":                {url:"$H/m/library/pupillometry-data.html",Table:"pupillometry-ssn-cbd-insomnia",form_module:"pupillometry-ssn-form-cbd-insomnia",task_name:"Sleep Study - Pupillometry output"},
        "pupillometry-ssn-form-cbd-insomnia":                {url:"$H/m/library/pupillometry-form.html",Table:"pupillometry-ssn-cbd-insomnia",task_name:"Sleep Study - Pupillometry output"},
        "cavl-ssn-data-cbd-insomnia":                {url:"$H/m/library/cavl-data.html",Table:"cavl-ssn-cbd-insomnia",form_module:"cavl-ssn-form-cbd-insomnia",task_name:"Sleep Study - Cognitive Affective Verbal Learning task scores"},
        "cavl-ssn-form-cbd-insomnia":                {url:"$H/m/library/cavl-form.html",Table:"cavl-ssn-cbd-insomnia",task_name:"Sleep Study - Cognitive Affective Verbal Learning task scores"},

        "psggrr-ssn-data-cbd-insomnia":                    {url:"$H/m/library/psggrr-data.html",Table:"psggrr-ssn-cbd-insomnia",form_module:"psggrr-ssn-form-cbd-insomnia",task_name:"Sleep Study - Grael Research PSG Report"},
        "psggrr-ssn-form-cbd-insomnia":                    {url:"$H/m/library/psggrr-form.html",Table:"psggrr-ssn-cbd-insomnia",task_name:"Sleep Study - Grael Research PSG Report"},
        "psg-edf-ssn-data-cbd-insomnia":                    {url:"$H/m/library/upload-file-data.html",Table:"psg-edf-ssn-cbd-insomnia",form_module:"psg-edf-ssn-form-cbd-insomnia",task_name:"Sleep Study - PSG EDF"},
        "psg-edf-ssn-form-cbd-insomnia":                    {url:"$H/m/library/upload-file-form.html",Table:"psg-edf-ssn-cbd-insomnia",task_name:"Sleep Study - PSG EDF"},
        "sleep-scoring-ssn-data-cbd-insomnia":                    {url:"$H/m/library/upload-file-data.html",Table:"sleep-scoring-ssn-cbd-insomnia",form_module:"sleep-scoring-ssn-form-cbd-insomnia",task_name:"Sleep Study - Sleep Scoring/Staging upload (hypnogram)"},
        "sleep-scoring-ssn-form-cbd-insomnia":                    {url:"$H/m/library/upload-file-form.html",Table:"sleep-scoring-ssn-cbd-insomnia",task_name:"Sleep Study - Sleep Scoring/Staging upload (hypnogram)"},
        "source-doc-ssn-data-cbd-insomnia":                    {url:"$H/m/library/upload-file-data.html",Table:"source-doc-ssn-cbd-insomnia",form_module:"source-doc-ssn-form-cbd-insomnia",task_name:"Sleep Study - Source Documentation"},
        "source-doc-ssn-form-cbd-insomnia":                    {url:"$H/m/library/upload-file-form.html",Table:"source-doc-ssn-cbd-insomnia",task_name:"Sleep Study - Source Documentation"},
        "geoscan-ssn-data-cbd-insomnia":                    {url:"$H/m/library/upload-file-data.html",Table:"geoscan-ssn-cbd-insomnia",form_module:"geoscan-ssn-form-cbd-insomnia",task_name:"Sleep Study - Geoscan File upload"},
        "geoscan-ssn-form-cbd-insomnia":                    {url:"$H/m/library/upload-file-form.html",Table:"geoscan-ssn-cbd-insomnia",task_name:"Sleep Study - Geoscan File upload"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();

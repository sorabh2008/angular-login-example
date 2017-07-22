app.service('Quest_Service', function(){
    this.getQuest = function(){
        return [{check:false,question:'ques1'},
                {check:false,question:'ques2'},
                {check:false,question:'ques3'},
                {check:false,question:'ques4'},
                {check:false,question:'ques5'},
                {check:false,question:'ques6'}];
    };
});
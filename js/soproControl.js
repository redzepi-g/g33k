$(document).ready(function(){


    //get the input fields
    let inputProspectUniverse = document.getElementById("prospect-universe");
    let inputLeadToPitch = document.getElementById("lead-to-pitch");
    let inputPitchToProposal = document.getElementById("pitch-to-proposal");
    let inputProposal = document.getElementById("proposal");

    //get the sopro input fields
    let inputSoProOne = document.getElementById("sopro-1");
    let inputSoProTwo = document.getElementById("sopro-2");
    let inputSoProThree = document.getElementById("sopro-3");
    let inputSoProFour = document.getElementById("sopro-4");

    //get the progress bars
    let pbUniverse = document.getElementById("pb-universe");
    let pbEngaged = document.getElementById("pb-engaged");
    let pbOpens = document.getElementById("pb-opens");
    let pbResponses = document.getElementById("pb-responses");
    let pbLeads = document.getElementById("pb-leads");
    let pbPitch = document.getElementById("pb-pitch");
    let pbPropose = document.getElementById("pb-propose");
    let pbClose = document.getElementById("pb-close");

    //get the outer div progress for animiation styles
    let pbUniverseBig = document.getElementById("pbUniverse-big");
    let pbEngagedBig = document.getElementById("pbEngaged-big");
    let pbOpensBig = document.getElementById("pbOpens-big");
    let pbResponsesBig = document.getElementById("pbResponses-big");
    let pbLeadsBig = document.getElementById("pbLeads-big");
    let pbPitchBig = document.getElementById("pbPitch-big");
    let pbProposeBig = document.getElementById("pbPropose-big");
    let pbCloseBig = document.getElementById("pbClose-big");
    
    //function to update the progress bar
    function updateBar(pb, width, value){

        pb.setAttribute("style",`width: ${width}%;`);
        pb.setAttribute("aria-valuenow", value);
        pb.innerHTML = Math.round(value);

    }


    // progress prospect universe update
    inputProspectUniverse.addEventListener("change",function(){

        //get the %
        let pbu_width = inputProspectUniverse.value;
        let pbu_percent = 0;
        if(pbu_width < 100){
            pbu_percent = "0."+ pbu_width;
        }else{
            pbu_percent = "1";
        }
        //calculate the %
        let pbu_value = (pbUniverse.getAttribute("aria-valuemax")) * pbu_percent;
        //update the bar
        updateBar(pbUniverse, pbu_width, pbu_value);
        
        //get the %
        let pbe_width = inputSoProOne.value;
        let pbe_percent = 0;
        if(pbe_width < 100){
            pbe_percent = "0."+ pbe_width;
        }else{
            pbe_percent = "1";
        }
        //calculate the %
        let pbe_value = (pbUniverse.getAttribute("aria-valuenow")) * pbe_percent;
        //update the bar
        updateBar(pbEngaged, pbe_width, pbe_value);

        //get the %
        let pbo_width = inputSoProTwo.value;
        let pbo_percent = 0;
        if(pbo_width < 100){
            pbo_percent = "0."+ pbo_width;
        }else{
            pbo_percent = "1";
        }
        //calculate the %
        let pbo_value = (pbEngaged.getAttribute("aria-valuenow")) * pbo_percent;
        //update the bar
        updateBar(pbOpens, pbo_width, pbo_value);

        //get the %
        let pbr_width = inputSoProThree.value;
        let pbr_percent = 0;
        if(pbr_width < 100){
            pbr_percent = "0."+ pbr_width;
        }else{
            pbr_percent = "1";
        }
        //calculate the %
        let pbr_value = (pbOpens.getAttribute("aria-valuenow")) * pbr_percent;
        //update the bar
        updateBar(pbResponses, pbr_width, pbr_value);

        //get the %
        let pbl_width = inputSoProFour.value;
        let pbl_percent = 0;
        if(pbl_width < 100){
            pbl_percent = "0."+ pbl_width;
        }else{
            pbl_percent = "1";
        }
        //calculate the %
        let pbl_value = (pbResponses.getAttribute("aria-valuenow")) * pbl_percent;
        //update the bar
        updateBar(pbLeads, pbl_width, pbl_value);

        //add style 
        pbUniverseBig.setAttribute("style","border:1px solid #00b2d1; height:35px;");      
        setTimeout(function(){  
            pbUniverseBig.setAttribute("style","border:none; height:25px;"); 
        }, 2500);

        //add style 
        pbEngagedBig.setAttribute("style","border:1px solid #00b2d1; height:35px;");      
        setTimeout(function(){  
            pbEngagedBig.setAttribute("style","border:none; height:25px;"); 
        }, 2500);

        //add style 
        pbOpensBig.setAttribute("style","border:1px solid #00b2d1; height:35px;");      
        setTimeout(function(){  
            pbOpensBig.setAttribute("style","border:none; height:25px;"); 
        }, 2500);

        //add style 
        pbResponsesBig.setAttribute("style","border:1px solid #00b2d1; height:35px;");      
        setTimeout(function(){  
            pbResponsesBig.setAttribute("style","border:none; height:25px;"); 
        }, 2500);


    });

    //lead to pitch
    inputLeadToPitch.addEventListener("change",function(){

        //get the %
        let pbp_width = inputLeadToPitch.value;
        let pbp_percent = 0;
        if(pbp_width < 100){
            pbp_percent = "0."+ pbp_width;
        }else{
            pbp_percent = "1";
        }
        //calculate the %
        let pbp_value = (pbLeads.getAttribute("aria-valuenow")) * pbp_percent;
        //update the bar
        updateBar(pbPitch, pbp_width, pbp_value);

        //add style 
        pbPitchBig.setAttribute("style","border:1px solid #00b2d1; height:35px;");      
        setTimeout(function(){  
            pbPitchBig.setAttribute("style","border:none; height:25px;"); 
        }, 2500);

        //get the %
        let pbpr_width = inputPitchToProposal.value;
        let pbpr_percent = 0;
        if(pbpr_width < 100){
            pbpr_percent = "0."+ pbpr_width;
        }else{
            pbpr_percent = "1";
        }
        //calculate the %
        let pbpr_value = (pbPitch.getAttribute("aria-valuenow")) * pbpr_percent;

        //update the bar
        updateBar(pbPropose, pbpr_width, pbpr_value);

        //get the %
        let pbprp_width = inputProposal.value;
        let pbprp_percent = 0;
        if(pbprp_width < 100){
            pbprp_percent = "0."+ pbprp_width;
        }else{
            pbprp_percent = "1";
        }
        //calculate the %
        let pbprp_value = (pbPropose.getAttribute("aria-valuenow")) * pbprp_percent;

        //update the bar
        updateBar(pbClose, pbprp_width, pbprp_value);
    });

    //pitch to propose
    inputPitchToProposal.addEventListener("change",function(){
        
        //get the %
        let pbpr_width = inputPitchToProposal.value;
        let pbpr_percent = 0;
        if(pbpr_width < 100){
            pbpr_percent = "0."+ pbpr_width;
        }else{
            pbpr_percent = "1";
        }
        //calculate the %
        let pbpr_value = (pbPitch.getAttribute("aria-valuenow")) * pbpr_percent;

        //update the bar
        updateBar(pbPropose, pbpr_width, pbpr_value);

        //add style 
        pbProposeBig.setAttribute("style","border:1px solid #00b2d1; height:35px;");      
        setTimeout(function(){  
            pbProposeBig.setAttribute("style","border:none; height:25px;"); 
        }, 2500);
    });

    //desired proposal
    inputProposal.addEventListener("change",function(){
        
        //get the %
        let pbprp_width = inputProposal.value;
        let pbprp_percent = 0;
        if(pbprp_width < 100){
            pbprp_percent = "0."+ pbprp_width;
        }else{
            pbprp_percent = "1";
        }
        //calculate the %
        let pbprp_value = (pbPropose.getAttribute("aria-valuenow")) * pbprp_percent;

        //update the bar
        updateBar(pbClose, pbprp_width, pbprp_value);

        //add style 
        pbCloseBig.setAttribute("style","border:1px solid #00b2d1; height:35px;");      
        setTimeout(function(){  
            pbCloseBig.setAttribute("style","border:none; height:25px;"); 
        }, 2500);

    });


   

});